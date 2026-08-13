import { ServiceItem, AppProduct, PillarItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'BONAI ENGINEERING PRIVATE LIMITED',
  shortName: 'BONAI ENGINEERING',
  tagline: 'Engineering Ideas. Building Digital Solutions.',
  incorporationYear: '2021',
  incorporationCountry: 'India',
  domain: 'Engineering & Technology Solutions',
  subdomain: 'Mobile Application & Digital Product Engineering',
  mission: 'Delivering lightweight, dependable, and high-performance digital tools engineered to solve everyday practical challenges.',
};

export const PILLARS: PillarItem[] = [
  {
    id: 'pragmatic-engineering',
    title: 'Pragmatic Engineering',
    subtitle: 'Purpose-Driven Development',
    description: 'We prioritize clean logic, reliable architecture, and efficient algorithms over unnecessary complexity, ensuring every solution runs swiftly and reliably.',
    iconName: 'Cpu',
  },
  {
    id: 'mobile-first',
    title: 'Mobile-First Focus',
    subtitle: 'Engineered for Performance',
    description: 'Deep dedication to Android and mobile ecosystems, designing applications that respect system memory, battery usage, and instantaneous response times.',
    iconName: 'Smartphone',
  },
  {
    id: 'utility-focused',
    title: 'Practical Daily Utilities',
    subtitle: 'Tools That Solve Real Needs',
    description: 'From rapid mathematical utilities to productivity companions, our apps are built to provide instant, frustration-free utility with zero bloat.',
    iconName: 'Layers',
  },
  {
    id: 'clean-architecture',
    title: 'Clean UI/UX Standards',
    subtitle: 'Human-Centered Interfaces',
    description: 'Carefully structured typography, high contrast, tactile ergonomics, and distraction-free visual layouts engineered for maximum usability.',
    iconName: 'LayoutGrid',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-app-dev',
    title: 'Mobile Application Development',
    category: 'Core Engineering',
    description: 'End-to-end engineering of mobile applications crafted for speed, responsiveness, and fluid interaction across diverse screen sizes.',
    features: [
      'Native-feel performance & rapid boot time',
      'Optimized memory and resource management',
      'Offline-first synchronization & storage',
      'Clean modular codebase architectures'
    ],
    techTags: ['Mobile Engineering', 'Responsive UI', 'Offline Sync', 'State Management'],
    iconName: 'Smartphone',
  },
  {
    id: 'android-dev',
    title: 'Android App Development',
    category: 'Platform Specialization',
    description: 'Specialized Android engineering leveraging modern SDKs, Android Jetpack, and best practices to deliver dependable applications.',
    features: [
      'Modern Android Architecture (MVVM/MVI)',
      'Material Design 3 & ergonomic component design',
      'Battery-efficient background processing',
      'Broad device & OS version compatibility'
    ],
    techTags: ['Android OS', 'Jetpack', 'Kotlin Architecture', 'SDK Optimization'],
    iconName: 'Bot',
  },
  {
    id: 'utility-productivity',
    title: 'Utility & Productivity Applications',
    category: 'Product Suite',
    description: 'Development of lightweight, focused utilities such as precision calculators, time converters, splitters, and productivity tools.',
    features: [
      'Sub-second calculation engines',
      'Distraction-free, zero-ad workflows',
      'Custom numerical input and keyboard mechanics',
      'Local persistent state & history logging'
    ],
    techTags: ['Calculators', 'Time Math', 'Conversion Engines', 'Productivity'],
    iconName: 'Wrench',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    category: 'Core Engineering',
    description: 'Robust software engineering covering algorithmic design, data transformations, and high-efficiency application logic.',
    features: [
      'Deterministic calculation logic & unit testing',
      'Scalable data schemas & local database modeling',
      'Robust error handling and validation layers',
      'Maintainable, well-documented source structure'
    ],
    techTags: ['Algorithms', 'Data Structures', 'Clean Code', 'Modular Design'],
    iconName: 'CodeXml',
  },
  {
    id: 'custom-digital-solutions',
    title: 'Custom Digital Solutions',
    category: 'Tailored Solutions',
    description: 'Tailored technology systems and specialized tools built to solve specific engineering and operational requirements.',
    features: [
      'Domain-specific computational utilities',
      'Automated data calculation pipelines',
      'Custom toolkits for technical practitioners',
      'Seamless multi-platform deployment workflows'
    ],
    techTags: ['Custom Workflows', 'Automation', 'Domain Tools', 'Integration'],
    iconName: 'Boxes',
  },
  {
    id: 'ui-ux-mobile',
    title: 'UI/UX-focused Mobile Experiences',
    category: 'Design & Usability',
    description: 'Designing intuitive, high-contrast, and distraction-free mobile interfaces centered on accessible user interactions.',
    features: [
      'Ergonomic one-handed thumb-zone layouts',
      'Clear visual hierarchies & typography pairing',
      'Light & dark theme adaptability',
      'Smooth micro-interactions and tactile feedback'
    ],
    techTags: ['Design Systems', 'Micro-interactions', 'Accessibility', 'Ergonomics'],
    iconName: 'Sparkles',
  },
];

