import { CheckCircle2 } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
}

export const ServiceHero = ({ title, description }: ServiceHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-[#006989] to-[#007090] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-[#01A7C2] mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
        <p className="text-xl text-[#A3BAC3] max-w-4xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
