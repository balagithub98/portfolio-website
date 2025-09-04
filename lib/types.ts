export type ServiceType = 'design' | 'development' | 'marketing'
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'

export interface Profile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  company?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface Lead {
  id: string
  name: string
  email: string
  message: string
  service_type?: ServiceType
  status: LeadStatus
  ip_address?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  company?: string
  role?: string
  content: string
  rating?: number
  avatar_url?: string
  featured: boolean
  service_type?: ServiceType
  created_at: string
  updated_at: string
}

export interface Award {
  id: string
  title: string
  description?: string
  issuer?: string
  year?: number
  logo_url?: string
  certificate_url?: string
  featured: boolean
  created_at: string
  updated_at: string
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  description?: string
  content?: string
  client_name?: string
  service_type: ServiceType
  technologies?: string[]
  results?: Record<string, any>
  featured_image_url?: string
  gallery_urls?: string[]
  featured: boolean
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  slug: string
  description?: string
  content?: string
  service_type: ServiceType
  icon?: string
  features?: string[]
  pricing?: Record<string, any>
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  service_type?: ServiceType
}
