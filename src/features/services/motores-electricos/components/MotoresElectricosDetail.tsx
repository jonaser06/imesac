"use client";

import { ServiceHero } from "./ServiceHero";
import { MotorServices } from "./MotorServices";
import { MotorBenefits } from "./MotorBenefits";
import { MotorContact } from "./MotorContact";
import { ImageSlider } from "@/features/shared/components/ImageSlider";
import { motoresData } from "../constants/motores-data.constants";

export function MotoresElectricosDetail() {
  const { title, subtitle, description, services, benefits, contact } =
    motoresData;

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
        images={["/motores.png", "/motores-02.jpeg", "/motores-03.jpeg"]}
      />
      <MotorServices services={services} />
      <MotorBenefits benefits={benefits} />
      <MotorContact contact={contact} />
    </div>
  );
}
