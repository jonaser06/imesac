export interface EstructuraService {
  title: string;
  items: string[];
}

export interface EstructuraBenefit {
  title: string;
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  landline: string;
  website: string;
}

export interface EstructurasDetail {
  title: string;
  subtitle: string;
  description: string;
  services: EstructuraService[];
  benefits: EstructuraBenefit[];
  contact: ContactInfo;
}
