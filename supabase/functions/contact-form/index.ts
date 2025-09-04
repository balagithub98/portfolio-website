import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  message: string
  service_type?: 'design' | 'development' | 'marketing'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse request body
    const { name, email, message, service_type }: ContactFormData = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get client IP and user agent for spam detection
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'

    // Check for spam (basic rate limiting by IP)
    const { data: recentSubmissions } = await supabaseClient
      .from('leads')
      .select('id')
      .eq('ip_address', clientIP)
      .gte('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString()) // Last hour

    if (recentSubmissions && recentSubmissions.length >= 5) {
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Insert lead into database
    const { data, error } = await supabaseClient
      .from('leads')
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          message: message.trim(),
          service_type: service_type || null,
          status: 'new',
          ip_address: clientIP,
          user_agent: userAgent,
        },
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit form' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Send notification email using MailerSend
    try {
      const mailerSendResponse = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('MAILERSEND_API_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: {
            email: Deno.env.get('MAILERSEND_FROM_EMAIL') || 'no-reply@yourdomain.com',
            name: 'hyybuu'
          },
          to: [
            {
              email: Deno.env.get('CONTACT_EMAIL') || 'contact@yourdomain.com',
              name: 'Website Contact'
            }
          ],
          subject: `New Contact Form Submission - ${service_type || 'General Inquiry'}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Type:</strong> ${service_type || 'General Inquiry'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${clientIP}</p>
          `,
          text: `
            New Contact Form Submission
            
            Name: ${name}
            Email: ${email}
            Service Type: ${service_type || 'General Inquiry'}
            Message: ${message}
            Submitted: ${new Date().toLocaleString()}
            IP Address: ${clientIP}
          `
        })
      })

      if (!mailerSendResponse.ok) {
        console.warn('Failed to send email notification:', await mailerSendResponse.text())
      }
    } catch (emailError) {
      console.warn('Email notification failed:', emailError)
      // Don't fail the form submission if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        id: data[0]?.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
