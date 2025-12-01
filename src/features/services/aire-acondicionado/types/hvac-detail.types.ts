export interface HVACService {
  title: string;
  items: string[];
}

export interface HVACBenefit {
  title: string;
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  landline: string;
  website: string;
}

export interface HVACDetail {
  title: string;
  subtitle: string;
  description: string;
  services: HVACService[];
  benefits: HVACBenefit[];
  contact: ContactInfo;
}
