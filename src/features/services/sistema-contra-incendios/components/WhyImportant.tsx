"use client";

import { CheckCircle } from "lucide-react";

interface WhyImportantProps {
  description: string;
  points: string[];
}

export function WhyImportant({ description, points }: WhyImportantProps) {
  return (
    <section className="py-16 bg-[#EAEBED]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          ¿Por qué es importante el mantenimiento del sistema de agua contra
          incendios?
        </h2>
        <p className="text-center text-gray-700 text-lg mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-6 h-6 text-[#01A7C2] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
