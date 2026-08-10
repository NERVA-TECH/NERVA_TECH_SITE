export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Entendemos",
    description: "Mapeamos processos, sistemas e gargalos da sua operação.",
  },
  {
    number: "02",
    title: "Desenhamos",
    description: "Definimos como o fluxo ideal deveria funcionar.",
  },
  {
    number: "03",
    title: "Construímos",
    description: "Criamos integrações, automações e software sob medida.",
  },
  {
    number: "04",
    title: "Colocamos para operar",
    description: "Integramos à operação real com acompanhamento dedicado.",
  },
  {
    number: "05",
    title: "Evoluímos",
    description: "Acompanhamos resultados e encontramos novas oportunidades.",
  },
];
