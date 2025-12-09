"use client";

import { ServiceHero } from "./ServiceHero";
import { HVACServices } from "./HVACServices";
import { HVACBenefits } from "./HVACBenefits";
import { HVACContact } from "./HVACContact";
import { ImageSlider } from "@/features/shared/components/ImageSlider";
import { hvacData } from "../constants/hvac-data.constants";

export function AireAcondicionadoDetail() {
  const { title, subtitle, description, services, benefits, contact } =
    hvacData;

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
      <ImageSlider images={["/hvac-01.png", "/hvac-02.png", "/hvac-03.png"]} />

      <HVACServices services={services} />
      <HVACBenefits benefits={benefits} />
      <HVACContact contact={contact} />
    </div>
  );
}
