export interface MotorService {
  title: string;
  items: string[];
}

export interface MotorBenefit {
  title: string;
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  landline: string;
  website: string;
}

export interface MotoresDetail {
  title: string;
  subtitle: string;
  description: string;
  services: MotorService[];
  benefits: MotorBenefit[];
  contact: ContactInfo;
}
