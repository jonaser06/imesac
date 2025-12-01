import { SERVICES } from "../constants/services.constants";
import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en instalaciones eléctricas, mantenimiento y
            sistemas especializados para la industria y el comercio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
