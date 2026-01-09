export type Language = 'ar' | 'en';

export interface PinData {
  title: string;
  description: string;
  brandName: string;
  cta: string; // Call to Action
  image: string | null;
  altText: string;
}

export interface AiSuggestion {
  titles: string[];
  description: string;
  hashtags: string[];
  strategyTip: string;
}

export interface PinStrategyVariant {
  intent: string; // e.g., "Inspiration", "Education", "Sales"
  goal: string;
  visualHook: string; // Description of image
  textOverlay: string; // Text on image
  title: string;
  description: string;
  keywords: string[];
}

export interface HighConvertingPlan {
  topic: string;
  strategies: PinStrategyVariant[];
}

export interface GeneratedPin {
  visualHook: string;
  textOverlay: string;
  title: string;
  description: string;
  altText: string;
  hashtags: string[];
}

export enum Tab {
  BUILDER = 'builder',
  SEO = 'seo',
  STRATEGY = 'strategy',
  CALENDAR = 'calendar',
  HIGH_CONVERTING = 'high_converting',
  POST_GENERATOR = 'post_generator'
}