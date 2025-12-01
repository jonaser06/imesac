import { Star } from "lucide-react";
import { PARTNERS, COMPANY_STATS } from "../constants/companies.constants";
import { PartnerCarousel } from "./PartnerCarousel";
import { CompanyStats } from "./CompanyStats";

export const Companies = () => {
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

        <PartnerCarousel partners={PARTNERS} />
        <CompanyStats stats={COMPANY_STATS} />
      </div>
    </section>
  );
};
