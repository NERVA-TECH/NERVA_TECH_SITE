import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SolicitarDemonstracao from "./pages/SolicitarDemonstracao";
import AutomatizarOperacao from "./pages/AutomatizarOperacao";
import NervaRH from "./pages/servicos/NervaRH";

function NotFound() {
  return (
    <div className="container mx-auto px-6 py-section text-center">
      <h1 className="text-h1 text-foreground mb-4">Página não encontrada</h1>
      <p className="text-body text-muted-foreground mb-8">
        A página que você procura não existe.
      </p>
      <a
        href="/"
        className="inline-flex px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md"
      >
        Voltar para o início
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/automatizar" element={<AutomatizarOperacao />} />
          <Route path="/solicitar-demonstracao" element={<SolicitarDemonstracao />} />
          <Route path="/servicos/nerva-rh" element={<NervaRH />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
