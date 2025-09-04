-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Leads policies (public read for admin, authenticated insert)
CREATE POLICY "Anyone can insert leads" ON public.leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads" ON public.leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Testimonials policies (public read, admin write)
CREATE POLICY "Anyone can view published testimonials" ON public.testimonials
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert testimonials" ON public.testimonials
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update testimonials" ON public.testimonials
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Awards policies (public read, admin write)
CREATE POLICY "Anyone can view awards" ON public.awards
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert awards" ON public.awards
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update awards" ON public.awards
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Case studies policies (public read for published, admin write)
CREATE POLICY "Anyone can view published case studies" ON public.case_studies
  FOR SELECT USING (published = true);

CREATE POLICY "Authenticated users can view all case studies" ON public.case_studies
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert case studies" ON public.case_studies
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update case studies" ON public.case_studies
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Services policies (public read, admin write)
CREATE POLICY "Anyone can view services" ON public.services
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert services" ON public.services
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update services" ON public.services
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create a function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
