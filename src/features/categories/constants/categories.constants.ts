import {
  ShieldCheck,
  Zap,
  Settings,
  Snowflake,
  Search,
  Cable,
  Lightbulb,
} from "lucide-react";
import { Category } from "../types/category.types";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Levantamiento de Observaciones de Defensa Civil",
    icon: ShieldCheck,
    subcategories: [
      {
        title: "Evaluación de Riesgos",
        items: [
          "Análisis estructural",
          "Evaluación de sistemas",
          "Inspección de seguridad",
        ],
      },
      {
        title: "Corrección de Observaciones",
        items: ["Implementación de mejoras", "Certificación de cumplimiento"],
      },
      {
        title: "Asesoría Técnica",
        items: ["Consultoría especializada", "Documentación técnica"],
      },
    ],
  },
  {
    id: 2,
    title: "Mantenimiento de Subestaciones Eléctricas",
    icon: Zap,
    subcategories: [
      {
        title: "Subestaciones Media Tensión",
        items: ["Mantenimiento preventivo", "Reparaciones", "Modernización"],
      },
      {
        title: "Subestaciones Baja Tensión",
        items: ["Inspección rutinaria", "Cambio de componentes"],
      },
      {
        title: "Sistemas de Control",
        items: ["Calibración", "Actualización de software"],
      },
    ],
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo/Correctivo",
    icon: Settings,
    subcategories: [
      {
        title: "Mantenimiento Preventivo",
        items: [
          "Inspecciones programadas",
          "Limpieza de equipos",
          "Calibración",
        ],
      },
      {
        title: "Mantenimiento Correctivo",
        items: ["Reparación de fallas", "Reemplazo de componentes"],
      },
      {
        title: "Mantenimiento Predictivo",
        items: ["Análisis de vibraciones", "Termografía"],
      },
    ],
  },
  {
    id: 4,
    title: "Aire Acondicionado y Climatización",
    icon: Snowflake,
    subcategories: [
      {
        title: "Sistemas Residenciales",
        items: ["Split", "Ventana", "Portátil"],
      },
      { title: "Sistemas Comerciales", items: ["VRF", "Chiller", "Rooftop"] },
      {
        title: "Servicios",
        items: ["Instalación", "Mantenimiento", "Reparación"],
      },
    ],
  },
  {
    id: 5,
    title: "Detección de Fugas a Tierra",
    icon: Search,
    subcategories: [
      {
        title: "Detección Avanzada",
        items: ["Equipos especializados", "Medición precisa"],
      },
      {
        title: "Localización",
        items: ["Mapeo de fallas", "Identificación exacta"],
      },
      {
        title: "Solución",
        items: ["Reparación inmediata", "Prevención futura"],
      },
    ],
  },
  {
    id: 6,
    title: "Sistema de Puesta a Tierra",
    icon: Cable,
    subcategories: [
      {
        title: "Diseño",
        items: ["Cálculos técnicos", "Planos especializados"],
      },
      {
        title: "Instalación",
        items: ["Pozos a tierra", "Redes de conexión"],
      },
      {
        title: "Mantenimiento",
        items: ["Medición de resistencia", "Inspección periódica"],
      },
    ],
  },
  {
    id: 7,
    title: "Iluminación en General",
    icon: Lightbulb,
    subcategories: [
      {
        title: "Iluminación LED",
        items: ["Residencial", "Comercial", "Industrial"],
      },
      {
        title: "Sistemas Inteligentes",
        items: ["Automatización", "Control remoto"],
      },
      {
        title: "Eficiencia Energética",
        items: ["Auditoría lumínica", "Optimización"],
      },
    ],
  },
];
