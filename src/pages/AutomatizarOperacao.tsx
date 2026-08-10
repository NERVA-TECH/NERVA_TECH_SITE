import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonospaceLabel } from "@/components/shared/MonospaceLabel";

const benefits = [
  "Processos manuais eliminados",
  "Sistemas conectados em tempo real",
  "Visibilidade total da operação",
  "Redução de erros e retrabalho",
  "Decisões baseadas em dados",
];

export default function AutomatizarOperacao() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    desafio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const FORMSPREE_ID = "xaewejjd";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Nova solicitação de automação — ${formData.empresa}`,
          origem: "automatizar-operacao",
          destinatario: "admin@nervatechapp.com",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
      }
    } catch {
      alert("Erro de conexão. Verifique sua internet.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <SectionContainer className="text-center min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl text-foreground">Recebemos sua solicitação.</h1>
          <p className="font-sans text-base text-muted-foreground">
            Nossa equipe entrará em contato em até 24 horas para entender
            sua operação e propor o melhor caminho.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-7 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Voltar ao início
          </a>
        </div>
      </SectionContainer>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-colors font-sans text-sm";

  return (
    <>
      {/* Hero */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: messaging */}
          <ScrollReveal>
            <div className="space-y-8 lg:sticky lg:top-32">
              <MonospaceLabel className="text-primary">Primeiro passo</MonospaceLabel>

              <h1 className="text-4xl md:text-6xl text-foreground leading-[1.05]">
                Automatize sua operação.
              </h1>

              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                Conte-nos sobre o seu principal desafio operacional.
                Nós analisamos e propomos um caminho — sem compromisso.
              </p>

              {/* Benefits */}
              <div className="space-y-4 pt-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-sans text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 md:p-10 space-y-5 shadow-sm"
            >
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Email profissional
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="voce@empresa.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Qual seu principal desafio operacional?
                </label>
                <textarea
                  name="desafio"
                  value={formData.desafio}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass}
                  placeholder="Ex: Nosso ERP não conversa com o e-commerce, temos muito retrabalho no financeiro..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-7 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Send className="w-3.5 h-3.5" />
                Enviar solicitação
              </button>

              <p className="text-xs text-muted-foreground/60 text-center font-sans">
                Sem compromisso. Resposta em até 24h.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </SectionContainer>
    </>
  );
}
