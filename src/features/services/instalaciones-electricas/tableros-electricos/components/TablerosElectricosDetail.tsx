"use client";

import { ServiceHero } from "./ServiceHero";
import { TablerosTypes } from "./TablerosTypes";
import { ServiceIncludes } from "./ServiceIncludes";
import { ServiceBenefits } from "./ServiceBenefits";
import { WhyChooseUs } from "./WhyChooseUs";
import { ServiceContact } from "./ServiceContact";
import { tablerosElectricosData } from "../constants/service-data.constants";
import { ImageSlider } from "@/features/shared/components/ImageSlider";

export function TablerosElectricosDetail() {
  const {
    title,
    subtitle,
    description,
    tablerosTypes,
    services,
    benefits,
    advantages,
    contact,
  } = tablerosElectricosData;

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
        images={["/tableros.png", "/tablero-02.png", "/images/tableros.png"]}
      />
      <TablerosTypes tablerosTypes={tablerosTypes} />
      <ServiceIncludes services={services} />
      <ServiceBenefits benefits={benefits} />
      <WhyChooseUs advantages={advantages} />
      <ServiceContact contact={contact} />
    </div>
  );
}
