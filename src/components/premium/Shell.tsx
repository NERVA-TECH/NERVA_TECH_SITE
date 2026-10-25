
import {useEffect,useState} from "react";
import {Link,NavLink,Outlet,useLocation} from "react-router-dom";
import {Menu,X,ArrowUpRight} from "lucide-react";
import {Brand} from "./Brand";
import {navigation,solutions} from "@/design/siteData";
export function Shell(){
 const [opened,setOpened]=useState(false);const location=useLocation();
 useEffect(()=>{setOpened(false);window.scrollTo({top:0,behavior:"instant"})},[location.pathname]);
 return <div className="n-app"><a className="n-skip" href="#main">Pular para o conteúdo</a>
 <header className="n-header"><div className="n-container n-nav"><Link to="/" aria-label="Nerva Tech — início"><Brand/></Link><nav className={opened?"n-navlinks open":"n-navlinks"} aria-label="Navegação principal">{navigation.map(n=><NavLink key={n.href} to={n.href} className={({isActive})=>isActive?"active":""}>{n.label}</NavLink>)}<Link to="/contato" className="n-navmobile">Contato</Link></nav><div className="n-navright"><Link to="/contato" className="n-button n-button-small">Fale com um especialista <ArrowUpRight size={14}/></Link><button className="n-menu" aria-label={opened?"Fechar menu":"Abrir menu"} aria-expanded={opened} onClick={()=>setOpened(!opened)}>{opened?<X/>:<Menu/>}</button></div></div></header>
 <main id="main"><Outlet/></main>
 <footer className="n-footer"><div className="n-container"><div className="n-footer-grid"><div><Brand/><p>Tecnologia para operações reais. Software sob medida, automações e integrações para a sua empresa.</p></div><div><strong>Soluções</strong>{solutions.slice(0,3).map(s=><Link key={s.href} to={s.href}>{s.title}</Link>)}</div><div><strong>Empresa</strong><Link to="/sobre">Sobre a Nerva</Link><Link to="/como-trabalhamos">Como trabalhamos</Link><Link to="/conteudos">Conteúdos</Link></div><div><strong>Contato</strong><Link to="/contato">Fale com a Nerva</Link><a href="mailto:admin@nervatechapp.com">admin@nervatechapp.com</a><Link to="/politica-de-privacidade">Privacidade</Link></div></div><div className="n-footer-bottom"><span>© {new Date().getFullYear()} Nerva Tech. Todos os direitos reservados.</span><span>Software • Integrações • Automações</span></div></div></footer></div>
}
