"use client";

import { MotorService } from "../types/motores-detail.types";
import { CheckCircle2 } from "lucide-react";

interface MotorServicesProps {
  services: MotorService[];
}

export function MotorServices({ services }: MotorServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#006989] mb-12">
          Servicios de Mantenimiento y Rebobinado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#EAEBED] to-white p-6 rounded-lg shadow-lg border-t-4 border-[#01A7C2] hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#006989] mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#01A7C2] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
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
