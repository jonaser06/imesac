import { ShieldCheck } from "lucide-react";

export interface Category {
  id: number;
  title: string;
  icon: typeof ShieldCheck;
  subcategories: Subcategory[];
}

export interface Subcategory {
  title: string;
  items: string[];
}
