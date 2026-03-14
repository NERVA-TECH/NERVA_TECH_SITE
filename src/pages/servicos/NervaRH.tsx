import { motion } from "framer-motion";
import {
  Users,
  Clock,
  FileText,
  BarChart3,
  ShieldCheck,
  Building2,
  Briefcase,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom"

import videoNervaRH from "../../assets/videos/NERVA_RH.mp4";

const NervaRH = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#050508] text-gray-200 pt-32 pb-24"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HERO */}
        <section className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-bold tracking-widest mx-auto w-fit">
            SOLUÇÃO DE RECURSOS HUMANOS
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight md:items-center md:justify-center md:flex">
            NERVA <span className="text-[#00f0ff]">.RH</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed text-center md:mx-auto">
            O Nerva RH é o núcleo de gestão de pessoas da Nerva Tech.
            Um sistema inteligente para controle de estagiários,
            frequência, documentos, relatórios e automações
            administrativas com foco em eficiência, conformidade
            e clareza operacional.
          </p>
        </section>

        {/* VÍDEO */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Conheça o Nerva RH
            </h2>
            <p className="text-gray-400 text-center md:mx-auto">
              Veja como o sistema organiza e automatiza a gestão de
              recursos humanos de forma prática e segura.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <video
              controls
              className="w-full rounded-xl border border-white/10 shadow-xl"
            >
              <source src={videoNervaRH} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Principais Funcionalidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Gestão de Estagiários e Colaboradores",
                desc: "Cadastro completo, vínculos, setores, funções e histórico individual.",
              },
              {
                icon: Clock,
                title: "Controle de Frequência",
                desc: "Registro diário, faltas, justificativas e acompanhamento mensal.",
              },
              {
                icon: FileText,
                title: "Geração de Termos e Documentos",
                desc: "Contratos, termos de compromisso e declarações automatizadas.",
              },
              {
                icon: BarChart3,
                title: "Relatórios Automatizados",
                desc: "Exportação em PDF, DOCX e planilhas para auditoria e controle.",
              },
              {
                icon: ShieldCheck,
                title: "Segurança e Perfis de Acesso",
                desc: "Níveis hierárquicos e controle de permissões por função.",
              },
              {
                icon: CheckCircle2,
                title: "Controle Administrativo",
                desc: "Organização centralizada de dados e processos do RH.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/5 bg-[#0A0A0F] hover:border-[#00f0ff]/30 transition-all"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PÚBLICO */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Para quem é o Nerva RH?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Building2,
                label: "Órgãos Públicos",
                sub: "Prefeituras e Secretarias",
              },
              {
                icon: Briefcase,
                label: "Empresas Privadas",
                sub: "Gestão de equipes e RH",
              },
              {
                icon: GraduationCap,
                label: "Instituições de Ensino",
                sub: "Controle de estagiários",
              },
              {
                icon: CheckCircle2,
                label: "Consultorias de RH",
                sub: "Padronização de processos",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/5 bg-[#0C0C12] text-center hover:border-[#00f0ff]/40 transition-colors"
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-gray-500 group-hover:text-[#00f0ff]" />
                <h3 className="text-white font-bold">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-white/10 pt-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Leve mais controle e clareza para o seu RH
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            O Nerva RH reduz o trabalho manual, organiza informações
            críticas e oferece uma base sólida para decisões
            estratégicas.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/#demo-section"
              className="px-8 py-4 rounded-lg bg-[#00f0ff] text-black font-bold"
            >
              Solicitar Demonstração
            </a>

            <a
              href="/"
              className="px-8 py-4 rounded-lg border border-white/10 text-gray-300"
            >
              Voltar para Nerva Tech
            </a>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default NervaRH;
