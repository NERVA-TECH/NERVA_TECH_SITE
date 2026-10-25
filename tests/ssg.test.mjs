import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
const routes=["/","/solucoes","/solucoes/software-sob-medida","/solucoes/automacoes","/solucoes/integracoes","/solucoes/inteligencia-operacional","/como-trabalhamos","/sobre","/contato","/conteudos","/privacidade"];
test("Every institutional route has pre-rendered HTML",()=>{for(const route of routes){const file="dist"+(route==="/"?"/index.html":route+"/index.html");assert.ok(existsSync(file),file);const html=readFileSync(file,"utf8");assert.match(html,/<h1[\s>]/);assert.match(html,/rel="canonical"/);assert.match(html,/property="og:title"/);assert.match(html,/application\/ld\+json/);assert.ok(html.indexOf('<div id="root">')<html.indexOf("<h1"));}});
test("Sitemap matches canonical routes",()=>{const xml=readFileSync("dist/sitemap.xml","utf8");for(const route of routes)assert.ok(xml.includes("https://nervatechapp.com"+(route==="/"?"/":route)));assert.ok(!xml.includes("vercel.app"));});
test("404 output exists",()=>assert.ok(existsSync("dist/404.html")));
test("WhatsApp and LinkedIn appear in SSR",()=>{const x=readFileSync("dist/contato/index.html","utf8");for(const token of ["5592984836620","5592994799615","linkedin.com/in/nervatech"])assert.ok(x.includes(token));});
