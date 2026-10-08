import { type LinkProps } from 'next/link';

interface ICompany {
  name: string;
  logo: string;
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
}

const COMPANY: ICompany = {
  name: 'ITS MAC',
  logo: '/images/flat-1.jpg',
  whatsappNumber: '+8801871******',
  phoneNumber: '+8801871******',
  email: 'its@mac.com',
};

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

const DEFAULT_NAV_ITEMS: readonly INavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

interface IPropertySpecItem {
  readonly label: string;
  readonly value: string | number;
  readonly fullWidth?: boolean;
}

interface IPropertyCardProps {
  readonly title: string;
  readonly location: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly statusBadge?: string;
  readonly secondaryBadge?: string;
  readonly specs: readonly IPropertySpecItem[];
  readonly href: string;
  readonly ctaLabel?: string;
}

interface IPropertyItemProps extends IPropertyCardProps {
  readonly id: string;
}

interface IFlatProject {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly unitType: string;
  readonly sizeSqFt: number;
  readonly parkingSqFt: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly balconies: number;
  readonly floorNumber: number;
  readonly totalUnits: number;
  readonly href: string;
}

interface IFlatProps {
  readonly projects?: readonly IFlatProject[];
  readonly viewHref?: string;
  readonly viewLabel?: string;
}

const DEFAULT_FLATS: readonly IFlatProject[] = [
  {
    id: 'proj-1',
    title: 'The Grand Horizon Residency',
    location: 'Block D, Bashundhara R/A, Dhaka',
    imageSrc: '/images/flat-1.jpg',
    imageAlt: 'Modern luxury apartment building exterior',
    unitType: '3 BHK Premium Flat',
    sizeSqFt: 2150,
    parkingSqFt: 120,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floorNumber: 6,
    totalUnits: 12,
    href: '/properties/flats/grand-horizon',
  },
  {
    id: 'proj-2',
    title: 'Urban Skyline Heights',
    location: 'Sector 11, Uttara, Dhaka',
    imageSrc: '/images/flat-2.jpg',
    imageAlt: 'Contemporary architectural apartment complex',
    unitType: '4 BHK Deluxe Suite',
    sizeSqFt: 2800,
    parkingSqFt: 150,
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    floorNumber: 9,
    totalUnits: 18,
    href: '/properties/flats/skyline-heights',
  },
  {
    id: 'proj-3',
    title: 'Green Park Serenity',
    location: 'South Avenue, Gulshan 1, Dhaka',
    imageSrc: '/images/flat-3.jpg',
    imageAlt: 'Luxury residential complex with green landscaping',
    unitType: '3 BHK Executive Suite',
    sizeSqFt: 1950,
    parkingSqFt: 110,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floorNumber: 4,
    totalUnits: 10,
    href: '/properties/flats/green-park-serenity',
  },
];

interface ILandProperty {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly landAreaKathas: number;
  readonly frontRoadWidthFt: number;
  readonly adjacentRoadWidthFt: number;
  readonly buildingStructure: string;
  readonly totalTowers: number;
  readonly totalFlats: number;
  readonly status: string;
  readonly href: string;
}

interface IAvailableLandsProps {
  readonly lands?: readonly ILandProperty[];
  readonly viewHref?: string;
  readonly viewLabel?: string;
}

