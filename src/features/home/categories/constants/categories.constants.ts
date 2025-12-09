import {
  ClipboardCheck,
  Server,
  Plug,
  Flame,
  Fan,
  Wrench,
  Hammer,
} from "lucide-react";
import { Category } from "../types/category.types";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Licencias Municipales",
    icon: ClipboardCheck,
    href: "/servicios/licencias-municipales",
  },
  {
    id: 2,
    title: "Mantenimiento de Subestaciones Eléctricas",
    icon: Server,
    href: "/servicios/mantenimiento-subestaciones-electricas",
  },
  {
    id: 3,
    title: "Instalaciones Eléctricas",
    icon: Plug,
    href: "/servicios/instalaciones-electricas",
  },
  {
    id: 4,
    title: "Sistema Contra Incendios DACI / ACI",
    icon: Flame,
    href: "/servicios/sistema-contra-incendios",
  },
  {
    id: 5,
    title: "Aire Acondicionado y Climatización",
    icon: Fan,
    href: "/servicios/aire-acondicionado-climatizacion",
  },
  {
    id: 6,
    title: "Mantenimiento y Rebobinado de Motores Eléctricos",
    icon: Wrench,
    href: "/servicios/mantenimiento-rebobinado-motores",
  },
  {
    id: 7,
    title: "Estructuras Metálicas",
    icon: Hammer,
    href: "/servicios/estructuras-metalicas",
  },
];