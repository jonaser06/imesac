import { CheckCircle2 } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
}

export const ServiceHero = ({ title, description }: ServiceHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-[#006989] to-[#007090] text-white py-16">
      {/* Image Placeholder - Replace src with your image path */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-[url('/gb_slate_hero_background.jpg')] bg-cover bg-center bg-no-repeat" />
      </div>
      ≈
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-[#01A7C2] mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
        <p className="text-xl text-white max-w-4xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
