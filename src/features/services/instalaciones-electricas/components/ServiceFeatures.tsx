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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              items={feature.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
