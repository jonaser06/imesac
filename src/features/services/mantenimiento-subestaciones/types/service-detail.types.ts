export interface ServiceFeature {
  title: string;
  items: string[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  landline: string;
  website: string;
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  contact: ContactInfo;
}
