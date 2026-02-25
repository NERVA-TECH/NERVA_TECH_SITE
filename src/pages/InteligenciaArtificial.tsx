import Navigation from "@/components/Navigation";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

const InteligenciaArtificial = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-in-up">
            <Brain className="w-24 h-24 mx-auto mb-6 text-accent" />
            <h1 className="text-6xl font-bold mb-6">INTELIGÊNCIA ARTIFICIAL</h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transformando o RH com agentes inteligentes que aprendem e automatizam
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="neobrutalist-card p-8 bg-primary animate-slide-in-left">
              <Zap className="w-12 h-12 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Automação Inteligente</h2>
              <p className="text-lg">
                Nossos agentes de IA identificam padrões, detectam anomalias e executam tarefas 
                repetitivas automaticamente, liberando sua equipe para atividades estratégicas.
              </p>
            </div>

            <div className="neobrutalist-card p-8 bg-accent text-accent-foreground animate-slide-in-right">
              <Target className="w-12 h-12 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Decisões Baseadas em Dados</h2>
              <p className="text-lg">
                Análise preditiva e insights em tempo real para otimizar processos de RH e 
                antecipar necessidades da sua organização.
              </p>
            </div>
          </div>

          <div className="neobrutalist-card p-12 bg-card mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">NOSSOS AGENTES DE IA</h2>
            
            <div className="space-y-6">
              <div className="border-4 border-border p-6 bg-muted">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 border-4 border-border">
                    <Brain className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Agente de Frequência NERVA</h3>
                    <p className="text-lg text-muted-foreground">
                      Monitora registros de ponto, identifica inconsistências automaticamente e 
                      sugere correções inteligentes. Aprende com padrões históricos para detectar 
                      anomalias antes que se tornem problemas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-4 border-border p-6 bg-muted">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 border-4 border-border">
                    <TrendingUp className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Agente de Documentos</h3>
                    <p className="text-lg text-muted-foreground">
                      Cria, preenche e organiza relatórios de forma autônoma. Gera documentos 
                      oficiais com base em templates inteligentes que se adaptam ao contexto e 
                      necessidades específicas de cada departamento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-4 border-border p-6 bg-muted">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 border-4 border-border">
                    <Zap className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Agente de Comunicação</h3>
                    <p className="text-lg text-muted-foreground">
                      Envia lembretes personalizados, notificações importantes e atualizações 
                      relevantes para gestores e colaboradores no momento certo, otimizando a 
                      comunicação interna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="neobrutalist-card p-8 bg-secondary text-secondary-foreground text-center animate-slide-in-up">
            <h2 className="text-3xl font-bold mb-4">
              O Futuro do RH é Inteligente
            </h2>
            <p className="text-lg">
              Estamos constantemente desenvolvendo novos agentes de IA para tornar 
              a gestão de pessoas cada vez mais eficiente e humana.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteligenciaArtificial;
