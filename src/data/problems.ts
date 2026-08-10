export interface Problem {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    id: "manual",
    label: "01",
    title: "Processos manuais",
    description: "Sua equipe ainda copia informações de uma ferramenta para outra.",
  },
  {
    id: "disconnected",
    label: "02",
    title: "Sistemas desconectados",
    description: "ERP, CRM, e-commerce e sistemas internos não conversam.",
  },
  {
    id: "spreadsheets",
    label: "03",
    title: "Planilhas críticas",
    description: "Processos importantes dependem de arquivos que ninguém controla.",
  },
  {
    id: "rework",
    label: "04",
    title: "Retrabalho",
    description: "Uma mesma informação precisa ser cadastrada mais de uma vez.",
  },
  {
    id: "visibility",
    label: "05",
    title: "Falta de visibilidade",
    description: "Os gestores descobrem problemas tarde demais.",
  },
];
