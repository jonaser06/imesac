import {
  ShieldCheck,
  Zap,
  Settings,
  Snowflake,
  Search,
  Cable,
  Lightbulb,
} from "lucide-react";

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
