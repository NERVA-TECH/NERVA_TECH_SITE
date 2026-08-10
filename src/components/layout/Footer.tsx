import logoNerva from "@/assets/logo-nerva-transparente.png";

const columns = [
  {
    title: "Soluções",
    links: [
      { label: "Automação de Processos", href: "/#servicos" },
      { label: "Integração de Sistemas", href: "/#servicos" },
      { label: "Desenvolvimento Sob Medida", href: "/#servicos" },
      { label: "Inteligência Operacional", href: "/#servicos" },
      { label: "Nerva RH", href: "/servicos/nerva-rh" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como trabalhamos", href: "/#processo" },
      { label: "Cases", href: "/#cases" },
      { label: "Tecnologia", href: "/#tecnologia" },
      { label: "Solicitar demonstração", href: "/automatizar" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "admin@nervatechapp.com", href: "mailto:admin@nervatechapp.com" },
      { label: "LinkedIn →", href: "https://www.linkedin.com/company/111429920/admin/dashboard/" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-20 lg:py-24">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logoNerva} alt="Nerva Tech" className="h-7 w-auto" />
              <span className="font-sans font-semibold text-foreground text-lg tracking-tight">
                Nerva
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Automação operacional, integração de sistemas e software aplicado
              à eficiência de operações.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-lg italic text-muted-foreground">
            O sistema nervoso da sua operação.
          </p>
          <p className="font-mono text-xs text-muted-foreground tracking-wider">
            © {currentYear} Nerva Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
