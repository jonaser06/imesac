import { LICENCIAS_MUNICIPALES_DATA } from "../constants/service-data.constants";
import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceContact } from "./ServiceContact";
import { ImageSlider } from "@/features/shared/components/ImageSlider";

export const LicenciasMunicipalesDetail = () => {
  const { title, description, features, benefits, contact } =
    LICENCIAS_MUNICIPALES_DATA;

  return (
    <>
      <ServiceHero title={title} description={description} />
      <ImageSlider
        images={[
          "/photo-licencia.png",
          // "/photo-licencia.png",
          // "/photo-licencia.png",
        ]}
      />
      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceContact contact={contact} />
    </>
  );
};
