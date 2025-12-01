import { ServiceFeature as ServiceFeatureType } from "../types/service-detail.types";
import { Check } from "lucide-react";

interface ServiceFeatureCardProps {
  feature: ServiceFeatureType;
}

export const ServiceFeatureCard = ({ feature }: ServiceFeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#01A7C2]">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 mb-6">{feature.description}</p>
      <ul className="space-y-3">
        {feature.items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-[#01A7C2] mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
