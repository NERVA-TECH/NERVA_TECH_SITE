import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
const app=readFileSync("src/App.tsx","utf8");
for(const path of ["/solucoes","/solucoes/software-sob-medida","/solucoes/automacoes","/solucoes/integracoes","/como-trabalhamos","/sobre","/conteudos","/contato","/politica-de-privacidade","/servicos/nerva-rh","/automatizar","/solicitar-demonstracao"]){
 test("Route declared: "+path,()=>assert.ok(app.includes('path="'+path+'"')));
}
test("Formspree integration retained",()=>assert.match(readFileSync("src/pages/premium/Contact.tsx","utf8"),/formspree.io\/f\/xaewejjd/));
test("Design system present",()=>assert.ok(existsSync("src/premium.css")));
