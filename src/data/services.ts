export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "automate",
    number: "01",
    title: "Automatizamos",
    description: "Processos manuais, tarefas repetitivas, validações, cadastros, aprovações e rotinas operacionais.",
  },
  {
    id: "integrate",
    number: "02",
    title: "Integramos",
    description: "ERP, CRM, e-commerce, APIs, sistemas internos e plataformas externas.",
  },
  {
    id: "build",
    number: "03",
    title: "Construímos",
    description: "Softwares internos, plataformas, APIs e ferramentas quando soluções prontas não atendem.",
  },
  {
    id: "intelligence",
    number: "04",
    title: "Tornamos inteligente",
    description: "Dashboards, alertas, dados e IA aplicada a decisões e processos operacionais.",
  },
];
