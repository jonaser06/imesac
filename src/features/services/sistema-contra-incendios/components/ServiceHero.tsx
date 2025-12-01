"use client";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

export function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#006989] to-[#007090] text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-[#EAEBED]">{subtitle}</p>
      </div>
    </section>
  );
}
