"use client";

import { ServiceFeature } from "../types/service-detail.types";

interface TablerosTypesProps {
  tablerosTypes: ServiceFeature[];
}

export function TablerosTypes({ tablerosTypes }: TablerosTypesProps) {
  return (
    <section className="py-16 bg-[#EAEBED]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          ¿Qué tableros eléctricos fabricamos?
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Ofrecemos una línea completa de tableros certificados:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tablerosTypes.map((tablero, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-[#006989] mb-3 border-b-2 border-[#01A7C2] pb-2">
                {tablero.title}
              </h3>
              {tablero.description && (
                <p className="text-gray-700 leading-relaxed">
                  {tablero.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
