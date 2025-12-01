export interface ServiceFeature {
  title: string;
  description?: string;
  items?: string[];
}

export interface ServiceBenefit {
  title: string;
  description?: string;
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
  tablerosTypes: ServiceFeature[];
  services: string[];
  benefits: ServiceBenefit[];
  advantages: string[];
  contact: ContactInfo;
}
