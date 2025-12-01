export interface MaintenanceSection {
  title: string;
  items: string[];
}

export interface InformeItem {
  item: string;
}

export interface ServiceArea {
  area: string;
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  landline: string;
  website: string;
}

export interface MantenimientoDetail {
  title: string;
  subtitle: string;
  description: string;
  maintenanceSections: MaintenanceSection[];
  informeItems: InformeItem[];
  whyImportant: string;
  importancePoints: string[];
  serviceAreas: ServiceArea[];
  closingMessage: string;
  contact: ContactInfo;
}
