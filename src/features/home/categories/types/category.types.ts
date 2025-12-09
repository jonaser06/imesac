import { ShieldCheck } from "lucide-react";

export interface Category {
  id: number;
  title: string;
  icon: typeof ShieldCheck;
  href: string;
}