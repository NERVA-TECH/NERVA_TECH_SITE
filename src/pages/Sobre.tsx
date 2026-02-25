import Navigation from "@/components/Navigation";
import { Target, Lightbulb, Heart } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold mb-8 animate-slide-in-left">SOBRE O NERVA RH</h1>
          
          <div className="space-y-8 animate-slide-in-up">
            <div className="neobrutalist-card p-8 bg-card">
              <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O NERVA RH nasceu da necessidade real de simplificar processos manuais no setor público. 
                Desenvolvido inicialmente para o projeto SEJUSC, evoluímos para uma plataforma flexível 
                e inteligente que atende tanto órgãos públicos quanto empresas privadas.
              </p>
            </div>

            <div className="neobrutalist-card p-8 bg-primary">
              <div className="flex items-start gap-4">
                <Target className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Nosso Propósito</h3>
                  <p className="text-lg leading-relaxed">
                    "Transformar a gestão de pessoas em um processo simples, automatizado e humano."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="neobrutalist-card p-8 bg-accent text-accent-foreground">
                <Lightbulb className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Inovação</h3>
                <p className="leading-relaxed">
                  Utilizamos inteligência artificial para automatizar processos e antecipar necessidades administrativas.
                </p>
              </div>

              <div className="neobrutalist-card p-8 bg-secondary text-secondary-foreground">
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Humanização</h3>
                <p className="leading-relaxed">
                  Tecnologia que reduz burocracia para que equipes possam focar no que realmente importa: as pessoas.
                </p>
              </div>
            </div>

            <div className="neobrutalist-card p-8 bg-card">
              <h2 className="text-3xl font-bold mb-4">Público-Alvo</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Órgãos públicos (secretarias, prefeituras, fundações)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Empresas privadas com equipe administrativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Instituições educacionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Consultorias de RH</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
