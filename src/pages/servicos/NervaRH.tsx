import { Users, Clock, FileText, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonospaceLabel } from "@/components/shared/MonospaceLabel";
import videoNervaRH from "@/assets/videos/NERVA_RH.mp4";

const features = [
  { icon: Users, title: "Gestão de Estagiários e Colaboradores", desc: "Cadastro completo, vínculos, setores, funções e histórico individual." },
  { icon: Clock, title: "Controle de Frequência", desc: "Registro diário, faltas, justificativas e acompanhamento mensal." },
  { icon: FileText, title: "Geração de Termos e Documentos", desc: "Contratos, termos de compromisso e declarações automatizadas." },
  { icon: BarChart3, title: "Relatórios Automatizados", desc: "Exportação em PDF, DOCX e planilhas para auditoria e controle." },
  { icon: ShieldCheck, title: "Segurança e Perfis de Acesso", desc: "Níveis hierárquicos e controle de permissões por função." },
  { icon: CheckCircle2, title: "Controle Administrativo", desc: "Organização centralizada de dados e processos do RH." },
];

export default function NervaRH() {
  return (
    <>
      {/* Hero */}
      <SectionContainer>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <MonospaceLabel className="mb-4 block">SOLUÇÃO DE RECURSOS HUMANOS</MonospaceLabel>
            <h1 className="text-h1 md:text-display text-foreground mb-6">
              Nerva <span className="text-primary">.RH</span>
            </h1>
            <p className="text-body text-muted-foreground">
              O núcleo de gestão de pessoas da Nerva Tech. Um sistema inteligente
              para controle de estagiários, frequência, documentos, relatórios e
              automações administrativas.
            </p>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Vídeo */}
      <SectionContainer className="py-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <video controls className="w-full rounded-lg border border-border">
              <source src={videoNervaRH} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Features */}
      <SectionContainer>
        <ScrollReveal>
          <h2 className="text-h2 text-foreground text-center mb-12">
            Principais Funcionalidades
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="p-6 border border-border rounded-lg hover:border-primary transition-colors duration-250 h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-small text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="text-center">
        <ScrollReveal>
          <h2 className="text-h2 text-foreground mb-4">
            Leve mais controle para o seu RH
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
            O Nerva RH reduz o trabalho manual, organiza informações críticas e
            oferece uma base sólida para decisões estratégicas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/solicitar-demonstracao"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:-translate-y-0.5 transition-transform"
            >
              Solicitar demonstração
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-muted-foreground font-medium rounded-md hover:text-foreground hover:border-foreground transition-colors"
            >
              Voltar para Nerva Tech
            </a>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </>
  );
}
