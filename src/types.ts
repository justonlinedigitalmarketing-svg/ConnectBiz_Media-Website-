export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  highlight?: boolean;
}

export interface WhyFeatureItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'website' | 'social' | 'branding' | 'google' | 'content';
  categoryLabel: string;
  description: string;
  mockupTag: string;
  features: string[];
  metrics: string;
  image?: string;
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  recommendedServices: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  businessType: string;
  avatarText: string;
  rating: number;
  text: string;
  isPlaceholder: boolean;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}

export interface ContactInfoConfig {
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}
