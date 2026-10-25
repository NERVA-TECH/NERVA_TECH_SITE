
import {BrowserRouter,MemoryRouter,Routes,Route} from "react-router-dom";
import {lazy,Suspense} from "react";
import {Shell} from "@/components/premium/Shell";
import {Seo} from "@/components/premium/Seo";
import Home from "@/pages/premium/Home";
import {GenericPage,Contents,Article,NotFound} from "@/pages/premium/Generic";
import Contact from "@/pages/premium/Contact";
const NervaRH=lazy(()=>import("@/pages/servicos/NervaRH"));
const AutomatizarOperacao=lazy(()=>import("@/pages/AutomatizarOperacao"));
const SolicitarDemonstracao=lazy(()=>import("@/pages/SolicitarDemonstracao"));
export function AppRoutes(){return <><Seo/><Routes><Route element={<Shell/>}><Route index element={<Home/>}/><Route path="/solucoes" element={<GenericPage/>}/><Route path="/solucoes/software-sob-medida" element={<GenericPage/>}/><Route path="/solucoes/automacoes" element={<GenericPage/>}/><Route path="/solucoes/integracoes" element={<GenericPage/>}/><Route path="/solucoes/inteligencia-operacional" element={<GenericPage/>}/><Route path="/como-trabalhamos" element={<GenericPage/>}/><Route path="/sobre" element={<GenericPage/>}/><Route path="/conteudos" element={<Contents/>}/><Route path="/conteudos/:slug" element={<Article/>}/><Route path="/contato" element={<Contact/>}/><Route path="/privacidade" element={<GenericPage/>}/><Route path="/automatizar" element={<Suspense fallback={<p className="n-loading">Carregando...</p>}><AutomatizarOperacao/></Suspense>}/><Route path="/solicitar-demonstracao" element={<Suspense fallback={<p className="n-loading">Carregando...</p>}><SolicitarDemonstracao/></Suspense>}/><Route path="/servicos/nerva-rh" element={<Suspense fallback={<p className="n-loading">Carregando...</p>}><NervaRH/></Suspense>}/><Route path="*" element={<NotFound/>}/></Route></Routes></>}
export default function App(){return typeof window==="undefined"?<MemoryRouter><AppRoutes/></MemoryRouter>:<BrowserRouter><AppRoutes/></BrowserRouter>}
