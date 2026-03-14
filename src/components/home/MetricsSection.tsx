import React from "react";

const metrics = [
  {
    value: "100%",
    label: "Sistemas em Nuvem (Cloud)",
  },
  {
    value: "+3",
    label: "Segmentos em Atuação",
  },
  {
    value: "99.9%",
    label: "Uptime de Operação",
  },
  {
    value: "24/7",
    label: "Suporte e Monitoramento",
  },
];

const MetricsSection = () => {
  return (
    <section className="relative py-32 bg-[#050508] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa Infraestrutura
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A NERVA TECH desenvolve ecossistemas digitais escaláveis. Da gestão de RH ao 
            e-commerce e engenharia, nossa tecnologia é o alicerce para sua expansão.
          </p>
        </div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-8 rounded-xl bg-[#0A0A0F] border border-white/5 text-center hover:border-[#00f0ff]/30 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-[#00f0ff] mb-2 group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <p className="text-sm text-gray-400 font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;