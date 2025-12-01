"use client";

import { ServiceBenefit } from "../types/service-detail.types";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Beneficios del mantenimiento con IMESAC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-l-4 border-[#01A7C2] pl-6 py-4 hover:bg-[#EAEBED] transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#007090] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
