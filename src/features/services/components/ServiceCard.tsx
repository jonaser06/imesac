import { Service } from "../types/service.types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>

      {service.subcategories && service.subcategories.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Servicios incluidos:
          </h4>
          <ul className="space-y-2">
            {service.subcategories.map((subcategory) => (
              <li key={subcategory.id} className="flex items-start">
                <ChevronRight className="w-4 h-4 text-[#d09706] mt-1 flex-shrink-0" />
                <div className="ml-2">
                  <Link
                    href={`/servicios/${service.slug}/${subcategory.slug}`}
                    className="text-gray-700 hover:text-[#d09706] transition-colors font-medium"
                  >
                    {subcategory.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">
                    {subcategory.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <Link
          href={`/servicios/${service.slug}`}
          className="inline-flex items-center text-[#d09706] hover:text-[#b07f05] font-medium transition-colors"
        >
          Ver más detalles
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};
