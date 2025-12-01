"use client";

import { EstructuraBenefit } from "../types/estructuras-detail.types";
import { Star } from "lucide-react";

interface EstructuraBenefitsProps {
  benefits: EstructuraBenefit[];
}

export function EstructuraBenefits({ benefits }: EstructuraBenefitsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#EAEBED] to-[#A3BAC3]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-[#006989] mb-10">
          Beneficios de elegir IMESAC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#01A7C2] p-3 rounded-full mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-800 font-medium">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
