import { ServiceFeatureCard } from "./ServiceFeatureCard";
import { ServiceFeature } from "../types/service-detail.types";

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Servicios de Trámites Municipales
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Gestión integral de permisos y certificaciones para tu empresa
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <ServiceFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
