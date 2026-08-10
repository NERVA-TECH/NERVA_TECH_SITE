export interface CaseStudy {
  id: string;
  industry: string;
  before: { title: string; description: string };
  nerva: { title: string; description: string };
  after: { title: string; description: string };
}

export const cases: CaseStudy[] = [
  {
    id: "ecommerce-erp",
    industry: "E-commerce / Varejo",
    before: {
      title: "Cadastro manual",
      description: "Equipe recebia pedidos e cadastrava manualmente no ERP, gerando atrasos e erros.",
    },
    nerva: {
      title: "Integração automática",
      description: "Integração entre canal de vendas, ERP e logística com validação em tempo real.",
    },
    after: {
      title: "Operação contínua",
      description: "Processamento automático, redução de erros e acompanhamento centralizado.",
    },
  },
  {
    id: "rh-publico",
    industry: "Gestão Pública / RH",
    before: {
      title: "Controle em planilhas",
      description: "Frequência, documentos e termos de estagiários gerenciados em planilhas dispersas.",
    },
    nerva: {
      title: "Sistema centralizado",
      description: "Plataforma única para gestão de pessoas com geração automática de documentos.",
    },
    after: {
      title: "Conformidade garantida",
      description: "Relatórios automatizados, controle de prazos e zero retrabalho documental.",
    },
  },
];
