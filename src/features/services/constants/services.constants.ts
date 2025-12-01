import { Service } from "../types/service.types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Licencias Municipales",
    slug: "licencias-municipales",
    description:
      "Gestión integral de licencias y permisos municipales para el correcto funcionamiento de su negocio.",
  },
  {
    id: 2,
    title: "Mantenimiento de Subestaciones Eléctricas",
    slug: "mantenimiento-subestaciones-electricas",
    description:
      "Servicio especializado de mantenimiento preventivo y correctivo de subestaciones eléctricas de media y baja tensión.",
  },
  {
    id: 3,
    title: "Instalaciones Eléctricas",
    slug: "instalaciones-electricas",
    description:
      "Soluciones completas en instalaciones eléctricas industriales y comerciales.",
    subcategories: [
      {
        id: 31,
        title: "Tableros Eléctricos",
        slug: "tableros-electricos",
        description:
          "Diseño, fabricación e instalación de tableros eléctricos de distribución y control.",
      },
      {
        id: 32,
        title: "Iluminación Industrial y Comercial",
        slug: "iluminacion-industrial-comercial",
        description:
          "Sistemas de iluminación eficiente LED para espacios industriales y comerciales.",
      },
      {
        id: 33,
        title: "Sistema de Puesta a Tierra",
        slug: "sistema-puesta-tierra",
        description:
          "Diseño, instalación y mantenimiento de sistemas de puesta a tierra para protección eléctrica.",
      },
    ],
  },
  {
    id: 4,
    title: "Sistema Contra Incendios DACI / ACI",
    slug: "sistema-contra-incendios",
    description:
      "Instalación y mantenimiento de sistemas de detección y alarma contra incendios.",
  },
  {
    id: 5,
    title: "Aire Acondicionado y Climatización",
    slug: "aire-acondicionado-climatizacion",
    description:
      "Instalación, mantenimiento y reparación de sistemas de climatización residencial, comercial e industrial.",
  },
  {
    id: 6,
    title: "Mantenimiento y Rebobinado de Motores Eléctricos",
    slug: "mantenimiento-rebobinado-motores",
    description:
      "Servicio especializado en mantenimiento, reparación y rebobinado de motores eléctricos industriales.",
  },
  {
    id: 7,
    title: "Estructuras Metálicas",
    slug: "estructuras-metalicas",
    description:
      "Diseño, fabricación e instalación de estructuras metálicas para aplicaciones industriales y comerciales.",
  },
];
