const DEFAULT_NAV_ITEMS: readonly INavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

interface IContactInfo {
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
}

const CONTACT_INFO: IContactInfo = {
  whatsappNumber: '+8801871******',
  phoneNumber: '+8801871******',
  email: 'its@mac.com',
};

interface INavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

interface INavbarProps {
  readonly phone?: string;
  readonly navItems?: readonly INavItem[];
}

type IHeroImages = {
  buildingImage: {
    src: string;
    alt: string;
  };
  cloudImages: {
    first: string;
    second: string;
  };
};

const HERO_IMAGES: IHeroImages = {
  buildingImage: {
    src: '/images/hero-building.png',
    alt: 'Contemporary high-rise apartment building',
  },
  cloudImages: {
    first: '/images/hero-cloud-left.png',
    second: '/images/hero-cloud-right.png',
  },
};

interface IService {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const SERVICES: IService[] = [
  {
    id: 'real-estate',
    title: 'Ready Apartments',
    imageSrc: '/images/flat.png',
    imageAlt:
      'Explore completed flats available for sale in your preferred area.',
  },
  {
    id: 'project-management',
    title: 'Shared Land Ownership',
    imageSrc: '/images/land.png',
    imageAlt:
      'Purchase land with a group and choose whether to build independently or with a developer.',
  },
  {
    id: 'investment',
    title: 'Land for Sale',
    imageSrc: '/images/land-share.png',
    imageAlt:
      'Buy land individually or as a group, with no apartment development commitment.',
  },
];

interface IWork {
  eyebrow: string;
  title: string;
  projectType: string;
  projectName: string;
  projectHref: string;
  imageSrc: string;
  imageAlt: string;
}

type WorkProps = {
  works: readonly IWork[];
};

const WORKS: IWork[] = [
  {
    eyebrow: 'Ready Apartments',
    title: 'Innovative designs, lasting impressions',
    projectType: 'Architecture',
    projectName: 'Apartment Building',
    projectHref: '/projects/apartment-building',
    imageSrc: '/images/flat-3.jpg',
    imageAlt: 'Modern apartment building illuminated at dusk',
  },
  {
    eyebrow: 'Shared Land Ownership',
    title: 'Spaces shaped around the way people live',
    projectType: 'Residential',
    projectName: 'Courtyard Residence',
    projectHref: '/projects/courtyard-residence',
    imageSrc: '/images/land-2.jpg',
    imageAlt: 'Contemporary courtyard residence surrounded by greenery',
  },
  {
    eyebrow: 'Land for Sale',
    title: 'A stronger identity built into every detail',
    projectType: 'Commercial',
    projectName: 'Harbour Offices',
    projectHref: '/projects/harbour-offices',
    imageSrc: '/images/land-3.jpg',
    imageAlt: 'Modern commercial building beside a waterfront',
  },
];

interface ITestimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  image: string;
  imageAlt: string;
}

interface TestimonialsProps {
  testimonials: ITestimonial[];
}

const DEFAULT_TESTIMONIALS: ITestimonial[] = [
  {
    id: '1',
    quote:
      'They knew what they were doing and were incredibly knowledgeable throughout the process. A wonderful!',
    author: 'Esther Howard',
    title: 'Assistant Project Manager',
    image: '/images/team-member-5.jpg',
    imageAlt: 'Esther Howard',
  },
  {
    id: '2',
    quote:
      'Outstanding service and attention to detail. Highly recommend to anyone looking for excellence.',
    author: 'John Smith',
    title: 'Product Manager',
    image: '/images/team-member-6.jpg',
    imageAlt: 'John Smith',
  },
  {
    id: '3',
    quote:
      'Professional, reliable, and exceeded all expectations. Best decision we made.',
    author: 'Michael Johnson',
    title: 'Marketing Director',
    image: '/images/team-member-7.jpg',
    imageAlt: 'Michael Johnson',
  },
];

interface IContactProps {
  readonly contactReasons?: readonly IContactReason[];
}

interface IContactReason {
  readonly id: string;
  readonly label: string;
}

const DEFAULT_CONTACT_REASONS: readonly IContactReason[] = [
  { id: 'land-buyer', label: 'Land Buyer' },
  { id: 'apartment-buyer', label: 'Apartment Buyer' },
  { id: 'general-inquiry', label: 'General Inquiry' },
  { id: 'others', label: 'Others' },
];

const NEXT_SLIDE_INTERVAL = 3000; // 3 seconds

interface IBlogPost {
  title: string;
  category: string;
  date: string;
  dateTime: string;
  image: string;
  imageAlt: string;
  href: string;
}

const BLOG_POSTS: IBlogPost[] = [
  {
    title: 'How Design Shapes Well-Being',
    category: 'Social Media',
    date: 'Mar 18, 2025',
    dateTime: '2025-03-18',
    image: '/images/flat-1.jpg',
    imageAlt: 'Building under construction against a clear sky',
    href: '/blog/how-design-shapes-well-being',
  },
  {
    title: 'Tiny Homes: Big Benefits',
    category: 'Company',
    date: 'Mar 18, 2025',
    dateTime: '2025-03-18',
    image: '/images/flat-2.jpg',
    imageAlt: 'Architect working at a desk with building plans',
    href: '/blog/tiny-homes-big-benefits',
  },
  {
    title: 'Biophilic Design: Bringing Nature Indoors',
    category: 'Tips & Tricks',
    date: 'Mar 18, 2025',
    dateTime: '2025-03-18',
    image: '/images/flat-3.jpg',
    imageAlt: 'Brightly colored modern building viewed from below',
    href: '/blog/biophilic-design',
  },
  {
    title: 'Designing Spaces for Everyday Wellness',
    category: 'Design',
    date: 'Mar 18, 2025',
    dateTime: '2025-03-18',
    image: '/images/land-1.jpg',
    imageAlt: 'Sunlit, thoughtfully designed living space',
    href: '/blog/designing-spaces-for-wellness',
  },
  {
    title: 'Small Spaces, Smarter Living',
    category: 'Company',
    date: 'Mar 18, 2025',
    dateTime: '2025-03-18',
    image: '/images/land-2.jpg',
    imageAlt: 'Compact modern home interior',
    href: '/blog/small-spaces-smarter-living',
  },
  {
    title: 'Nature-Inspired Interiors',
    category: 'Tips & Tricks',
    date: 'Mar 18, 2025',
    dateTime: '2025-03-18',
    image: '/images/land-3.jpg',
    imageAlt: 'Interior with natural materials and greenery',
    href: '/blog/nature-inspired-interiors',
  },
];

export {
  type IContactInfo,
  CONTACT_INFO,
  type INavbarProps,
  DEFAULT_NAV_ITEMS,
  HERO_IMAGES,
  SERVICES,
  WORKS,
  type WorkProps,
  type TestimonialsProps,
  DEFAULT_TESTIMONIALS,
  DEFAULT_CONTACT_REASONS,
  type IContactProps,
  BLOG_POSTS,
  NEXT_SLIDE_INTERVAL,
};
