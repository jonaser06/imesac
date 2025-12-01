"use client";

import { FileCheck } from "lucide-react";
import { InformeItem } from "../types/mantenimiento-detail.types";

interface InformeITSEProps {
  items: InformeItem[];
}

export function InformeITSE({ items }: InformeITSEProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#EAEBED] rounded-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <FileCheck className="w-10 h-10 text-[#007090] mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Informe técnico para ITSE / INDECI
            </h2>
          </div>
          <p className="text-center text-gray-700 mb-6">
            Al finalizar, entregamos un informe detallado con:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center border-l-4 border-[#01A7C2]"
              >
                <span className="text-gray-800 font-medium">{item.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
