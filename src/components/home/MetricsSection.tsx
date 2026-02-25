import React from "react";

const metrics = [
  {
    value: "+60%",
    label: "Redução de retrabalho",
  },
  {
    value: "3x",
    label: "Mais eficiência operacional",
  },
  {
    value: "99%",
    label: "Confiabilidade dos dados",
  },
  {
    value: "24/7",
    label: "Automação contínua",
  },
];

const MetricsSection = () => {
  return (
    <section className="relative py-32 bg-[#050508] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:items-center md:justify-center md:flex">
            Resultados mensuráveis
          </h2>
          <p className="text-gray-400 max-w-2xl md:mx-auto text-center">
            Tecnologia aplicada de forma estratégica gera impacto real,
            mensurável e sustentável na operação.
          </p>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-8 rounded-xl bg-[#0C0C12] border border-white/5 text-center"
            >
              <div className="text-4xl font-bold text-[#00f0ff] mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-gray-400">
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
