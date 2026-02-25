import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold mb-16 text-center animate-slide-in-up">ENTRE EM CONTATO</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="neobrutalist-card p-8 bg-primary">
                <h2 className="text-3xl font-bold mb-6">FALE CONOSCO</h2>
                <p className="text-lg mb-8">
                  Estamos prontos para transformar a gestão de pessoas da sua organização.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-background p-3 border-4 border-border">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p>contato@nervatech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-background p-3 border-4 border-border">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Telefone</h3>
                      <p>(00) 00000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-background p-3 border-4 border-border">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Localização</h3>
                      <p>Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neobrutalist-card p-8 bg-accent text-accent-foreground">
                <h3 className="text-2xl font-bold mb-4">Horário de Atendimento</h3>
                <p className="text-lg">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado e Domingo: Fechado
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="neobrutalist-card p-8 bg-card">
                <h2 className="text-3xl font-bold mb-6">ENVIE UMA MENSAGEM</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-bold mb-2">Nome</label>
                    <Input 
                      required
                      placeholder="Seu nome completo"
                      className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">Email</label>
                    <Input 
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">Telefone</label>
                    <Input 
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">Mensagem</label>
                    <Textarea 
                      required
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      className="border-4 border-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground neobrutalist-button text-lg py-6"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    <Send className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
