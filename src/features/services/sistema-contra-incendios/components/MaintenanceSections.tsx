"use client";

import { Check, CheckCircle, FileText } from "lucide-react";
import { MaintenanceSection } from "../types/mantenimiento-detail.types";

interface MaintenanceSectionsProps {
  sections: MaintenanceSection[];
}

export function MaintenanceSections({ sections }: MaintenanceSectionsProps) {
  return (
    <section className="py-16 bg-[#EAEBED]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Qué incluye el mantenimiento del Sistema de Agua Contra Incendios?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#006989] mb-4 border-b-2 border-[#01A7C2] pb-2">
                {index + 1}. {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#01A7C2] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