const DEFAULT_LAND: readonly ILandProperty[] = [
  {
    id: 'land-1',
    title: 'Prime Commercial & Residential Plot',
    location: 'Main Avenue, Sector 3, Uttara, Dhaka',
    imageSrc: '/images/land-1.jpg',
    imageAlt: 'Aerial view of a prime 16 Katha land plot in Uttara',
    landAreaKathas: 16,
    frontRoadWidthFt: 60,
    adjacentRoadWidthFt: 20,
    buildingStructure: 'B2 + B1 + Ground + 13 Floors',
    totalTowers: 2,
    totalFlats: 78,
    status: 'Approved for Construction',
    href: '/properties/land/uttara-sector-3',
  },
  {
    id: 'land-2',
    title: 'Lakeside Mixed-Use Development Site',
    location: 'Block I, Bashundhara R/A, Dhaka',
    imageSrc: '/images/land-2.jpg',
    imageAlt: 'Spacious land plot near lakeside in Bashundhara',
    landAreaKathas: 20,
    frontRoadWidthFt: 80,
    adjacentRoadWidthFt: 25,
    buildingStructure: 'B2 + B1 + Ground + 15 Floors',
    totalTowers: 2,
    totalFlats: 96,
    status: 'RAJUK Sanctioned',
    href: '/properties/land/bashundhara-block-i',
  },
  {
    id: 'land-3',
    title: 'Corner Plot High-Rise Land',
    location: 'South Avenue, Gulshan 2, Dhaka',
    imageSrc: '/images/land-3.jpg',
    imageAlt: 'High-value corner land plot in Gulshan 2',
    landAreaKathas: 18,
    frontRoadWidthFt: 60,
    adjacentRoadWidthFt: 30,
    buildingStructure: 'B3 + B2 + B1 + Ground + 14 Floors',
    totalTowers: 2,
    totalFlats: 84,
    status: 'Ready for Handover',
    href: '/properties/land/gulshan-south-avenue',
  },
];

interface IFlatDetail {
  id: string;
  name: string;
  location: string;
  heroImage: string;
  propertyImage: string;
  atAGlance: {
    addressPlot: string;
    type: string;
    landArea: string;
    levels: string;
    apartmentSize: string;
    unitsPerLevel: string;
    units: string;
    facing: string;
    parkings: string;
    elevator: string;
    staircase: string;
    bedroom: string;
    handover: string;
  };
}

// Sample flat database (Replace or connect with your data source)
const FLATS_DATA: Record<string, IFlatDetail> = {
  '1': {
    id: '1',
    name: 'Gulshan Skyline Residence',
    location: 'Gulshan 1, Dhaka',
    heroImage: '/images/hero-bg.jpg',
    propertyImage: '/images/hero-bg.jpg',
    atAGlance: {
      addressPlot: 'Plot 20/A, Road 26, Gulshan 1, Dhaka',
      type: 'Residential Building',
      landArea: '11.85 Katha',
      levels: '14 Storied (B+G+12+Community)',
      apartmentSize: '3588 - 3837 sft. (Approx.)',
      unitsPerLevel: '01',
      units: '12',
      facing: 'South-facing / Corner Plot',
      parkings: '24',
      elevator: '02',
      staircase: '02',
      bedroom: '03 - 04',
      handover: '2029',
    },
  },
  'grand-horizon': {
    id: 'grand-horizon',
    name: 'Grand Horizon',
    location: 'Gulshan 2, Dhaka',
    heroImage: '/images/hero-bg.jpg',
    propertyImage: '/images/hero-bg.jpg',
    atAGlance: {
      addressPlot: 'Plot 20/A, Road 26, Gulshan 1, Dhaka',
      type: 'Residential Building',
      landArea: '11.85 Katha',
      levels: '14 Storied (B+G+12+Community)',
      apartmentSize: '3588 - 3837 sft. (Approx.)',
      unitsPerLevel: '01',
      units: '12',
      facing: 'South-facing / Corner Plot',
      parkings: '24',
      elevator: '02',
      staircase: '02',
      bedroom: '03 - 04',
      handover: '2029',
    },
  },
};

interface ITowerSpec {
  readonly towerName: string;
  readonly towerImage: string;
  readonly landArea: string;
  readonly flatsPerFloor: number;
  readonly totalFlats: number;
  readonly carpetArea: string;
  readonly commonArea: string;
  readonly parkingArea: string;
  readonly totalSaleableArea: string;
}

interface ILandDetail {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly heroImage: string;
  readonly plotImage: string;
  readonly totalLandArea: string;
  readonly zoningType: string;
  readonly towers: readonly ITowerSpec[];
  readonly nearbyLandmarks: readonly {
    readonly icon: string;
    readonly name: string;
    readonly distance?: string;
  }[];
  readonly locationAdvantages: readonly string[];
}

