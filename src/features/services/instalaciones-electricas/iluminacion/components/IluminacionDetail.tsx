"use client";

import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceContact } from "./ServiceContact";
import { iluminacionData } from "../constants/service-data.constants";
import { ImageSlider } from "@/features/shared/components/ImageSlider";

export function IluminacionDetail() {
  const { title, subtitle, description, features, benefits, contact } =
    iluminacionData;

  return (
    <div className="min-h-screen">
      <ServiceHero title={title} subtitle={subtitle} />

      {/* Descripción */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {description}
          </p>
        </div>
      </section>
      <ImageSlider
        images={[
          "/iluminacion-01.png",
          "/iluminacion-02.png",
          "/images/iluminacion.png",
          "/images/iluminacion-2.png",
        ]}
      />
      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceContact contact={contact} />
    </div>
  );
}
