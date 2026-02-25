export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  status: "ativo" | "em-desenvolvimento";
  ctaLabel: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "nerva-rh",
    title: "NERVA RH",
    subtitle: "Gestão inteligente de recursos humanos",
    description:
      "Sistema completo para gestão de estagiários, controle de frequência, geração de termos, relatórios e automações administrativas.",
    features: [
      "Gestão de Estagiários",
      "Controle de Frequência",
      "Geração Automática de Termos",
      "Relatórios Administrativos",
      "Integração com Planilhas",
      "Automação de Processos",
    ],
    status: "ativo",
    ctaLabel: "Solicitar Demonstração",
  },
];
