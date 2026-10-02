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

export {
  type IContactInfo,
  CONTACT_INFO,
  type INavbarProps,
  DEFAULT_NAV_ITEMS,
  HERO_IMAGES,
};