export const MOBILE_APPS: AppProduct[] = [
  {
    id: 'precision-calculator',
    name: 'Precision Calculator',
    tagline: 'Fast, accurate, and distraction-free arithmetic engine',
    category: 'Utility & Mathematics',
    status: 'Active Release',
    description: 'A lightning-fast Android calculator designed for everyday math, percentage operations, and multi-step calculations with an interactive memory reel.',
    keyFeatures: [
      'Instant arithmetic evaluations with parentheses support',
      'Interactive calculation history and memory recall',
      'Percentage, power, square root, and reciprocal tools',
      'Lightweight footprint under 5MB with instant launch'
    ],
    specs: {
      targetPlatform: 'Android 8.0+',
      downloadSize: '< 4.2 MB',
      architecture: 'Clean MVVM',
      offlineReady: true
    },
    iconName: 'Calculator',
    previewType: 'calculator',
  },
  {
    id: 'tip-calculator',
    name: 'Tip & Bill Splitter',
    tagline: 'Effortless gratuity calculation and group bill splitting',
    category: 'Finance & Utility',
    status: 'Active Release',
    description: 'A clean, ergonomic utility to calculate tips, custom split amounts among any party size, and instantly round total figures for dining and shared bills.',
    keyFeatures: [
      'Real-time sliders for customizable tip percentages (10% - 30%+)',
      'Even & uneven group bill division with per-person breakdown',
      'One-tap total and tip rounding features',
      'Clean summary card ready for quick sharing'
    ],
    specs: {
      targetPlatform: 'Android 8.0+',
      downloadSize: '< 3.8 MB',
      architecture: 'Jetpack Compose Native',
      offlineReady: true
    },
    iconName: 'Receipt',
    previewType: 'tip-calc',
  },
  {
    id: 'time-calculator',
    name: 'Time & Duration Calculator',
    tagline: 'Precise elapsed time, shift intervals, and duration math',
    category: 'Productivity & Time',
    status: 'Active Release',
    description: 'Designed for engineers, shift workers, and project planners to perform arithmetic on hours, minutes, seconds, and calculate intervals between timestamps.',
    keyFeatures: [
      'Direct HH:MM:SS addition, subtraction, and conversion',
      'Time interval calculator between start and end timestamps',
      'Decimal hours to standard time unit converter',
      'Shift duration and break-time deduction calculator'
    ],
    specs: {
      targetPlatform: 'Android 8.0+',
      downloadSize: '< 4.0 MB',
      architecture: 'Clean Architecture',
      offlineReady: true
    },
    iconName: 'Clock',
    previewType: 'time-calc',
  },
  {
    id: 'unit-converter',
    name: 'Engineering Unit Converter',
    tagline: 'Instant conversions across length, mass, data & engineering units',
    category: 'Engineering & Tools',
    status: 'In Development',
    description: 'A comprehensive yet ultra-light conversion engine supporting metric, imperial, digital data, temperature, velocity, and pressure units with zero internet requirements.',
    keyFeatures: [
      'Over 200+ unit conversion pairs across 12 categories',
      'Live dynamic reciprocal conversion tables',
      'Favorites bookmarking for rapid access to frequent conversions',
      'High-precision floating-point engineering notation'
    ],
    specs: {
      targetPlatform: 'Android 8.0+',
      downloadSize: '< 4.5 MB',
      architecture: 'Modular Engine',
      offlineReady: true
    },
    iconName: 'ArrowLeftRight',
    previewType: 'unit-converter',
  },
  {
    id: 'memo-scratchpad',
    name: 'Quick Memo & Task Pad',
    tagline: 'Minimalist offline scratchpad for instant notes and checklists',
    category: 'Productivity & Notes',
    status: 'Planned',
    description: 'A distraction-free, privacy-centric utility allowing instant memo capture, simple task checklisting, and offline text staging without bloated cloud sign-ins.',
    keyFeatures: [
      'Instant zero-latency note typing and auto-saving',
      'Quick checklist toggle with completion sorting',
      '100% on-device local storage with privacy protection',
      'Clean export to plain text or clipboard'
    ],
    specs: {
      targetPlatform: 'Android 8.0+',
      downloadSize: '< 3.5 MB',
      architecture: 'Local SQLite/Room',
      offlineReady: true
    },
    iconName: 'FileText',
    previewType: 'scratchpad',
  }
];
