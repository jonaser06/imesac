"use client";

import { ServiceHero } from "./ServiceHero";
import { MaintenanceSections } from "./MaintenanceSections";
import { InformeITSE } from "./InformeITSE";
import { WhyImportant } from "./WhyImportant";
import { ServiceAreas } from "./ServiceAreas";
import { MantenimientoContact } from "./MantenimientoContact";
import { mantenimientoAguaData } from "../constants/mantenimiento-agua-data.constants";

export function MantenimientoAguaDetail() {
  const {
    title,
    subtitle,
    description,
    maintenanceSections,
    informeItems,
    whyImportant,
    importancePoints,
    serviceAreas,
    closingMessage,
    contact,
  } = mantenimientoAguaData;

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

      <MaintenanceSections sections={maintenanceSections} />
      <InformeITSE items={informeItems} />
      <WhyImportant description={whyImportant} points={importancePoints} />
      <ServiceAreas areas={serviceAreas} />

      {/* Closing Message */}
      <section className="py-12 bg-[#EAEBED]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-[#006989] mb-6">
            IMESAC: Expertos en mantenimiento de sistemas contra incendios
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {closingMessage}
          </p>
        </div>
      </section>

      <MantenimientoContact contact={contact} />
    </div>
  );
}
