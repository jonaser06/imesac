"use client";

import { ServiceFeatureCard } from "./ServiceFeatureCard";
import { ServiceFeature } from "../types/service-detail.types";

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-16 bg-[#EAEBED]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Servicio Profesional de Mantenimiento de Subestaciones MT/BT
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Nuestro servicio integral incluye:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ServiceFeatureCard
              key={index}
              title={feature.title}
              items={feature.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
