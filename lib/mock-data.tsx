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
    imageAlt: 'Explore completed flats available for sale in your preferred area.',
  },
  {
    id: 'project-management',
    title: 'Shared Land Ownership',
    imageSrc: '/images/land.png',
    imageAlt: 'Purchase land with a group and choose whether to build independently or with a developer.',
  },
  {
    id: 'investment',
    title: 'Land for Sale',
    imageSrc: '/images/land-share.png',
    imageAlt: 'Buy land individually or as a group, with no apartment development commitment.',
  },
];

export {
  type IContactInfo,
  CONTACT_INFO,
  type INavbarProps,
  DEFAULT_NAV_ITEMS,
  HERO_IMAGES,
  SERVICES,
};
