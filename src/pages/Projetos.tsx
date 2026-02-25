import Navigation from "@/components/Navigation";
import { CheckCircle, Clock, Sparkles } from "lucide-react";

const Projetos = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold mb-8 animate-slide-in-left">NOSSOS MÓDULOS</h1>
          <p className="text-xl text-muted-foreground mb-16 animate-fade-in">
            Sistema modular e escalável dividido em três níveis de operação
          </p>

          <div className="space-y-12">
            {/* Nível 1 */}
            <div className="animate-slide-in-up">
              <div className="neobrutalist-card p-8 bg-primary">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="w-12 h-12" />
                  <h2 className="text-4xl font-bold">NÍVEL 1 – NÚCLEO OPERACIONAL</h2>
                </div>
                <p className="text-lg mb-6">Funcionalidades essenciais que compõem o coração do NERVA RH</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Autenticação e Perfis</h3>
                    <p className="text-muted-foreground">
                      Sistema de login seguro com diferentes níveis: administrador, gestor de setor e colaborador/estagiário.
                    </p>
                  </div>

                  <div className="bg-background p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Cadastro Completo</h3>
                    <p className="text-muted-foreground">
                      CRUD completo de colaboradores e estagiários com campos personalizados.
                    </p>
                  </div>

                  <div className="bg-background p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Controle de Frequência</h3>
                    <p className="text-muted-foreground">
                      Registro diário, semanal e mensal com alertas automáticos de atraso ou ausência.
                    </p>
                  </div>

                  <div className="bg-background p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Relatórios Automáticos</h3>
                    <p className="text-muted-foreground">
                      Geração de relatórios de frequência e documentos oficiais em DOCX/PDF.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nível 2 */}
            <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="neobrutalist-card p-8 bg-accent text-accent-foreground">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-12 h-12" />
                  <h2 className="text-4xl font-bold">NÍVEL 2 – INTELIGÊNCIA E AUTOMAÇÃO</h2>
                </div>
                <p className="text-lg mb-6">Recursos inteligentes que agregam eficiência e análise ao sistema</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Monitoramento de Prazos</h3>
                    <p className="text-muted-foreground">
                      Alertas automáticos de relatórios pendentes e prazos vencendo.
                    </p>
                  </div>

                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Dashboard Analítico</h3>
                    <p className="text-muted-foreground">
                      Gráficos de presença, desempenho e produtividade setorial.
                    </p>
                  </div>

                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Notificações Internas</h3>
                    <p className="text-muted-foreground">
                      Comunicação entre RH, gestores e colaboradores sobre atividades.
                    </p>
                  </div>

                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Documentos Padrão</h3>
                    <p className="text-muted-foreground">
                      Contratos e declarações com preenchimento automático de dados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nível 3 */}
            <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="neobrutalist-card p-8 bg-secondary text-secondary-foreground">
                <div className="flex items-center gap-4 mb-6">
                  <Sparkles className="w-12 h-12" />
                  <h2 className="text-4xl font-bold">NÍVEL 3 – INTELIGÊNCIA ARTIFICIAL</h2>
                </div>
                <p className="text-lg mb-6">Integração futura com agentes de IA da NERVA TECH</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Agente de Frequência</h3>
                    <p className="text-muted-foreground">
                      Identifica inconsistências e sugere correções automáticas.
                    </p>
                  </div>

                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Agente de Documentos</h3>
                    <p className="text-muted-foreground">
                      Cria e organiza relatórios de forma autônoma.
                    </p>
                  </div>

                  <div className="bg-background text-foreground p-6 border-4 border-border">
                    <h3 className="text-xl font-bold mb-3">Agente de Comunicação</h3>
                    <p className="text-muted-foreground">
                      Envia lembretes automáticos a gestores e servidores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
