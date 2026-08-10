import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonospaceLabel } from "@/components/shared/MonospaceLabel";

export default function SolicitarDemonstracao() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    cargo: "",
    numeroColaboradores: "",
    servicoInteresse: "",
    mensagem: "",
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
          _subject: `Solicitação de demonstração — ${formData.empresa}`,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <SectionContainer className="text-center" id="demo-section">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-h2 text-foreground">Solicitação enviada</h1>
          <p className="text-body text-muted-foreground">
            Entraremos em contato em breve.
          </p>
          <a href="/" className="inline-flex px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md">
            Voltar ao início
          </a>
        </div>
      </SectionContainer>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-sans";

  return (
    <SectionContainer id="demo-section">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <MonospaceLabel className="mb-4 block">DEMONSTRAÇÃO</MonospaceLabel>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">
              Automatize sua operação
            </h1>
            <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato para
              entender sua operação e apresentar como podemos ajudar.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-small font-medium text-foreground mb-2">
                  Nome completo *
                </label>
                <input type="text" name="nome" required value={formData.nome} onChange={handleChange} className={inputClass} placeholder="João da Silva" />
              </div>
              <div>
                <label className="block text-small font-medium text-foreground mb-2">
                  Email profissional *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="joao@empresa.com" />
              </div>
              <div>
                <label className="block text-small font-medium text-foreground mb-2">
                  Telefone *
                </label>
                <input type="tel" name="telefone" required value={formData.telefone} onChange={handleChange} className={inputClass} placeholder="(48) 99999-9999" />
              </div>
              <div>
                <label className="block text-small font-medium text-foreground mb-2">
                  Empresa *
                </label>
                <input type="text" name="empresa" required value={formData.empresa} onChange={handleChange} className={inputClass} placeholder="Minha Empresa Ltda" />
              </div>
              <div>
                <label className="block text-small font-medium text-foreground mb-2">
                  Cargo *
                </label>
                <input type="text" name="cargo" required value={formData.cargo} onChange={handleChange} className={inputClass} placeholder="Gestor de Operações" />
              </div>
              <div>
                <label className="block text-small font-medium text-foreground mb-2">
                  Colaboradores *
                </label>
                <select name="numeroColaboradores" required value={formData.numeroColaboradores} onChange={handleChange} className={inputClass}>
                  <option value="">Selecione...</option>
                  <option value="1-10">1 a 10</option>
                  <option value="11-50">11 a 50</option>
                  <option value="51-200">51 a 200</option>
                  <option value="201-500">201 a 500</option>
                  <option value="500+">Mais de 500</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-small font-medium text-foreground mb-2">
                  Solução de interesse *
                </label>
                <select name="servicoInteresse" required value={formData.servicoInteresse} onChange={handleChange} className={inputClass}>
                  <option value="">Selecione uma solução...</option>
                  <option value="Automação de Processos">Automação de Processos</option>
                  <option value="Integração de Sistemas">Integração de Sistemas</option>
                  <option value="Desenvolvimento Sob Medida">Desenvolvimento Sob Medida</option>
                  <option value="Inteligência Operacional">Inteligência Operacional</option>
                  <option value="Nerva RH">Nerva RH</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-small font-medium text-foreground mb-2">
                Conte-nos mais (opcional)
              </label>
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} className={inputClass} placeholder="Descreva os principais desafios da sua operação..." />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Send className="w-4 h-4" />
              Solicitar demonstração
            </button>

            <p className="text-small text-muted-foreground text-center">
              Seus dados serão tratados com total segurança e confidencialidade.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