// Sample Land database
const LANDS_DATA: Record<string, ILandDetail> = {
  '1': {
    id: '1',
    name: 'Uttara North High-Rise Development Site',
    location: 'Sector 14, Uttara, Dhaka',
    heroImage: '/images/land-1.jpg',
    plotImage: '/images/land-1.jpg',
    totalLandArea: '16 Kathas',
    zoningType: 'Commercial / Residential High-Rise',
    towers: [
      {
        towerName: 'Tower A',
        towerImage: '/images/land-1.jpg',
        landArea: '6 Kathas',
        flatsPerFloor: 2,
        totalFlats: 26,
        carpetArea: '1,450 sq. ft.',
        commonArea: '200 sq. ft.',
        parkingArea: '120 sq. ft.',
        totalSaleableArea: '1,770 sq. ft.',
      },
      {
        towerName: 'Tower B',
        towerImage: '/images/land-1.jpg',
        landArea: '10 Kathas',
        flatsPerFloor: 4,
        totalFlats: 52,
        carpetArea: '1,300 sq. ft.',
        commonArea: '180 sq. ft.',
        parkingArea: '120 sq. ft.',
        totalSaleableArea: '1,600 sq. ft.',
      },
    ],
    nearbyLandmarks: [
      { icon: '🏙️', name: 'Uttara Sectors 11-14 Hub', distance: '2 mins' },
      {
        icon: '✈️',
        name: 'Hazrat Shahjalal International Airport',
        distance: '12 mins',
      },
      {
        icon: '🚇',
        name: 'Uttara North Metro Rail Station',
        distance: '5 mins',
      },
      { icon: '🚔', name: 'Uttara West Police Station', distance: '4 mins' },
    ],
    locationAdvantages: [
      'Quick access to the airport and Uttara commercial zones',
      'Easy connectivity via the MRT Line-6 Metro Rail',
      'Close proximity to top educational, healthcare, and religious institutions',
      'Safe and well-planned residential environment with wide front roads',
    ],
  },
  'uttara-sector-3': {
    id: 'uttara-sector-3',
    name: 'Uttara South High-Rise Development Site',
    location: 'Sector 14, Uttara, Dhaka',
    heroImage: '/images/land-1.jpg',
    plotImage: '/images/land-1.jpg',
    totalLandArea: '16 Kathas',
    zoningType: 'Commercial / Residential High-Rise',
    towers: [
      {
        towerName: 'Tower A',
        towerImage: '/images/land-1.jpg',
        landArea: '6 Kathas',
        flatsPerFloor: 2,
        totalFlats: 26,
        carpetArea: '1,450 sq. ft.',
        commonArea: '200 sq. ft.',
        parkingArea: '120 sq. ft.',
        totalSaleableArea: '1,770 sq. ft.',
      },
      {
        towerName: 'Tower B',
        towerImage: '/images/land-1.jpg',
        landArea: '10 Kathas',
        flatsPerFloor: 4,
        totalFlats: 52,
        carpetArea: '1,300 sq. ft.',
        commonArea: '180 sq. ft.',
        parkingArea: '120 sq. ft.',
        totalSaleableArea: '1,600 sq. ft.',
      },
    ],
    nearbyLandmarks: [
      { icon: '🏙️', name: 'Uttara Sectors 11-14 Hub', distance: '2 mins' },
      {
        icon: '✈️',
        name: 'Hazrat Shahjalal International Airport',
        distance: '12 mins',
      },
      {
        icon: '🚇',
        name: 'Uttara North Metro Rail Station',
        distance: '5 mins',
      },
      { icon: '🚔', name: 'Uttara West Police Station', distance: '4 mins' },
    ],
    locationAdvantages: [
      'Quick access to the airport and Uttara commercial zones',
      'Easy connectivity via the MRT Line-6 Metro Rail',
      'Close proximity to top educational, healthcare, and religious institutions',
      'Safe and well-planned residential environment with wide front roads',
    ],
  },
};

interface IGalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly category?: string;
}

// Dynamic images coming from user uploads or database
const FLAT1_IMAGE_GALLERY: readonly IGalleryImage[] = [
  {
    id: 'img-1',
    src: '/images/flat-1.jpg',
    alt: 'Front facade exterior view',
    category: 'Exterior',
  },
  {
    id: 'img-2',
    src: '/images/flat-2.jpg',
    alt: 'Spacious living room interior',
    category: 'Interior',
  },
  {
    id: 'img-3',
    src: '/images/flat-3.jpg',
    alt: 'Modular kitchen setup',
    category: 'Interior',
  },
  {
    id: 'img-4',
    src: '/images/flat-1.jpg',
    alt: 'Rooftop garden and lounge area',
    category: 'Amenities',
  },
  {
    id: 'img-5',
    src: '/images/flat-2.jpg',
    alt: 'Balcony sunset outlook',
    category: 'View',
  },
  {
    id: 'img-6',
    src: '/images/flat-3.jpg',
    alt: 'Balcony sunset outlook',
    category: 'View',
  },
];

