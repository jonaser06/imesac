import { MantenimientoDetail } from "../types/mantenimiento-detail.types";

export const mantenimientoAguaData: MantenimientoDetail = {
  title: "Mantenimiento de Sistema de Agua Contra Incendios (ACI)",
  subtitle: "Mantenimiento Preventivo y Correctivo",
  description:
    "En IMESAC somos especialistas en el mantenimiento preventivo y correctivo del Sistema de Agua Contra Incendios, garantizando que todos los componentes hidráulicos funcionen de forma segura y cumplan con los estándares exigidos por INDECI, ITSE, NFPA 13, NFPA 14 y NFPA 20. Nuestro servicio asegura que tu infraestructura esté preparada para responder ante emergencias reales, evitando sanciones municipales y asegurando la continuidad operativa de tu empresa.",
  maintenanceSections: [
    {
      title: "Mantenimiento de Red Húmeda",
      items: [
        "Inspección de tuberías presurizadas",
        "Verificación de válvulas y gabinetes contra incendios",
        "Revisión de mangueras, pitones y conexiones",
        "Limpieza interna y externa de los gabinetes",
        "Prueba de presión y estanqueidad",
      ],
    },
    {
      title: "Mantenimiento de Hidrantes",
      items: [
        "Revisión de hidrantes tipo muro y tipo columna",
        "Prueba de caudal y presión",
        "Lubricación de válvulas",
        "Cambio de empaques, juntas y accesorios",
        "Verificación de accesibilidad y señalización",
      ],
    },
    {
      title: "Mantenimiento de Rociadores Automáticos (Sprinklers)",
      items: [
        "Inspección visual de rociadores por corrosión, daño o pintura indebida",
        "Verificación de obstrucciones o mala distribución",
        "Revisión de tuberías, soportes y válvulas de control",
        "Limpieza de cabezales cuando aplica",
        "Pruebas funcionales del sistema",
      ],
    },
    {
      title: "Mantenimiento del Cuarto de Bombas Contra Incendios",
      items: [
        "Prueba operativa de bombas eléctricas y diésel",
        "Revisión de tableros de control",
        "Inspección de arranque automático",
        "Verificación de presión en succión y descarga",
        "Pruebas bajo norma NFPA 20",
      ],
    },
  ],
  informeItems: [
    { item: "Resultados de pruebas" },
    { item: "Observaciones y riesgos" },
    { item: "Recomendaciones técnicas" },
    { item: "Registro fotográfico" },
    { item: "Certificación del servicio" },
  ],
  whyImportant:
    "Un sistema mal mantenido puede fallar en una emergencia, ocasionar pérdidas materiales y poner en riesgo vidas. Con IMESAC obtienes:",
  importancePoints: [
    "Cumplimiento normativo para Licencia de Funcionamiento e ITSE",
    "Equipos hidráulicos operativos 24/7",
    "Reducción de fallas y fugas de agua",
    "Sistemas confiables y probados según NFPA",
    "Prevención de multas y observaciones municipales",
  ],
  serviceAreas: [
    { area: "Almacenes y centros logísticos" },
    { area: "Plantas industriales" },
    { area: "Centros comerciales" },
    { area: "Clínicas y hospitales" },
    { area: "Edificios corporativos" },
    { area: "Instituciones educativas" },
    { area: "Hoteles y complejos comerciales" },
  ],
  closingMessage:
    "Con más de 10 años de experiencia, nuestro equipo está capacitado para garantizar que cada elemento de tu sistema funcione correctamente en caso de emergencia. Ofrecemos atención programada o servicio de mantenimiento urgente.",
  contact: {
    emails: [
      "proyectos@imesac.com",
      "lcasas@imesac.com",
      "amendoza@imesac.com",
    ],
    phones: ["990 458 254", "993 546 564"],
    landline: "01 751 9451",
    website: "www.imesac.com",
  },
};
