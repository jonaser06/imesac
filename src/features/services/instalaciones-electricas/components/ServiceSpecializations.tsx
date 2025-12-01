"use client";

import { CheckCircle } from "lucide-react";

interface ServiceSpecializationsProps {
  specializations: string[];
}

export function ServiceSpecializations({
  specializations,
}: ServiceSpecializationsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Áreas de especialización
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specializations.map((specialization, index) => (
            <div
              key={index}
              className="flex items-start p-4 hover:bg-[#EAEBED] rounded-lg transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-[#01A7C2] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium">
                {specialization}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
