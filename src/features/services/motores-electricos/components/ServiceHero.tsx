interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

export function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#006989] to-[#007090] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[#A3BAC3] font-light">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
