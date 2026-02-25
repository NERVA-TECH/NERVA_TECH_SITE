import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
  ''            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
                NERVA<br />RH
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-muted-foreground font-medium">
                Transformar a gestão de pessoas em um processo simples, automatizado e humano.
              </p>
              <Link to="/solicitacao-teste">
                <Button className="bg-primary text-primary-foreground neobrutalist-button text-lg px-8 py-6">
                  Conheça o NERVA RH
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="animate-slide-in-right">
              <div className="neobrutalist-card p-12 bg-card">
                <div className="flex items-center justify-center mb-6">
                  <Brain className="w-32 h-32 text-accent" />
                </div>
                <p className="text-center text-xl font-bold">
                  Conectando sua equipe.<br />
                  Automatizando seus processos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">O QUE FAZEMOS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="neobrutalist-card p-8 bg-card animate-slide-in-up">
              <Users className="w-16 h-16 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Gestão de Pessoas</h3>
              <p className="text-muted-foreground">
                Controle completo de colaboradores e estagiários com cadastro inteligente e automatizado.
              </p>
            </div>

            <div className="neobrutalist-card p-8 bg-card animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
              <FileText className="w-16 h-16 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-4">Relatórios Automáticos</h3>
              <p className="text-muted-foreground">
                Geração automática de documentos oficiais em DOCX e PDF com um clique.
              </p>
            </div>

            <div className="neobrutalist-card p-8 bg-card animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              <Brain className="w-16 h-16 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">Inteligência Artificial</h3>
              <p className="text-muted-foreground">
                Agentes de IA que identificam inconsistências e automatizam processos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="neobrutalist-card p-12 bg-primary inline-block">
            <h2 className="text-4xl font-bold mb-6">Pronto para transformar seu RH?</h2>
            <Link to="/solicitacao-teste">
              <Button className="bg-foreground text-background neobrutalist-button text-lg px-8 py-6">
                Solicitar Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
