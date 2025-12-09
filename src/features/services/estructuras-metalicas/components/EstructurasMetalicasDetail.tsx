"use client";

import { ServiceHero } from "./ServiceHero";
import { EstructuraServices } from "./EstructuraServices";
import { EstructuraBenefits } from "./EstructuraBenefits";
import { EstructuraContact } from "./EstructuraContact";
import { ImageSlider } from "@/features/shared/components/ImageSlider";
import { estructurasData } from "../constants/estructuras-data.constants";

export function EstructurasMetalicasDetail() {
  const { title, subtitle, description, services, benefits, contact } =
    estructurasData;

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

      <ImageSlider images={["/em-01.jpeg", "/em-02.png", "/em-03.png"]} />
      <EstructuraServices services={services} />
      <EstructuraBenefits benefits={benefits} />
      <EstructuraContact contact={contact} />
    </div>
  );
}
