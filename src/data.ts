import {
  ServiceItem,
  WhyFeatureItem,
  ProcessStepItem,
  PortfolioItem,
  StatItem,
  TargetAudienceItem,
  TestimonialItem,
  ContactInfoConfig
} from './types';

export const INITIAL_STATS: StatItem[] = [
  {
    id: 'stat-1',
    value: '500+',
    label: 'Projects',
    sublabel: 'Delivered successfully across Maharashtra & India',
    iconName: 'FolderCheck'
  },
  {
    id: 'stat-2',
    value: '98%',
    label: 'Client Satisfaction',
    sublabel: 'Highest rating in local business support',
    iconName: 'HeartHandshake'
  },
  {
    id: 'stat-3',
    value: '24/7',
    label: 'Digital Support',
    sublabel: 'Dedicated assistance for tech & marketing',
    iconName: 'Headphones'
  },
  {
    id: 'stat-4',
    value: '10+',
    label: 'Digital Services',
    sublabel: 'End-to-end digital partner under one roof',
    iconName: 'Layers'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-design',
    number: '01',
    title: 'Website Design',
    description: 'Modern, responsive and professional websites designed to create a powerful first impression.',
    features: [
      'Business Websites',
      'Landing Pages',
      'Responsive Design',
      'Modern UI/UX'
    ],
    icon: 'Layout',
    highlight: true
  },
  {
    id: 'social-media',
    number: '02',
    title: 'Social Media Management',
    description: 'Build your brand and connect with your audience through consistent social media content.',
    features: [
      'Facebook',
      'Instagram',
      'Posts',
      'Reels',
      'Content Planning'
    ],
    icon: 'Share2'
  },
  {
    id: 'digital-branding',
    number: '03',
    title: 'Digital Branding',
    description: 'Create a strong and recognizable identity for your business.',
    features: [
      'Logo Design',
      'Brand Identity',
      'Business Profile',
      'Marketing Creatives'
    ],
    icon: 'Sparkles',
    highlight: true
  },
  {
    id: 'google-business',
    number: '04',
    title: 'Google Business Profile',
    description: 'Help customers discover your business on Google and build local visibility.',
    features: [
      'Google Business Profile',
      'Business Information',
      'Photos & Posts',
      'Reviews',
      'Local Visibility'
    ],
    icon: 'MapPin'
  },
  {
    id: 'content-reels',
    number: '05',
    title: 'Content & Reels',
    description: 'Creative content designed to attract attention and increase engagement.',
    features: [
      'Social Media Posts',
      'Reels',
      'Promotional Videos',
      'Festival Creatives',
      'Business Content'
    ],
    icon: 'Film'
  },
  {
    id: 'growth-planning',
    number: '06',
    title: 'Digital Growth Planning',
    description: 'Smart digital strategies designed to help your business grow online.',
    features: [
      'Digital Strategy',
      'Content Planning',
      'Online Presence',
      'Growth Planning'
    ],
    icon: 'TrendingUp'
  }
];

export const WHY_CHOOSE_DATA: WhyFeatureItem[] = [
  {
    number: '01',
    title: 'Professional',
    description: 'Build a professional digital identity for your business with premium modern standards.',
    icon: 'Award'
  },
  {
    number: '02',
    title: 'Creative',
    description: 'Modern and engaging designs created specifically for your brand and target customers.',
    icon: 'Palette'
  },
  {
    number: '03',
    title: 'Affordable',
    description: 'Practical, high-impact digital solutions designed cost-effectively for growing businesses.',
    icon: 'BadgePercent'
  },
  {
    number: '04',
    title: 'Growth Focused',
    description: 'Solutions focused not only on aesthetic design, but on real customer inquiries and business growth.',
    icon: 'Rocket'
  }
];

