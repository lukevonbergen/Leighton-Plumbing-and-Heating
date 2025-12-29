// config/siteConfig.js
export const siteConfig = {
  siteName: 'Oakwood Carpentry',
  logo: {
    text: 'Oakwood Carpentry',
    src: '/logo/oakwood-logo.png',
    alt: 'Oakwood Carpentry Logo',
    height: 50,
  },
  metadata: {
    base: {
      title: 'Oakwood Carpentry – Quality Craftsmanship, Built to Last',
      description:
        'Bespoke carpentry services including fitted kitchens, custom furniture, built-in wardrobes, flooring, and more. Family-run business with 15+ years experience.',
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

  // Earthy color scheme
  brand: {
    primary: '#5C4033', // warm brown
    secondary: '#8B7355', // lighter brown
    accent: '#D4C4B0', // cream/tan
    background: '#FAF8F5', // off-white
    dark: '#2C2416', // dark charcoal brown
  },

  styles: {
    bgLight: 'bg-[#FAF8F5]',
    bgPrimary: 'bg-[#5C4033]',
    bgSecondary: 'bg-[#8B7355]',
    bgAccent: 'bg-[#D4C4B0]',
    textPrimary: 'text-[#2C2416]',
    textMuted: 'text-[#5C4033]',
    textLight: 'text-[#FAF8F5]',
    borderLight: 'border-[#D4C4B0]',
    borderDark: 'border-[#5C4033]',
  },

  banner: {
    show: false,
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
    copyright: 'Oakwood Carpentry',
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
    image: 'https://images.unsplash.com/photo-1729837149098-1e173e7b96fb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Craftsman working on wood in workshop',
    heading: 'Quality Craftsmanship, Built to Last',
    subheading: 'Bespoke carpentry services in Surrey & South London',
    ctaText: 'Get a Free Quote',
    ctaHref: '/contact',
  },

  services: {
    heading: 'Our Services',
    subheading: 'Expert craftsmanship for every project',
    items: [
      {
        title: 'Fitted Kitchens',
        description: 'Custom-designed kitchens built to your exact specifications, maximising space and style.',
        icon: 'kitchen',
      },
      {
        title: 'Bespoke Furniture',
        description: 'One-of-a-kind furniture pieces crafted to match your home and personal taste.',
        icon: 'furniture',
      },
      {
        title: 'Built-in Wardrobes',
        description: 'Space-saving storage solutions tailored to fit any room perfectly.',
        icon: 'wardrobe',
      },
      {
        title: 'Flooring',
        description: 'Professional installation of hardwood, engineered wood, and laminate flooring.',
        icon: 'flooring',
      },
      {
        title: 'Doors & Windows',
        description: 'Expert fitting and restoration of interior and exterior doors and windows.',
        icon: 'door',
      },
      {
        title: 'General Carpentry',
        description: 'From skirting boards to shelving, we handle all your carpentry needs.',
        icon: 'hammer',
      },
    ],
  },

  about: {
    heading: 'About Oakwood Carpentry',
    content: `With over 15 years of experience, Oakwood Carpentry is a family-run business dedicated to delivering exceptional craftsmanship. We take pride in every project, from bespoke furniture to complete kitchen installations.

We use only the finest quality materials and traditional woodworking techniques combined with modern precision. Our team is fully insured and committed to completing every job to the highest standards, on time and within budget.

Whether you're looking to transform your home with custom cabinetry or need reliable general carpentry work, we're here to bring your vision to life.`,
    image: 'https://images.unsplash.com/photo-1628797279405-8cd6ffdbeb6c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Carpenter crafting wood in workshop',
    features: [
      '15+ years experience',
      'Family-run business',
      'Quality materials',
      'Fully insured',
    ],
  },

  gallery: {
    heading: 'Our Work',
    subheading: 'A selection of our recent projects',
    images: [
      {
        src: 'https://plus.unsplash.com/premium_photo-1676823552780-90cc52f0db1d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Custom fitted kitchen',
      },
      {
        src: 'https://images.unsplash.com/photo-1761656630581-69a58e4e1c09?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Bespoke wooden cabinetry',
      },
      {
        src: 'https://images.unsplash.com/photo-1760155089939-1c9d2a45c0e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Built-in storage solutions',
      },
      {
        src: 'https://images.unsplash.com/photo-1637747022694-92c8cbc90a38?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Hardwood flooring installation',
      },
      {
        src: 'https://images.unsplash.com/photo-1737575212792-c0c06dd4e12a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Custom shelving unit',
      },
      {
        src: 'https://images.unsplash.com/photo-1751806524631-565725f5bb74?q=80&w=973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Modern kitchen with custom woodwork',
      },
    ],
  },

  testimonials: {
    heading: 'What Our Clients Say',
    subheading: 'Don\'t just take our word for it',
    entries: [
      {
        quote: 'Oakwood Carpentry transformed our kitchen beyond our expectations. The attention to detail was incredible, and the team was professional from start to finish. Highly recommended!',
        name: 'Sarah Mitchell',
        location: 'Guildford, Surrey',
      },
      {
        quote: 'We had bespoke wardrobes fitted in all three bedrooms. The quality of workmanship is outstanding, and they maximised every inch of space. Couldn\'t be happier with the result.',
        name: 'James & Emma Thompson',
        location: 'Kingston upon Thames',
      },
      {
        quote: 'Reliable, skilled, and great value. They restored our Victorian sash windows beautifully and fitted new oak flooring throughout. A true craftsman\'s touch.',
        name: 'David Chen',
        location: 'Wimbledon, London',
      },
    ],
  },

  contact: {
    heading: 'Get in Touch',
    subheading: 'Ready to start your project? Contact us for a free, no-obligation quote.',
    phone: '01234 567890',
    email: 'info@oakwoodcarpentry.co.uk',
    serviceArea: 'Serving Surrey, South London, and surrounding areas',
    form: {
      heading: 'Request a Quote',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        phone: { label: 'Phone', placeholder: 'Your phone number' },
        message: { label: 'Message', placeholder: 'Tell us about your project...' },
      },
      button: 'Send Message',
    },
  },
};
