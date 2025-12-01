"use client";

import { Building2 } from "lucide-react";
import { ServiceArea } from "../types/mantenimiento-detail.types";

interface ServiceAreasProps {
  areas: ServiceArea[];
}

export function ServiceAreas({ areas }: ServiceAreasProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Realizamos mantenimiento en:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-[#EAEBED] rounded-lg hover:bg-[#A3BAC3] transition-colors"
            >
              <Building2 className="w-5 h-5 text-[#007090] mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{area.area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
