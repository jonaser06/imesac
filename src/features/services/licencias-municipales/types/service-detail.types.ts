export interface ServiceDetail {
  title: string;
  description: string;
  features: ServiceFeature[];
  benefits: string[];
  contact: ContactInfo;
}

export interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  items: string[];
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  landline: string;
  website: string;
  cta: string;
}
