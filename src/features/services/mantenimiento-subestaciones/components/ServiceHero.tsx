"use client";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

export function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#006989] to-[#007090] text-white py-20">
      {/* Image Placeholder - Replace src with your image path */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-[url('/gb_slate_hero_background.jpg')] bg-cover bg-center bg-no-repeat" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-white">{subtitle}</p>
      </div>
    </section>
  );
}