const LAND1_IMAGE_GALLERY: readonly IGalleryImage[] = [
  {
    id: 'img-1',
    src: '/images/land-1.jpg',
    alt: 'Front facade exterior view',
    category: 'Exterior',
  },
  {
    id: 'img-2',
    src: '/images/land-2.jpg',
    alt: 'Spacious living room interior',
    category: 'Interior',
  },
  {
    id: 'img-3',
    src: '/images/land-3.jpg',
    alt: 'Modular kitchen setup',
    category: 'Interior',
  },
  {
    id: 'img-4',
    src: '/images/land-1.jpg',
    alt: 'Rooftop garden and lounge area',
    category: 'Amenities',
  },
  {
    id: 'img-5',
    src: '/images/land-2.jpg',
    alt: 'Balcony sunset outlook',
    category: 'View',
  },
  {
    id: 'img-6',
    src: '/images/land-3.jpg',
    alt: 'Balcony sunset outlook',
    category: 'View',
  },
];

interface ILandmarkItem {
  readonly id: string;
  readonly icon: string;
  readonly name: string;
  readonly category: string;
  readonly distance: string;
}

const sampleLandmarks: readonly ILandmarkItem[] = [
  {
    id: 'l-1',
    icon: '🚇',
    name: 'Uttara North Metro Rail Station',
    category: 'Public Transit',
    distance: '5 mins',
  },
  {
    id: 'l-2',
    icon: '✈️',
    name: 'International Airport',
    category: 'Aviation Hub',
    distance: '12 mins',
  },
  {
    id: 'l-3',
    icon: '🏙️',
    name: 'Commercial Business Hub',
    category: 'Commercial',
    distance: '2 mins',
  },
  {
    id: 'l-4',
    icon: '🚔',
    name: 'Uttara West Police Station',
    category: 'Security',
    distance: '4 mins',
  },
];

interface IContactProps {
  readonly contactReasons?: readonly IContactReason[];
  readonly propertyTitle?: string;
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

interface IBottomNavLinks {
  readonly href: string;
  readonly label: string;
}

interface IBottomNavLinksProps {
  readonly navLinks: IBottomNavLinks[];
}

const BOTTOM_NAV_LINKS: IBottomNavLinks[] = [
  { href: 'properties/flats', label: 'All Available Flats' },
  { href: 'properties/lands', label: 'All Available Lands' },
  {
    href: 'properties/already-handover',
    label: 'Already Delivered Properties',
  },
];

// new
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
    eyebrow: 'Civic',
    title: 'Innovative designs, lasting impressions',
    projectType: 'Architecture',
    projectName: 'Apartment Building',
    projectHref: '/projects/apartment-building',
    imageSrc: '/images/land-1.jpg',
    imageAlt: 'Modern apartment building illuminated at dusk',
  },
  {
    eyebrow: 'Residential',
    title: 'Spaces shaped around the way people live',
    projectType: 'Residential',
    projectName: 'Courtyard Residence',
    projectHref: '/projects/courtyard-residence',
    imageSrc: '/images/land-2.jpg',
    imageAlt: 'Contemporary courtyard residence surrounded by greenery',
  },
  {
    eyebrow: 'Commercial',
    title: 'A stronger identity built into every detail',
    projectType: 'Commercial',
    projectName: 'Harbour Offices',
    projectHref: '/projects/harbour-offices',
    imageSrc: '/images/land-3.jpg',
    imageAlt: 'Modern commercial building beside a waterfront',
  },
];

const SERVICES = [
  {
    id: 'real-estate',
    title: 'Real Estate Development',
    imageSrc: '/images/flat.png',
    imageAlt: 'Real Estate Development',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    imageSrc: '/images/land.png',
    imageAlt: 'Project Management',
  },
  {
    id: 'investment',
    title: 'Investment & Capital',
    imageSrc: '/images/land-share.png',
    imageAlt: 'Investment and Capital',
  },
];

