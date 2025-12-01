import {
  Cable,
  Lightbulb,
  Settings,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: typeof Zap;
  category: string;
  href: string;
  gridClass: string;
}
