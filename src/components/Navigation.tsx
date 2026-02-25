import { NavLink } from "./NavLink";
import { MessageCircle } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="bg-primary border-4 border-border p-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold uppercase tracking-tight">
              NERVA TECH
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/sobre"
              className="font-bold hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Sobre
            </NavLink>
            <NavLink
              to="/projetos"
              className="font-bold hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Projetos
            </NavLink>
            <NavLink
              to="/"
              className="font-bold hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Início
            </NavLink>

            <NavLink
              to="/projetos"
              className="font-bold hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Soluções
            </NavLink>

            <NavLink
              to="/sobre"
              className="font-bold hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Empresa
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
