"use client";

import { Star } from "lucide-react";

interface WhyChooseUsProps {
  advantages: string[];
}

export function WhyChooseUs({ advantages }: WhyChooseUsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Por qué elegir IMESAC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-[#EAEBED] rounded-lg hover:shadow-md transition-shadow"
            >
              <Star className="w-6 h-6 text-[#01A7C2] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 font-medium">{advantage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
