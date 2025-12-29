// config/siteConfig.js
export const siteConfig = {
  siteName: 'Leighton Plumbing and Heating',
  logo: {
    text: 'Leighton Plumbing and Heating',
    src: '/logo/leighton_plumbing_logo_transparent.png',
    alt: 'Leighton Plumbing and Heating Logo',
    height: 60,
  },
  metadata: {
    base: {
      title: 'Leighton Plumbing and Heating – Professional Plumbing & Heating Services',
      description:
        'Expert plumbing and heating services including boiler installations, repairs, bathroom fitting, central heating, and emergency callouts. Fully qualified Gas Safe registered engineers.',
      icons: { icon: '/favicon.ico' },
    },
  },

  fonts: {
    base: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
    baseClass: 'font-inter',
    headingClass: 'font-inter',
    google: { base: 'Inter', heading: 'Inter', accent: 'Inter' },
  },

  // Brand colors from logo
  brand: {
    primary: '#00A1D7', // blue
    secondary: '#FA0300', // red
    accent: '#E6F7FC', // light blue
    background: '#FFFFFF', // white
    dark: '#1A1A1A', // dark grey/black
  },

  styles: {
    bgLight: 'bg-white',
    bgPrimary: 'bg-[#00A1D7]',
    bgSecondary: 'bg-[#FA0300]',
    bgAccent: 'bg-[#E6F7FC]',
    textPrimary: 'text-[#1A1A1A]',
    textMuted: 'text-gray-600',
    textLight: 'text-white',
    borderLight: 'border-gray-200',
    borderDark: 'border-[#00A1D7]',
  },

  banner: {
    show: true,
    phone: '07368 158368',
    email: 'luke_leighton@icloud.com',
  },

  nav: {
    links: [
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'Leighton Plumbing and Heating',
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: '',
      facebook: '',
      linkedin: '',
      twitter: '',
      tiktok: '',
      youtube: '',
      tripadvisor: '',
    },
  },

  hero: {
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Professional plumber at work',
    heading: 'Professional Plumbing & Heating Services',
    subheading: 'Reliable, qualified engineer for all your plumbing and heating needs',
    ctaText: 'Get a Free Quote',
    ctaHref: '/contact',
  },

  services: {
    heading: 'My Services',
    subheading: 'Complete plumbing and heating solutions for your home',
    items: [
      {
        title: 'Boiler Installation',
        description: 'Expert installation of new boilers from leading brands. Energy-efficient systems tailored to your home and budget.',
        icon: 'boiler',
      },
      {
        title: 'Boiler Servicing & Repairs',
        description: 'Annual servicing to keep your boiler running safely and efficiently. Fast repairs when you need them most.',
        icon: 'service',
      },
      {
        title: 'Central Heating',
        description: 'Full central heating installations, repairs, and upgrades. Radiator fitting and power flushing services.',
        icon: 'heating',
      },
      {
        title: 'Bathroom Plumbing',
        description: 'Complete bathroom installations, from design to finish. Showers, baths, toilets, and basin fitting.',
        icon: 'bathroom',
      },
      {
        title: 'General Plumbing',
        description: 'From leaky taps to burst pipes, we handle all plumbing repairs and installations professionally.',
        icon: 'plumbing',
      },
      {
        title: 'Emergency Callouts',
        description: 'Plumbing emergencies don\'t wait. We offer rapid response for urgent heating and plumbing issues.',
        icon: 'emergency',
      },
    ],
  },

  about: {
    heading: 'About Me',
    content: `I'm Luke, your trusted local specialist for all plumbing and heating needs. With years of experience serving homes and businesses across Bucks, Berks, and Oxford, I pride myself on delivering quality workmanship and exceptional customer service.

As a fully qualified, Gas Safe registered engineer, I'm committed to providing reliable, efficient solutions for everything from routine maintenance to complex installations. I believe in doing the job right the first time, using quality materials and standing behind my work.

Whether you need a new boiler installed, your central heating serviced, or have a plumbing emergency, I'm here to help. I offer competitive prices, free quotes, and always aim to cause minimal disruption to your daily routine.`,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Professional plumbing and heating engineer',
    features: [
      'Gas Safe Registered',
      'Fully Insured',
      'Free Quotes',
      'No Call-Out Fee',
    ],
  },

  gallery: {
    heading: 'My Work',
    subheading: 'Examples of my recent plumbing and heating projects',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2340&auto=format&fit=crop',
        alt: 'Professional plumber at work',
      },
      {
        src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2340&auto=format&fit=crop',
        alt: 'Boiler installation',
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop',
        alt: 'Bathroom renovation',
      },
      {
        src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2340&auto=format&fit=crop',
        alt: 'Pipe fitting work',
      },
      {
        src: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2340&auto=format&fit=crop',
        alt: 'Radiator installation',
      },
      {
        src: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2340&auto=format&fit=crop',
        alt: 'Modern bathroom fitting',
      },
    ],
  },

  testimonials: {
    heading: 'What My Customers Say',
    subheading: 'Don\'t just take my word for it',
    entries: [
      {
        quote: 'Excellence and professional service. 100% thoroughly recommend and goes the extra mile to satisfy his customers.',
        name: 'Roger Craft',
        location: 'Verified Customer',
      },
      {
        quote: 'Highly recommend gave a price and date straight away when I messaged him kept me informed of his arrival time and did not disappoint high standard of workmanship.',
        name: 'Siobhan McAuliffe',
        location: 'Verified Customer',
      },
      {
        quote: 'Fantastic and reliable service from Luke. Great communication about when he was coming and sent me all the price options available. I would highly recommend!',
        name: 'Ruth Stevenson',
        location: 'Verified Customer',
      },
    ],
  },

  contact: {
    heading: 'Get in Touch',
    subheading: 'Ready to discuss your plumbing or heating needs? Contact me for a free, no-obligation quote.',
    phone: '07368 158368',
    email: 'luke_leighton@icloud.com',
    serviceArea: 'Serving Bucks, Berks, and Oxford',
    form: {
      heading: 'Request a Quote',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        phone: { label: 'Phone', placeholder: 'Your phone number' },
        message: { label: 'Message', placeholder: 'Tell us about your plumbing or heating needs...' },
      },
      button: 'Send Message',
    },
  },
};
