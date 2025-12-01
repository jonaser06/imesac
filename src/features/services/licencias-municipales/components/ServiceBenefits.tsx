import { Star } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

export const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-10 h-10 text-[#01A7C2] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Beneficios de elegir IMESAC
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos para garantizar el cumplimiento normativo de tu empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#EAEBED] to-[#A3BAC3] rounded-lg p-6 border-l-4 border-[#01A7C2] hover:shadow-md transition-shadow"
            >
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
