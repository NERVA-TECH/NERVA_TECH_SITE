import { useParams, Navigate } from "react-router-dom";
import { serviceDetails } from "@/data/serviceDetails";
import ServiceHero from "@/components/ServiceHero";


const ServiceTemplate = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = serviceDetails.find(
    (s) => s.slug === slug
  );

  if (!service) {
    return <Navigate to="/notfound" replace />;
  }

  return (
    <main className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <ServiceHero
        badge="Sistema de Gestão & Automação"
        title="Gestão de Pessoas"
        highlight="Simples. Automatizada. Humana."
        description="O NERVA RH une tecnologia e eficiência operacional para eliminar retrabalho e garantir transparência na administração de colaboradores e estagiários."
        />

        {/* HEADER */}
        <header className="mb-16">
          <span className="text-[#00f0ff] uppercase tracking-wide text-sm">
            Serviço
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            {service.title}
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl">
            {service.subtitle}
          </p>
        </header>

        {/* DESCRIÇÃO */}
        <section className="mb-16">
          <p className="text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Funcionalidades
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="p-5 rounded-xl bg-[#0C0C12] border border-white/5"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* STATUS + CTA */}
        <footer className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <span
            className={`px-4 py-2 rounded-full text-sm ${
              service.status === "ativo"
                ? "bg-green-500/10 text-green-400"
                : "bg-yellow-500/10 text-yellow-400"
            }`}
          >
            {service.status === "ativo"
              ? "Sistema Ativo"
              : "Em Desenvolvimento"}
          </span>

          <a
            href="/solicitar-demonstracao"
            className="px-6 py-3 rounded-lg bg-[#00f0ff] text-black font-semibold"
          >
            {service.ctaLabel}
          </a>
        </footer>
      </div>
    </main>
  );
};

export default ServiceTemplate;
