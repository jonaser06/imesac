"use client";
import {
  ShieldCheck,
  Zap,
  Settings,
  Snowflake,
  Search,
  Cable,
  Lightbulb,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
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

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="bg-[#e6e6e6]">
      <div className="mx-auto max-w-[1280px]">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <div key={category.id} className="relative">
                <div
                  className={`flex flex-col items-center text-center cursor-pointer p-4 h-40 transition-colors ${
                    isActive ? "bg-[#ccc]" : "hover:bg-[#ccc]"
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 mb-2">
                    {category.title}
                  </span>
                  {isActive ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Dropdown Content */}
      {activeCategory && (
        <div className="bg-[#ccc] py-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories
                .find((cat) => cat.id === activeCategory)
                ?.subcategories.map((subcategory, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {subcategory.title}
                    </h3>
                    <ul className="space-y-2">
                      {subcategory.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-[#d09706] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Categories;
