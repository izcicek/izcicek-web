export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  itemCount?: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  details?: string;
  images: string[];
  featured: boolean;
  dimensions?: string;
  material?: string;
  care?: string;
  isSample?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type InstagramPost = {
  id: string;
  image: string;
  alt: string;
  link: string;
  caption: string;
};

export type SiteSettings = {
  brandName: string;
  brandTagline: string;
  logoText: string;
  domain: string;
  phone: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  addressNote: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    ctaText: string;
  };
  story: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryText?: string;
    image: string;
  };
  process: ProcessStep[];
  faqs: FAQItem[];
  instagramPosts: InstagramPost[];
};
