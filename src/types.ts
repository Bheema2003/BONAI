export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techTags: string[];
  iconName: string;
}

export interface AppProduct {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'Available' | 'Active Release' | 'In Development' | 'Planned';
  description: string;
  keyFeatures: string[];
  specs: {
    targetPlatform: string;
    downloadSize: string;
    architecture: string;
    offlineReady: boolean;
  };
  iconName: string;
  badgeColor?: string;
  previewType: 'calculator' | 'tip-calc' | 'time-calc' | 'unit-converter' | 'scratchpad';
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
