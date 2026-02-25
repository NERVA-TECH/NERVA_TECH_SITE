import React from "react";
import { Database, Cpu, Settings, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Database className="text-[#00f0ff]" size={26} />,
    title: "Coleta de Dados",
    description:
      "Dados operacionais, administrativos e estratégicos centralizados em um único ecossistema.",
  },
  {
    icon: <Settings className="text-[#00f0ff]" size={26} />,
    title: "Automação de Processos",
    description:
      "Fluxos inteligentes eliminam tarefas manuais e reduzem erros operacionais.",
  },
  {
    icon: <Cpu className="text-[#00f0ff]" size={26} />,
    title: "Processamento Inteligente",
    description:
      "Regras de negócio e lógica automatizada transformam dados em ações.",
  },
  {
    icon: <BarChart3 className="text-[#00f0ff]" size={26} />,
    title: "Decisão Estratégica",
    description:
      "Indicadores claros e relatórios acionáveis para gestores e lideranças.",
  },
];

const IntelligenceFlowSection = () => {
  return (
    <section className="relative py-32 bg-[#050508] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Título */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:items-center md:justify-center md:flex">
            Inteligência aplicada ao negócio
          </h2>
          <p className="text-gray-400 max-w-2xl md:mx-auto text-center">
            Dados, automações e lógica inteligente conectam operação, gestão e
            tomada de decisão em um único fluxo contínuo.
          </p>
        </div>

        {/* Fluxo */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex-1 p-8 rounded-xl bg-[#0C0C12] border border-white/5">
                <div className="mb-4 md:items-center md:justify-center md:flex">{step.icon}</div>
                <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-gray-400 text-center">
                  {step.description}
                </p>
              </div>

              {/* Setas entre os blocos */}
              {index < steps.length - 1 && (
                <ArrowRight
                  className="hidden md:block text-[#00f0ff]/40"
                  size={28}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceFlowSection;
