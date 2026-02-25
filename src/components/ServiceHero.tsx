type ServiceHeroProps = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
};

const ServiceHero = ({
  badge,
  title,
  highlight,
  description,
}: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#00f0ff] uppercase tracking-wide mb-6">
          {badge}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-8">
          {highlight}
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
