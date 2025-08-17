import { Star } from "lucide-react";
import Image from "next/image";
import style from "./Companies.module.css";

const Companies = () => {
  const partners = [
    { src: "/partners/linea1.svg", alt: "Linea 1" },
    { src: "/partners/sharf.svg", alt: "Sharf" },
    { src: "/partners/quinflux.svg", alt: "Quinflux" },
    { src: "/partners/promet.png", alt: "Promet" },
    { src: "/partners/chemsupply.png", alt: "Chemsupply" },
    { src: "/partners/tacama_logo.png", alt: "Tacama" },
    { src: "/partners/lap.png", alt: "LAP" },
    { src: "/partners/zedina.webp", alt: "Zedina" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-[#d09706] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Empresas que Confían en Nosotros
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 10 años brindando soluciones eléctricas confiables a empresas
            líderes en diversos sectores
          </p>
        </div>

        {/* Companies Carousel */}
        <div className={style.carouselContainer}>
          <div className={style.carouselTrack}>
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className={style.partnerSlide}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  width={120}
                  height={64}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className={style.partnerSlide}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  width={120}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d09706] mb-2">150+</div>
            <div className="text-gray-600">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d09706] mb-2">10+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#d09706] mb-2">98%</div>
            <div className="text-gray-600">Satisfacción del Cliente</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
