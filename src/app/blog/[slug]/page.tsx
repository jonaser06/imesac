import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Zap,
  Snowflake,
  ShieldCheck,
  Settings,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  highlights: string[];
  technologies: string[];
}

const blogPosts: Record<string, BlogPost> = {
  "mantenimiento-subestaciones-electricas": {
    id: "mantenimiento-subestaciones-electricas",
    title: "Mantenimiento especializado de subestaciones eléctricas",
    excerpt:
      "Proyecto de modernización y mantenimiento preventivo en subestación eléctrica de 220kV para garantizar el suministro energético confiable.",
    image: "/mantenimiento_see.jpg",
    category: "Subestaciones",
    date: "2024-01-15",
    readTime: "8 min",
    author: "Ing. Carlos Mendoza",
    content: `
      <h2>Modernización integral de subestación eléctrica crítica</h2>
      
      <p>IMESAC ejecutó un proyecto de modernización completa de una subestación eléctrica de 220kV que alimenta a más de 50,000 usuarios en el sector industrial de Lima Norte. Este proyecto representó uno de nuestros desafíos técnicos más importantes del año.</p>
      
      <h3>Desafíos del proyecto</h3>
      
      <p>La subestación, construida hace más de 25 años, presentaba equipos obsoletos y sistemas de protección que no cumplían con las normativas actuales. El principal reto era realizar la modernización sin interrumpir el suministro eléctrico a las industrias conectadas.</p>
      
      <p>Nuestro equipo desarrolló un plan de trabajo que permitió realizar las intervenciones por etapas, utilizando esquemas de transferencia de carga y coordinación estrecha con el operador del sistema eléctrico.</p>
      
      <h3>Soluciones implementadas</h3>
      
      <ul>
        <li><strong>Reemplazo de transformadores:</strong> Instalación de dos transformadores de 60 MVA con tecnología de última generación</li>
        <li><strong>Modernización de sistemas de protección:</strong> Implementación de relés digitales con comunicación IEC 61850</li>
        <li><strong>Actualización del sistema SCADA:</strong> Nueva sala de control con pantallas redundantes y sistema de respaldo</li>
        <li><strong>Mejoras en seguridad:</strong> Instalación de sistemas de detección de fallas por arco eléctrico</li>
      </ul>
      
      <h3>Resultados obtenidos</h3>
      
      <p>El proyecto se completó en 8 meses, cumpliendo todos los plazos establecidos. Los resultados han sido excepcionales:</p>
      
      <p>La nueva configuración ha permitido una reducción del 75% en las interrupciones no programadas y ha mejorado significativamente la calidad del suministro eléctrico. El sistema de monitoreo implementado permite detectar anomalías 24/7 y realizar mantenimientos predictivos.</p>
      
      <h3>Aporte de IMESAC</h3>
      
      <p>Este proyecto demuestra nuestra capacidad para ejecutar trabajos de alta complejidad técnica manteniendo los más altos estándares de seguridad. Nuestro enfoque integral abarcó desde el diseño detallado hasta la puesta en servicio, incluyendo la capacitación del personal operativo.</p>
      
      <p>La experiencia adquirida en este proyecto nos posiciona como referente en modernización de infraestructura eléctrica crítica, contribuyendo al desarrollo de un sistema eléctrico más confiable y eficiente para el país.</p>
    `,
    impact: [
      {
        metric: "Reducción de interrupciones",
        value: "75%",
        description: "Menos interrupciones no programadas",
      },
      {
        metric: "Usuarios beneficiados",
        value: "50,000+",
        description: "Sector industrial Lima Norte",
      },
      {
        metric: "Potencia instalada",
        value: "120 MVA",
        description: "Capacidad de transformación",
      },
      {
        metric: "Tiempo de ejecución",
        value: "8 meses",
        description: "Cumplimiento de cronograma",
      },
    ],
    highlights: [
      "Modernización sin interrupciones de servicio",
      "Implementación de tecnología IEC 61850",
      "Sistema de detección de fallas por arco eléctrico",
      "Monitoreo 24/7 con mantenimiento predictivo",
    ],
    technologies: [
      "Transformadores 60 MVA",
      "Relés digitales",
      "Sistema SCADA",
      "IEC 61850",
      "Detección de arco eléctrico",
    ],
  },
  "sistemas-hvac-eficiencia-energetica": {
    id: "sistemas-hvac-eficiencia-energetica",
    title: "Sistemas HVAC de alta eficiencia energética",
    excerpt:
      "Implementación de sistema de climatización inteligente que redujo el consumo energético en un 35% en complejo industrial.",
    image: "/HVAC_2.jpg",
    category: "Climatización",
    date: "2024-01-10",
    readTime: "6 min",
    author: "Ing. Ana Rodríguez",
    content: `
      <h2>Revolucionando la eficiencia energética en climatización industrial</h2>
      
      <p>IMESAC desarrolló e implementó un sistema HVAC inteligente de última generación para un complejo industrial de 25,000 m² dedicado a la manufactura de productos farmacéuticos, donde el control preciso de temperatura y humedad es crítico para la calidad del producto.</p>
      
      <h3>El desafío energético</h3>
      
      <p>El cliente enfrentaba costos energéticos elevados debido a un sistema de climatización obsoleto que operaba a capacidad máxima las 24 horas del día. Los equipos antiguos no solo consumían excesiva energía, sino que también presentaban dificultades para mantener las condiciones ambientales requeridas por las normativas farmacéuticas.</p>
      
      <h3>Nuestra solución inteligente</h3>
      
      <p>Diseñamos un sistema HVAC modular con control inteligente que se adapta automáticamente a las condiciones operativas:</p>
      
      <ul>
        <li><strong>Equipos de alta eficiencia:</strong> Chillers con tecnología inverter y clasificación energética A+++</li>
        <li><strong>Control inteligente por zonas:</strong> Sistema BMS que ajusta automáticamente temperatura y humedad según ocupación</li>
        <li><strong>Recuperación de calor:</strong> Intercambiadores que aprovechan el calor residual de procesos productivos</li>
        <li><strong>Monitoreo en tiempo real:</strong> Sensores IoT para optimización continua del rendimiento</li>
      </ul>
      
      <h3>Resultados extraordinarios</h3>
      
      <p>La implementación del nuevo sistema ha generado beneficios inmediatos y sostenibles:</p>
      
      <p>El consumo energético se redujo en un 35%, lo que representa ahorros anuales de más de S/ 180,000. Además, se logró un control más preciso de las condiciones ambientales, mejorando la calidad del proceso productivo y reduciendo las pérdidas por productos fuera de especificación.</p>
      
      <h3>Innovación y sostenibilidad</h3>
      
      <p>Este proyecto incorporó tecnologías emergentes como machine learning para la optimización predictiva del sistema y la integración con fuentes de energía renovable disponibles en la planta.</p>
      
      <h3>Aporte de IMESAC al sector</h3>
      
      <p>Nuestro enfoque holístico demostró que la eficiencia energética y la calidad del proceso productivo no son objetivos contradictorios. Este proyecto se ha convertido en un caso de estudio para otras implementaciones similares, posicionando a IMESAC como líder en soluciones HVAC inteligentes para la industria.</p>
    `,
    impact: [
      {
        metric: "Ahorro energético",
        value: "35%",
        description: "Reducción en consumo eléctrico",
      },
      {
        metric: "Ahorro económico",
        value: "S/ 180,000",
        description: "Ahorros anuales proyectados",
      },
      {
        metric: "Área climatizada",
        value: "25,000 m²",
        description: "Superficie del complejo industrial",
      },
      {
        metric: "Precisión de control",
        value: "±0.5°C",
        description: "Control de temperatura ambiente",
      },
    ],
    highlights: [
      "Sistema BMS con control inteligente por zonas",
      "Tecnología inverter con clasificación A+++",
      "Recuperación de calor de procesos industriales",
      "Monitoreo IoT en tiempo real",
    ],
    technologies: [
      "Chillers Inverter",
      "Sistema BMS",
      "Sensores IoT",
      "Recuperadores de calor",
      "Machine Learning",
    ],
  },
  "certificacion-defensa-civil": {
    id: "certificacion-defensa-civil",
    title: "Certificación Defensa Civil",
    excerpt:
      "Proceso completo de certificación para cumplimiento de normativas de seguridad en instalaciones eléctricas industriales.",
    image: "/HVAC_2.jpg",
    category: "Seguridad",
    date: "2024-01-05",
    readTime: "4 min",
    author: "Ing. Luis García",
    content: `
      <h2>Certificación integral de seguridad para instalaciones críticas</h2>
      
      <p>IMESAC lideró el proceso de certificación de Defensa Civil para una planta industrial de procesamiento químico, garantizando el cumplimiento de todas las normativas de seguridad vigentes y protegiendo tanto las instalaciones como al personal operativo.</p>
      
      <h3>Marco normativo y requisitos</h3>
      
      <p>El proyecto requería cumplir con múltiples normativas nacionales e internacionales debido a la naturaleza de los procesos químicos. Nuestro equipo desarrolló una matriz de cumplimiento que abarcó desde el Código Nacional de Electricidad hasta estándares internacionales como NFPA y IEC.</p>
      
      <h3>Evaluación integral de riesgos</h3>
      
      <ul>
        <li><strong>Análisis de instalaciones eléctricas:</strong> Verificación de sistemas de puesta a tierra y protecciones</li>
        <li><strong>Evaluación de sistemas contra incendios:</strong> Sistemas de detección y supresión automática</li>
        <li><strong>Simulacros y procedimientos:</strong> Desarrollo de planes de evacuación y respuesta a emergencias</li>
        <li><strong>Capacitación del personal:</strong> Entrenamiento en protocolos de seguridad eléctrica</li>
      </ul>
      
      <h3>Mejoras implementadas</h3>
      
      <p>Durante el proceso identificamos oportunidades de mejora que fueron implementadas para superar los estándares mínimos requeridos. Estas mejoras no solo aseguraron la certificación, sino que elevaron significativamente el nivel de seguridad de las instalaciones.</p>
      
      <h3>Aporte de IMESAC</h3>
      
      <p>Nuestro compromiso con la seguridad va más allá del cumplimiento normativo. Este proyecto demuestra nuestra capacidad para crear entornos de trabajo seguros que protegen vidas y activos, estableciendo nuevos estándares en la industria.</p>
    `,
    impact: [
      {
        metric: "Cumplimiento normativo",
        value: "100%",
        description: "Todas las normativas vigentes",
      },
      {
        metric: "Personal capacitado",
        value: "150+",
        description: "Trabajadores entrenados",
      },
      {
        metric: "Simulacros realizados",
        value: "12",
        description: "Ejercicios de evacuación",
      },
      {
        metric: "Tiempo de certificación",
        value: "3 meses",
        description: "Proceso expedito",
      },
    ],
    highlights: [
      "Cumplimiento integral de normativas nacionales e internacionales",
      "Sistemas de detección y supresión contra incendios",
      "Protocolos de respuesta a emergencias",
      "Capacitación especializada del personal",
    ],
    technologies: [
      "Sistemas de detección",
      "Puesta a tierra",
      "Protecciones eléctricas",
      "Sistemas contra incendios",
      "Monitoreo de seguridad",
    ],
  },
  "mantenimiento-preventivo-correctivo": {
    id: "mantenimiento-preventivo-correctivo",
    title: "Mantenimiento Preventivo y Correctivo",
    excerpt:
      "Estrategias integrales de mantenimiento que han extendido la vida útil de equipos eléctricos en un 40%.",
    image: "/mant_estructuras.jpg",
    category: "Mantenimiento",
    date: "2023-12-28",
    readTime: "5 min",
    author: "Ing. María López",
    content: `
      <h2>Estrategia integral de mantenimiento para máxima disponibilidad</h2>
      
      <p>IMESAC desarrolló e implementó un programa de mantenimiento integral para una planta siderúrgica, combinando técnicas preventivas, predictivas y correctivas para maximizar la disponibilidad de equipos críticos y extender su vida útil.</p>
      
      <h3>Diagnóstico inicial</h3>
      
      <p>Al inicio del proyecto, la planta experimentaba paradas no programadas frecuentes que afectaban la producción. Nuestro análisis identificó patrones de falla y oportunidades de mejora en los procedimientos de mantenimiento existentes.</p>
      
      <h3>Metodología implementada</h3>
      
      <ul>
        <li><strong>Mantenimiento predictivo:</strong> Análisis de vibraciones, termografía y análisis de aceites</li>
        <li><strong>Mantenimiento preventivo:</strong> Cronogramas optimizados basados en criticidad de equipos</li>
        <li><strong>Mantenimiento correctivo planificado:</strong> Estrategias de reparación para minimizar tiempo de parada</li>
        <li><strong>Capacitación técnica:</strong> Desarrollo de competencias del personal de mantenimiento</li>
      </ul>
      
      <h3>Resultados sobresalientes</h3>
      
      <p>La implementación del programa ha generado mejoras sustanciales en todos los indicadores de mantenimiento. La disponibilidad de equipos aumentó del 85% al 96%, mientras que los costos de mantenimiento se redujeron en un 25%.</p>
      
      <h3>Aporte de IMESAC</h3>
      
      <p>Este proyecto demuestra nuestra capacidad para transformar operaciones de mantenimiento tradicionales en sistemas de clase mundial, aplicando las mejores prácticas internacionales adaptadas a la realidad local.</p>
    `,
    impact: [
      {
        metric: "Extensión de vida útil",
        value: "40%",
        description: "Equipos eléctricos principales",
      },
      {
        metric: "Disponibilidad de equipos",
        value: "96%",
        description: "Incremento desde 85%",
      },
      {
        metric: "Reducción de costos",
        value: "25%",
        description: "Costos de mantenimiento",
      },
      {
        metric: "Paradas no programadas",
        value: "-60%",
        description: "Reducción significativa",
      },
    ],
    highlights: [
      "Mantenimiento predictivo con análisis de vibraciones",
      "Termografía infrarroja para detección temprana",
      "Cronogramas optimizados por criticidad",
      "Capacitación especializada del personal",
    ],
    technologies: [
      "Análisis de vibraciones",
      "Termografía infrarroja",
      "Análisis de aceites",
      "CMMS",
      "Técnicas predictivas",
    ],
  },
  "iluminacion-led-inteligente": {
    id: "iluminacion-led-inteligente",
    title: "Iluminación LED Inteligente",
    excerpt:
      "Proyecto de modernización de iluminación con tecnología LED y control inteligente para centro comercial de 50,000 m².",
    image: "/iluminacion.jpg",
    category: "Iluminación",
    date: "2023-12-20",
    readTime: "7 min",
    author: "Ing. Pedro Vásquez",
    content: `
      <h2>Modernización inteligente de iluminación comercial</h2>
      
      <p>IMESAC ejecutó la transformación completa del sistema de iluminación de uno de los centros comerciales más grandes de Lima, implementando tecnología LED inteligente que ha revolucionado tanto la experiencia del cliente como la eficiencia operativa.</p>
      
      <h3>El desafío de la modernización</h3>
      
      <p>El centro comercial operaba con tecnología de iluminación obsoleta que generaba altos costos energéticos y mantenimiento frecuente. El reto era modernizar sin interrumpir las operaciones comerciales y mejorar significativamente la calidad lumínica.</p>
      
      <h3>Solución tecnológica integral</h3>
      
      <ul>
        <li><strong>LED de alta eficiencia:</strong> Luminarias con eficacia superior a 150 lm/W</li>
        <li><strong>Control inteligente:</strong> Sistema de gestión centralizada con sensores de presencia y luz natural</li>
        <li><strong>Zonificación dinámica:</strong> Ajuste automático según horarios y flujo de visitantes</li>
        <li><strong>Monitoreo remoto:</strong> Dashboard para control y análisis de consumo en tiempo real</li>
      </ul>
      
      <h3>Resultados impresionantes</h3>
      
      <p>La modernización generó beneficios inmediatos y sostenibles. El consumo energético de iluminación se redujo en un 70%, representando ahorros anuales superiores a S/ 400,000. Además, la calidad lumínica mejoró significativamente, creando ambientes más atractivos para los visitantes.</p>
      
      <h3>Innovación en experiencia del cliente</h3>
      
      <p>El sistema implementado incluye escenarios lumínicos dinámicos que se adaptan a diferentes eventos y festividades, creando atmósferas únicas que mejoran la experiencia de compra y aumentan el tiempo de permanencia de los visitantes.</p>
      
      <h3>Aporte de IMESAC al sector retail</h3>
      
      <p>Este proyecto establece un nuevo estándar para la iluminación comercial en el país, demostrando que la tecnología puede ser aliada tanto de la sostenibilidad como de la rentabilidad. La experiencia adquirida nos posiciona como referente en soluciones de iluminación inteligente.</p>
    `,
    impact: [
      {
        metric: "Ahorro energético",
        value: "70%",
        description: "Reducción en consumo de iluminación",
      },
      {
        metric: "Ahorro económico",
        value: "S/ 400,000",
        description: "Ahorros anuales proyectados",
      },
      {
        metric: "Área iluminada",
        value: "50,000 m²",
        description: "Superficie total del centro comercial",
      },
      {
        metric: "Luminarias instaladas",
        value: "2,500+",
        description: "Puntos de luz LED",
      },
    ],
    highlights: [
      "Luminarias LED con eficacia superior a 150 lm/W",
      "Control inteligente con sensores de presencia",
      "Zonificación dinámica automática",
      "Escenarios lumínicos para eventos especiales",
    ],
    technologies: [
      "LED alta eficiencia",
      "Sensores de presencia",
      "Control centralizado",
      "Monitoreo IoT",
      "Gestión inteligente",
    ],
  },
  "sistemas-puesta-tierra": {
    id: "sistemas-puesta-tierra",
    title: "Sistemas de Puesta a Tierra",
    excerpt:
      "Diseño e implementación de sistema de puesta a tierra de alta resistencia para instalación industrial crítica.",
    image: "/puesta_tierra.jpg",
    category: "Seguridad",
    date: "2023-12-15",
    readTime: "6 min",
    author: "Ing. Carmen Silva",
    content: `
      <h2>Sistema de puesta a tierra para instalación crítica de telecomunicaciones</h2>
      
      <p>IMESAC diseñó e implementó un sistema de puesta a tierra de alta performance para un centro de datos y telecomunicaciones, garantizando la protección de equipos sensibles y la seguridad del personal en un entorno con altos requerimientos de continuidad operativa.</p>
      
      <h3>Desafíos del proyecto</h3>
      
      <p>El proyecto presentaba desafíos únicos debido a la alta resistividad del suelo local y la necesidad de proteger equipos electrónicos extremadamente sensibles a variaciones de potencial. Además, el sistema debía integrarse con las protecciones contra rayos existentes.</p>
      
      <h3>Metodología de diseño</h3>
      
      <p>Nuestro enfoque incluyó estudios geotécnicos detallados, modelamiento electromagnético y análisis de seguridad para desarrollar una solución óptima:</p>
      
      <ul>
        <li><strong>Estudios de resistividad:</strong> Análisis detallado del suelo con método de Wenner</li>
        <li><strong>Diseño optimizado:</strong> Configuración de malla con electrodos profundos</li>
        <li><strong>Materiales especializados:</strong> Soldaduras exotérmicas y conductores de cobre de alta pureza</li>
        <li><strong>Sistema de monitoreo:</strong> Medición continua de resistencia de puesta a tierra</li>
      </ul>
      
      <h3>Resultados excepcionales</h3>
      
      <p>El sistema implementado logró una resistencia de puesta a tierra de menos de 1 ohm, superando ampliamente los requerimientos normativos. Las mediciones de potenciales de paso y contacto confirmaron niveles de seguridad superiores a los estándares internacionales.</p>
      
      <h3>Beneficios para la operación</h3>
      
      <p>La implementación del nuevo sistema ha eliminado completamente las interrupciones por fallas a tierra y ha mejorado significativamente la calidad de la energía suministrada a los equipos críticos. El sistema de monitoreo permite mantener la performance óptima en el tiempo.</p>
      
      <h3>Aporte de IMESAC a la seguridad eléctrica</h3>
      
      <p>Este proyecto demuestra nuestra capacidad para resolver desafíos complejos de seguridad eléctrica, aplicando la ingeniería más avanzada para proteger tanto equipos como personas. La experiencia adquirida fortalece nuestra posición como especialistas en sistemas de protección eléctrica.</p>
    `,
    impact: [
      {
        metric: "Resistencia alcanzada",
        value: "<1 Ω",
        description: "Resistencia de puesta a tierra",
      },
      {
        metric: "Equipos protegidos",
        value: "500+",
        description: "Servidores y equipos críticos",
      },
      {
        metric: "Área protegida",
        value: "5,000 m²",
        description: "Superficie del centro de datos",
      },
      {
        metric: "Tiempo de implementación",
        value: "6 semanas",
        description: "Ejecución sin interrupciones",
      },
    ],
    highlights: [
      "Resistencia de puesta a tierra menor a 1 ohm",
      "Protección de equipos electrónicos sensibles",
      "Soldaduras exotérmicas de alta durabilidad",
      "Sistema de monitoreo continuo",
    ],
    technologies: [
      "Malla de puesta a tierra",
      "Electrodos profundos",
      "Soldadura exotérmica",
      "Conductores de cobre",
      "Monitoreo continuo",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post no encontrado - IMESAC Blog",
    };
  }

  return {
    title: `${post.title} - IMESAC Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const iconMap: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    Subestaciones: Zap,
    Climatización: Snowflake,
    Seguridad: ShieldCheck,
    Mantenimiento: Settings,
    Iluminación: Lightbulb,
  };

  const IconComponent = iconMap[post.category] || Zap;

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <IconComponent className="w-6 h-6" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("es-ES")}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Impact Metrics */}
        <section className="grid md:grid-cols-4 gap-6 mb-12">
          {post.impact.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                {metric.metric}
              </div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </div>
          ))}
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Aspectos Destacados
              </h3>
              <ul className="space-y-3">
                {post.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Tecnologías Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                ¿Necesitas una solución similar?
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Nuestro equipo de especialistas puede desarrollar una solución
                personalizada para tu proyecto.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
