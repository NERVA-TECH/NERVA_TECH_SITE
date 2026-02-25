import { services } from "@/data/services";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Soluções em Tecnologia
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Desenvolvemos sistemas e soluções completas para empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() =>
                  service.hasPage && service.route
                    ? navigate(service.route)
                    : null
                }
                className={`p-6 rounded-xl border border-white/5 bg-[#0C0C12]
                transition-all hover:-translate-y-1
                ${
                  service.hasPage
                    ? "cursor-pointer hover:border-[#00f0ff]/50"
                    : "opacity-90"
                }`}
              >
                <Icon className="w-8 h-8 text-[#00f0ff] mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {service.description}
                </p>

                {service.hasPage && (
                  <span className="text-xs text-[#00f0ff] mt-3 inline-block">
                    Ver detalhes →
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
