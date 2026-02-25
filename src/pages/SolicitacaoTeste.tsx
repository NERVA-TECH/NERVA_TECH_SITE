import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Rocket, Building, Users, Mail, Phone, User } from "lucide-react";

const SolicitacaoTeste = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve para agendar seu teste gratuito.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-slide-in-up">
            <Rocket className="w-20 h-20 mx-auto mb-6 text-accent" />
            <h1 className="text-6xl font-bold mb-6">TESTE GRÁTIS DO NERVA RH</h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experimente gratuitamente e veja como podemos transformar a gestão de RH da sua organização
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="neobrutalist-card p-6 bg-primary text-center animate-slide-in-left">
              <Building className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg">Sem Compromisso</h3>
              <p className="text-sm mt-2">Teste sem custos</p>
            </div>

            <div className="neobrutalist-card p-6 bg-accent text-accent-foreground text-center animate-slide-in-up">
              <Users className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg">Suporte Dedicado</h3>
              <p className="text-sm mt-2">Equipe disponível</p>
            </div>

            <div className="neobrutalist-card p-6 bg-secondary text-secondary-foreground text-center animate-slide-in-right">
              <Rocket className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg">Implementação Rápida</h3>
              <p className="text-sm mt-2">Em até 48h</p>
            </div>
          </div>

          <div className="neobrutalist-card p-10 bg-card animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">PREENCHA SEUS DADOS</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <User className="w-5 h-5" />
                    Nome Completo
                  </label>
                  <Input 
                    required
                    placeholder="Seu nome completo"
                    className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <Mail className="w-5 h-5" />
                    Email Profissional
                  </label>
                  <Input 
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <Phone className="w-5 h-5" />
                    Telefone
                  </label>
                  <Input 
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <Building className="w-5 h-5" />
                    Nome da Organização
                  </label>
                  <Input 
                    required
                    placeholder="Nome da empresa/órgão"
                    className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-2">Cargo/Função</label>
                <Input 
                  required
                  placeholder="Seu cargo na organização"
                  className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Número de Colaboradores</label>
                <Input 
                  type="number"
                  required
                  placeholder="Ex: 50"
                  className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Conte-nos sobre suas necessidades</label>
                <Textarea 
                  required
                  placeholder="Quais os principais desafios na gestão de RH da sua organização?"
                  rows={5}
                  className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground neobrutalist-button text-xl py-8"
              >
                {isSubmitting ? "Enviando..." : "SOLICITAR TESTE GRÁTIS"}
                <Rocket className="ml-2 w-6 h-6" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Ao solicitar o teste, você concorda em receber comunicações da NERVA TECH sobre nossos produtos e serviços.
              </p>
            </form>
          </div>

          <div className="mt-12 neobrutalist-card p-8 bg-accent text-accent-foreground text-center animate-slide-in-up">
            <h3 className="text-2xl font-bold mb-3">Dúvidas?</h3>
            <p className="text-lg">
              Entre em contato conosco pelo email contato@nervatech.com ou telefone (00) 00000-0000
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolicitacaoTeste;
