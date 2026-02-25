import { Layers, ShieldCheck, Gauge, Cloud } from "lucide-react";

export const ArchitectureSection = () => {
  const items = [
    {
      icon: Layers,
      title: "Arquitetura Modular",
      desc: "Sistemas desacoplados, prontos para evolução contínua.",
    },
    {
      icon: Gauge,
      title: "Alta Performance",
      desc: "Projetado para grandes volumes e operações críticas.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança por Design",
      desc: "Proteção desde a base até a camada de negócio.",
    },
    {
      icon: Cloud,
      title: "Escalável na Nuvem",
      desc: "Infraestrutura preparada para crescer com o negócio.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-32 ">
      <h2 className="text-4xl font-bold mb-4 text-white md:items-center md:justify-center md:flex">
        Arquitetura pensada para escala
      </h2>
      <p className="text-gray-400 max-w-2xl mb-16 md:mx-auto text-center">
        Cada solução da NERVA é construída com foco em crescimento,
        performance e segurança.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="p-6 rounded-2xl bg-[#0C0C12] border border-white/5 hover:border-[#00f0ff]/30 transition"
          >
            <Icon className="text-[#00f0ff] mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
