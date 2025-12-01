export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon?: string;
}