interface ITeam {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  placement: 'left' | 'center' | 'right';
}

const PLACEMENT_CLASSES: Record<ITeam['placement'], string> = {
  left: '',
  center: 'md:mt-[1.2rem]',
  right: '',
};

const TEAM_MEMBERS: ITeam[] = [
  {
    name: 'Esther Howard',
    role: 'Founder & CEO',
    image: '/images/team-member-1.jpg',
    imageAlt: 'Esther Howard, Founder and CEO',
    placement: 'left',
  },
  {
    name: 'John Smith',
    role: 'Executive Assistant',
    image: '/images/team-member-2.jpg',
    imageAlt: 'John Smith, Executive Assistant',
    placement: 'center',
  },
  {
    name: 'Michael Johnson',
    role: 'Director of Architecture',
    image: '/images/team-member-3.jpg',
    imageAlt: 'Michael Johnson, Director of Architecture',
    placement: 'right',
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

interface IFooterLink {
  label: string;
  href: LinkProps['href'];
}

const FIRST_LINK_GROUP: IFooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Our Team', href: '/team' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Partners', href: '/partners' },
  { label: 'Core Values', href: '/core-values' },
];

const SECOND_LINK_GROUP: IFooterLink[] = [
  { label: 'Our Projects', href: '/projects' },
  { label: 'News & Updates', href: '/news' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Support Center', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS: IFooterLink[] = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Youtube', href: 'https://youtube.com' },
];

import type { ReactNode } from 'react';

type BenefitIconKind = 'responsibility' | 'expertise' | 'diversity';

interface IBenefit {
  icon: BenefitIconKind;
  title: ReactNode;
  description: string;
}

const BENEFITS: IBenefit[] = [
  {
    icon: 'responsibility',
    title: (
      <>
        Corporate
        <br />
        Responsibility
      </>
    ),
    description:
      'Our goal is to foster a culture of responsible business practices and healthy communities.',
  },
  {
    icon: 'expertise',
    title: (
      <>
        Experts with
        <br />
        Team Spirit
      </>
    ),
    description:
      'Our small but dedicated practice is focused on modern thinking and delivering solutions.',
  },
  {
    icon: 'diversity',
    title: (
      <>
        Diversity, Equity &<br />
        Inclusion
      </>
    ),
    description:
      'We work with diverse women entrepreneurs to create a more diverse, equitable and inclusive community.',
  },
];

interface IBenefitIconProps {
  kind: BenefitIconKind;
}

interface IReviewer {
  src: string;
  alt: string;
}

const DEFAULT_REVIEWERS: IReviewer[] = [
  { src: '/images/flat-1.jpg', alt: 'Customer' },
  { src: '/images/flat-2.jpg', alt: 'Customer' },
  { src: '/images/flat-3.jpg', alt: 'Customer' },
  { src: '/images/flat-1.jpg', alt: 'Customer' },
];

interface IWhatMakesUsDifferentProps {
  reviewers?: IReviewer[];
}

export {
  COMPANY,
  type IContactInfo,
  CONTACT_INFO,
  type INavbarProps,
  DEFAULT_NAV_ITEMS,
  type IPropertyCardProps,
  type IPropertyItemProps,
  type IFlatProps,
  DEFAULT_FLATS,
  type IAvailableLandsProps,
  DEFAULT_LAND,
  FLATS_DATA,
  LANDS_DATA,
  type IGalleryImage,
  FLAT1_IMAGE_GALLERY,
  LAND1_IMAGE_GALLERY,
  type ILandmarkItem,
  sampleLandmarks,
  type IContactProps,
  DEFAULT_CONTACT_REASONS,
  BOTTOM_NAV_LINKS,
  type IBottomNavLinksProps,
  type IHeroImages,
  HERO_IMAGES,
  WORKS,
  type WorkProps,
  SERVICES,
  type TestimonialsProps,
  DEFAULT_TESTIMONIALS,
  TEAM_MEMBERS,
  PLACEMENT_CLASSES,
  FIRST_LINK_GROUP,
  SECOND_LINK_GROUP,
  SOCIAL_LINKS,
  DEFAULT_REVIEWERS,
  BENEFITS,
  type IBenefitIconProps,
  type IWhatMakesUsDifferentProps,
};
