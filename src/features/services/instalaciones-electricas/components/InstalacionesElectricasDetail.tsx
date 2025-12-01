"use client";

import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceSpecializations } from "./ServiceSpecializations";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceContact } from "./ServiceContact";
import { instalacionesElectricasData } from "../constants/service-data.constants";

export function InstalacionesElectricasDetail() {
  const {
    title,
    subtitle,
    description,
    features,
    specializations,
    benefits,
    contact,
  } = instalacionesElectricasData;

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

      <ServiceFeatures features={features} />
      <ServiceSpecializations specializations={specializations} />
      <ServiceBenefits benefits={benefits} />
      <ServiceContact contact={contact} />
    </div>
  );
}
