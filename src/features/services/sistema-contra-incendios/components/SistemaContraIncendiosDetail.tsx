"use client";

import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceContact } from "./ServiceContact";
import { ImageSlider } from "@/features/shared/components/ImageSlider";
import { sistemaContraIncendiosData } from "../constants/daci-data.constants";

export function SistemaContraIncendiosDetail() {
  const { title, subtitle, description, features, benefits, contact } =
    sistemaContraIncendiosData;

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
      <ImageSlider images={["/dasi-1.png", "/daci-02.png", "/daci-03.png"]} />
      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceContact contact={contact} />
    </div>
  );
}
