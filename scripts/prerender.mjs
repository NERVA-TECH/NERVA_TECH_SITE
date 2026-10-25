import {createServer} from "vite";
import {readFile,mkdir,writeFile} from "node:fs/promises";
import {join,dirname} from "node:path";
const base="https://nervatechapp.com";
const content=await readFile("src/design/siteData.ts","utf8");
const app=await readFile("src/App.tsx","utf8");
const paths=["/","/solucoes","/solucoes/software-sob-medida","/solucoes/automacoes","/solucoes/integracoes","/solucoes/inteligencia-operacional","/como-trabalhamos","/sobre","/contato","/conteudos","/privacidade",...Array.from(content.matchAll(/"slug": "([^"]+)"/g),m=>"/conteudos/"+m[1])];
const source=await readFile("dist/index.html","utf8");
const vite=await createServer({server:{middlewareMode:true},appType:"custom",logLevel:"error"});
try {
 const {render}=await vite.ssrLoadModule("/src/entry-server.tsx");
 const {seoInfo}=await vite.ssrLoadModule("/src/components/premium/Seo.tsx");
 const {pages,articles}=await vite.ssrLoadModule("/src/design/siteData.ts");
 const isPreview=process.env.VERCEL_ENV==="preview"||process.env.VERCEL_ENV==="development";
 const esc=v=>String(v).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
 for(const path of paths){
  const {title,description,canonical,article}=seoInfo(path);
  const service=path.startsWith("/solucoes/") ? pages[path]:null;
  const breadcrumb=[{"@type":"ListItem",position:1,name:"Início",item:base+"/"}];
  if(path!=="/")breadcrumb.push({"@type":"ListItem",position:2,name:path.startsWith("/conteudos/")?"Conteúdos":title.replace(" | Nerva Tech",""),item:canonical});
  const schemas=[{"@context":"https://schema.org","@type":"Organization",name:"Nerva Tech",url:base,email:"admin@nervatechapp.com",sameAs:["https://www.linkedin.com/in/nervatech"]},{"@context":"https://schema.org","@type":"WebSite",name:"Nerva Tech",url:base}];
  if(path!=="/")schemas.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:breadcrumb});
  if(service)schemas.push({"@context":"https://schema.org","@type":"Service",name:service.title+" "+(service.emphasis||""),description:service.intro,provider:{"@type":"Organization",name:"Nerva Tech",url:base}});
  // Editorial dates and authors intentionally omitted until independently verified.
  if(article)schemas.push({"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.summary,mainEntityOfPage:canonical,publisher:{"@type":"Organization",name:"Nerva Tech"}});
  const head='<title>'+esc(title)+'</title><meta name="description" content="'+esc(description)+'"><link rel="canonical" href="'+esc(canonical)+'"><meta name="robots" content="'+(isPreview?"noindex,nofollow":"index,follow")+'"><meta property="og:type" content="'+(article?"article":"website")+'"><meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(canonical)+'"><meta name="twitter:card" content="summary">'+schemas.map(s=>'<script type="application/ld+json">'+JSON.stringify(s).replace(/</g,"\\u003c")+'</script>').join("");
  let html=source.replace(/<title>[\s\S]*?<\/title>/,"").replace(/<meta name="description"[^>]*>/,"").replace("</head>",head+"</head>").replace('<div id="root"></div>','<div id="root">'+render(path)+'</div>');
  const filename=path==="/"?join("dist","index.html"):join("dist",path.slice(1),"index.html");
  await mkdir(dirname(filename),{recursive:true});await writeFile(filename,html);
 }
 const notfound=source.replace(/<title>[\s\S]*?<\/title>/,"").replace("</head>",'<title>Página não encontrada | Nerva Tech</title><meta name="robots" content="noindex"></head>');
 await writeFile("dist/404.html",notfound);
 const sitemap='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>'<url><loc>'+base+(p==="/"?"/":p)+'</loc></url>').join("")+'</urlset>';
 await writeFile("dist/sitemap.xml",sitemap);
 await writeFile("dist/robots.txt",isPreview?"User-agent: *\nDisallow: /\n":"User-agent: *\nAllow: /\nSitemap: "+base+"/sitemap.xml\n");
 console.log("SSG generated",paths.length,"indexable pages");
} finally {await vite.close()}