export const PROCESS_DATA: ProcessStepItem[] = [
  {
    step: '01',
    title: 'CONNECT',
    tag: 'Step 01',
    description: 'Tell us about your business and your goals.'
  },
  {
    step: '02',
    title: 'PLAN',
    tag: 'Step 02',
    description: 'We create a digital strategy based on your requirements.'
  },
  {
    step: '03',
    title: 'CREATE',
    tag: 'Step 03',
    description: 'We build your website, branding and digital content.'
  },
  {
    step: '04',
    title: 'GROW',
    tag: 'Step 04',
    description: 'We help strengthen your online presence and reach.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Enterprise Business Website',
    category: 'website',
    categoryLabel: 'Business Website',
    description: 'High-speed corporate responsive web portal with conversion-optimized UI and interactive quote booking.',
    mockupTag: 'Next-Gen Web UI',
    features: ['Mobile-First', 'Fast 0.8s Load', 'SEO Optimized'],
    metrics: '+240% Inquiries'
  },
  {
    id: 'port-2',
    title: 'Social Media Branding & Feed',
    category: 'social',
    categoryLabel: 'Social Media Branding',
    description: 'Curated 30-day viral Instagram & Facebook campaign featuring branded aesthetic carousels and highlight covers.',
    mockupTag: 'Branded Content Grid',
    features: ['High Engagement', 'Custom Templates', 'Consistent Colorways'],
    metrics: '4.8x Reach Boost'
  },
  {
    id: 'port-3',
    title: 'Digital Marketing & Lead Generation',
    category: 'content',
    categoryLabel: 'Digital Marketing',
    description: 'Targeted hyper-local campaigns generating qualified inbound customer calls for service professionals.',
    mockupTag: 'High-ROI Campaign',
    features: ['Audience Retargeting', 'High CTR Creatives', 'Real-time Tracking'],
    metrics: '350+ Leads / Mo'
  },
  {
    id: 'port-4',
    title: 'Google Business Profile 5-Star Rank',
    category: 'google',
    categoryLabel: 'Google Business Profile',
    description: 'Local Map Pack #1 ranking optimization, verified verification, review funnel, and localized geotagged updates.',
    mockupTag: 'Google Maps #1 Ranking',
    features: ['Map Pack Domination', 'Review Automation', 'Local SEO'],
    metrics: 'TOP 3 Local Pack'
  },
  {
    id: 'port-5',
    title: 'Festive & Promotional Creatives',
    category: 'branding',
    categoryLabel: 'Promotional Creative',
    description: 'Eye-catching seasonal festival graphics, discount flyers, WhatsApp status cards, and print-ready creatives.',
    mockupTag: 'Festival & Promo Kit',
    features: ['Marathi & English', 'Instant Viral Share', 'Brand Watermarked'],
    metrics: '100% Brand Consistency'
  },
  {
    id: 'port-6',
    title: 'High-Engagement Business Reels',
    category: 'content',
    categoryLabel: 'Business Reels',
    description: 'Vertical 9:16 short video production, dynamic captions, trending audio curation, and business spotlight reels.',
    mockupTag: 'Viral 9:16 Format',
    features: ['Motion Graphics', 'Studio Voiceover', 'Hooks & CTA'],
    metrics: '75k+ Organic Views'
  }
];

export const TARGET_AUDIENCE_DATA: TargetAudienceItem[] = [
  {
    id: 'small-biz',
    title: 'Small Businesses',
    subtitle: 'Build credibility and attract local customers seeking your products or services.',
    icon: 'Store',
    recommendedServices: ['Website', 'Google Profile', 'Social Media']
  },
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Launch with a high-impact digital presence, investor-ready deck, and digital brand voice.',
    icon: 'Zap',
    recommendedServices: ['Modern UI/UX', 'Digital Strategy', 'Growth Plan']
  },
  {
    id: 'local-biz',
    title: 'Local Businesses',
    subtitle: 'Dominate Google search results and Google Maps when neighbors search nearby.',
    icon: 'MapPin',
    recommendedServices: ['Google Maps SEO', 'Local Leads', 'WhatsApp Chat']
  },
  {
    id: 'retail',
    title: 'Retail Shops',
    subtitle: 'Showcase shop inventory, daily offers, festival discounts and bring foot traffic.',
    icon: 'ShoppingBag',
    recommendedServices: ['Festival Creatives', 'Promotions', 'Reels']
  },
  {
    id: 'service-providers',
    title: 'Service Providers',
    subtitle: 'Attract high-paying direct client inquiries for clinics, consultants, builders and mechanics.',
    icon: 'Briefcase',
    recommendedServices: ['Lead Funnels', 'Business Profile', 'SEO']
  },
  {
    id: 'professionals',
    title: 'Professionals',
    subtitle: 'Chartered Accountants, Doctors, Advocates, Engineers and Architects looking for authority.',
    icon: 'GraduationCap',
    recommendedServices: ['Personal Branding', 'Portfolio', 'Authority Site']
  },
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs',
    subtitle: 'Transform visionary ideas into recognizable, scalable online commercial ventures.',
    icon: 'Sparkles',
    recommendedServices: ['Full Suite', 'Brand Guide', 'Growth Engine']
  },
  {
    id: 'growing-brands',
    title: 'Growing Brands',
    subtitle: 'Scale existing operations with streamlined multi-channel content and omnichannel reach.',
    icon: 'TrendingUp',
    recommendedServices: ['Content Engine', 'Lead Optimization', 'Scale Plan']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Rahul Deshmukh',
    businessName: 'Deshmukh Agro Solutions',
    businessType: 'Agri-Tech & Local Supplier',
    avatarText: 'RD',
    rating: 5,
    text: '"Connect Biz Media built our new website and set up our Google Business Profile in just 5 days. We immediately started receiving inquiries directly on WhatsApp. Truly our best digital partner!"',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    clientName: 'Priya Sharma',
    businessName: 'Aura Boutique & Studio',
    businessType: 'Fashion & Retail',
    avatarText: 'PS',
    rating: 5,
    text: '"Their social media management and reels creative service gave our brand a luxury feel. Customers regularly compliment the aesthetic of our posts. Growth has been phenomenal."',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    clientName: 'Amit Patil',
    businessName: 'Patil Logistics & Enterprise Services',
    businessType: 'Commercial Logistics & Corporate Services',
    avatarText: 'AP',
    rating: 5,
    text: '"One business, one digital partner — they literally live up to this promise! We do not have to chase different freelancers for web, branding, and ads anymore. Everything is handled seamlessly."',
    isPlaceholder: true
  }
];

export const INITIAL_CONTACT_CONFIG: ContactInfoConfig = {
  phone: '+91 70302 41981',
  whatsapp: '+917030241981',
  email: 'contact@connectbizmedia.com',
  location: 'Mumbai & Pune, Maharashtra, India',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com'
};
