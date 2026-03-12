import {
  Code,
  Server,
  Shield,
  Camera,
  Headphones,
  Globe,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";

export const services = [
  {
    id: "software",
    title: "Desenvolvimento de Software Sob Encomenda",
    description: "Sistemas personalizados conforme a necessidade do negócio.",
    icon: Code,
  },
  {
    id: "nerva-rh",
    title: "NERVA RH",
    description: "Sistema inteligente para gestão de recursos humanos.",
    icon: Users,
    hasPage: true,
    route: "/servicos/nerva-rh",
},
  {
    id: "consultoria",
    title: "Consultoria em Tecnologia da Informação",
    description: "Planejamento e otimização de ambientes tecnológicos.",
    icon: Server,
  },
  {
    id: "suporte",
    title: "Suporte Técnico e Manutenção",
    description: "Manutenção preventiva e corretiva de sistemas.",
    icon: Headphones,
  },
  {
    id: "hospedagem",
    title: "Hospedagem e Tratamento de Dados",
    description: "Serviços de aplicações e processamento de dados.",
    icon: Globe,
  },
  {
    id: "cftv",
    title: "Instalação de CFTV",
    description: "Monitoramento e segurança eletrônica.",
    icon: Camera,
  },
  {
    id: "treinamento",
    title: "Treinamento em Informática",
    description: "Capacitação profissional em tecnologia.",
    icon: GraduationCap,
  },
  {
    id: "aluguel",
    title: "Lotação de Equipamentos",
    description: "Locação de equipamentos corporativos.",
    icon: Shield,
  },
];
