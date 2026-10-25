
export type PageBlock = { title: string; description: string };
export type PageData = { eyebrow: string; title: string; emphasis?: string; intro: string; points: PageBlock[]; note?: string };
export const navigation = [
  {label:"Soluções",href:"/solucoes"},{label:"Como trabalhamos",href:"/como-trabalhamos"},
  {label:"Sobre",href:"/sobre"},{label:"Conteúdos",href:"/conteudos"}
];
export const solutions = [
  {title:"Integrações de sistemas",description:"Conecte ERP, CRM, e-commerce e aplicações internas com fluxos de dados consistentes.",href:"/solucoes/integracoes",symbol:"01"},
  {title:"Automações inteligentes",description:"Diminua tarefas repetitivas e organize processos com verificações e acompanhamento.",href:"/solucoes/automacoes",symbol:"02"},
  {title:"Software sob medida",description:"Sistemas, APIs e plataformas desenhados para a realidade da sua operação.",href:"/solucoes/software-sob-medida",symbol:"03"},
  {title:"Inteligência operacional",description:"Organize informações e acompanhe indicadores com clareza para tomar melhores decisões.",href:"/solucoes/inteligencia-operacional",symbol:"04"}
];
export const pages: Record<string,PageData> = {
  "/solucoes": {eyebrow:"SOLUÇÕES",title:"Tecnologia para conectar,",emphasis:"automatizar e escalar.",intro:"Desenvolvemos software e automações para simplificar operações, integrar sistemas e organizar o trabalho em torno do que realmente importa.",points:solutions.map(x=>({title:x.title,description:x.description}))},
  "/solucoes/software-sob-medida": {eyebrow:"SOLUÇÕES / SOFTWARE SOB MEDIDA",title:"Software sob medida",emphasis:"para a sua operação.",intro:"Desenvolvimento de aplicações que se encaixam nos seus processos, com foco em usabilidade, confiabilidade e evolução sustentável.",points:[{title:"Entendimento do negócio",description:"Mapeamos fluxos, usuários e restrições antes de propor uma solução."},{title:"Arquitetura e integrações",description:"Definimos componentes, permissões e interfaces compatíveis com seu ecossistema."},{title:"Entrega incremental",description:"Construímos e validamos funcionalidades de forma evolutiva."},{title:"Sustentação",description:"Planejamos documentação, observabilidade e melhorias contínuas."}]},
  "/solucoes/automacoes": {eyebrow:"SOLUÇÕES / AUTOMAÇÕES",title:"Menos repetição.",emphasis:"Mais inteligência operacional.",intro:"Automatizamos etapas manuais com regras claras, rastreabilidade e supervisão adequada, respeitando as particularidades da sua empresa.",points:[{title:"Rotinas e aprovações",description:"Estruture cadastros, verificações e notificações com menos intervenção manual."},{title:"Fluxos entre sistemas",description:"Evite retrabalho na transferência de informações entre plataformas."},{title:"Acompanhamento",description:"Monitore falhas, exceções e execução de processos."},{title:"Automação responsável",description:"Use IA quando houver benefício concreto, com validações e controle humano."}]},
  "/solucoes/integracoes": {eyebrow:"SOLUÇÕES / INTEGRAÇÕES",title:"Seus sistemas",emphasis:"trabalhando juntos.",intro:"Desenhamos conexões confiáveis entre ferramentas já presentes na operação, reduzindo ilhas de informação e etapas duplicadas.",points:[{title:"ERPs e CRMs",description:"Sincronização de informações empresariais com regras e tratamento de exceções."},{title:"APIs e webhooks",description:"Comunicação entre aplicações com autenticação e tratamento adequado de erros."},{title:"E-commerce e plataformas",description:"Fluxos de catálogo, pedidos, atendimento e operação conforme a necessidade."},{title:"Dados e acompanhamento",description:"Organização de informações para consultas, relatórios e tomada de decisão."}]},
  "/solucoes/inteligencia-operacional": {eyebrow:"SOLUÇÕES / INTELIGÊNCIA OPERACIONAL",title:"Dados organizados",emphasis:"para decisões melhores.",intro:"Projetamos painéis e indicadores com definições claras, fontes identificáveis e informações relevantes para acompanhar processos e identificar oportunidades.",points:[{title:"Indicadores definidos com o negócio",description:"Alinhamos as métricas ao que a operação realmente precisa acompanhar."},{title:"Fontes e consistência",description:"Integramos informações e verificamos regras para reduzir interpretações ambíguas."},{title:"Dashboards úteis",description:"Apresentamos informações de maneira acessível, com filtros e contexto."},{title:"Evolução e governança",description:"Documentamos definições e planejamos manutenção dos dados."}]},
  "/como-trabalhamos": {eyebrow:"COMO TRABALHAMOS",title:"Da ideia",emphasis:"ao resultado.",intro:"Unimos visão técnica, entendimento do negócio e execução transparente para desenvolver soluções úteis, sustentáveis e fáceis de evoluir.",points:[{title:"01 · Entendimento",description:"Escutamos objetivos, problemas, pessoas envolvidas e contexto operacional."},{title:"02 · Diagnóstico",description:"Identificamos oportunidades, riscos e requisitos de integração."},{title:"03 · Proposta técnica",description:"Definimos escopo, entregas, prioridades e critérios de validação."},{title:"04 · Desenvolvimento",description:"Construímos a solução em etapas verificáveis."},{title:"05 · Implantação",description:"Preparamos a entrada em operação e acompanhamos os primeiros fluxos."},{title:"06 · Evolução",description:"Revisamos resultados, manutenção e melhorias contínuas."}]},
  "/sobre": {eyebrow:"SOBRE A NERVA",title:"Tecnologia",emphasis:"com propósito.",intro:"A Nerva Tech nasce para aproximar tecnologia e operação. Acreditamos que soluções digitais devem reduzir complexidade e ajudar pessoas a trabalhar melhor.",points:[{title:"Foco no resultado",description:"Começamos pelo problema e pelo valor que uma solução pode entregar."},{title:"Transparência",description:"Comunicação clara sobre escopo, decisões, limites e próximos passos."},{title:"Solução com propósito",description:"Priorizamos tecnologia adequada ao contexto de cada operação."},{title:"Evolução contínua",description:"Projetamos soluções que possam ser mantidas, medidas e aprimoradas."}]},
  "/privacidade": {eyebrow:"PRIVACIDADE",title:"Seus dados",emphasis:"com respeito.",intro:"Esta política explica de forma geral como os dados enviados pelo formulário de contato são utilizados. Revise os detalhes legais antes da publicação.",points:[{title:"Dados coletados",description:"Quando você entra em contato, podemos receber nome, e-mail, empresa, telefone e o conteúdo da mensagem enviada."},{title:"Finalidade",description:"Utilizamos essas informações para responder à solicitação e conduzir conversas relacionadas aos nossos serviços."},{title:"Serviços de terceiros",description:"O envio do formulário utiliza o Formspree, que processa os dados necessários ao encaminhamento da mensagem. Consulte as políticas do provedor."},{title:"Seus direitos",description:"Para perguntas sobre informações fornecidas e solicitações relacionadas a elas, escreva para admin@nervatechapp.com."}],note:"Documento informativo inicial. Deve passar por revisão jurídica e operacional antes da publicação em produção."}
};
export const articles = [
  {
    "slug": "integracao-erp-ecommerce",
    "category": "INTEGRAÇÕES",
    "title": "Integração entre ERP e e-commerce: cuidados essenciais",
    "summary": "Veja como mapear pedidos, estoque, clientes e falhas de sincronização antes de conectar sistemas.",
    "body": [
      "Defina a origem de cada campo: o e-commerce geralmente registra o pedido, enquanto o ERP pode controlar documentos fiscais e estoque. Registre identificadores correlacionados para evitar a criação duplicada de pedidos em reenvios.",
      "Exemplo: ao receber um webhook de pedido pago, valide assinatura, identificador e situação; envie ao ERP de forma idempotente; atualize o status apenas depois da confirmação. Uma fila com reprocessamento controlado ajuda quando o ERP fica indisponível.",
      "Teste cancelamentos, split de pagamentos, kits, diferentes unidades de medida e divergências de estoque. Monitore eventos que falharam e defina um caminho de intervenção manual antes de liberar a integração."
    ]
  },
  {
    "slug": "automatizar-processos-administrativos",
    "category": "AUTOMAÇÕES",
    "title": "Como automatizar processos administrativos com segurança",
    "summary": "Identifique tarefas repetitivas e estabeleça controles antes de automatizar aprovações e registros.",
    "body": [
      "Comece por um inventário: atividade, frequência, tempo gasto, decisões exigidas e pessoas responsáveis. Desenhe estados como solicitado, em análise, aprovado e rejeitado para tornar o fluxo verificável.",
      "Exemplo: uma solicitação de compra pode exigir aprovação conforme categoria e valor, registrar evidência da decisão e notificar a equipe responsável. Não automatize a aprovação quando a política exigir avaliação humana.",
      "Faça testes com solicitações incompletas, regras conflitantes, permissões distintas e indisponibilidade dos sistemas. Estabeleça como reprocessar a tarefa e quem recebe alertas quando a automação não conseguir concluir."
    ]
  },
  {
    "slug": "quando-software-sob-medida",
    "category": "SOFTWARE",
    "title": "Quando uma empresa precisa de software sob medida?",
    "summary": "Critérios práticos para comparar ferramentas prontas, integrações e desenvolvimento personalizado.",
    "body": [
      "Compare três caminhos antes de construir: configurar uma plataforma pronta, integrar ferramentas existentes ou desenvolver um produto específico. Uma matriz simples pode considerar aderência funcional, manutenção, segurança e dependência de fornecedores.",
      "Exemplo: se uma equipe precisa combinar regras comerciais exclusivas com três ERPs diferentes, pode ser mais sustentável desenvolver uma camada de integração do que modificar cada ferramenta separadamente.",
      "Defina um escopo inicial pequeno, critérios de aceitação, expectativas de suporte, observabilidade e responsabilidades sobre acesso aos dados. O custo relevante inclui evolução e operação, não apenas a primeira entrega."
    ]
  },
  {
    "slug": "integrar-sistemas-apis",
    "category": "INTEGRAÇÕES",
    "title": "Como integrar sistemas por APIs: fundamentos e decisões",
    "summary": "Autenticação, contratos de dados, versionamento e tratamento de falhas em integrações empresariais.",
    "body": [
      "Documente o contrato: endpoints, autenticação, payloads, paginação, limites, códigos HTTP e versionamento. Considere o princípio do menor privilégio para tokens e chaves de acesso.",
      "Exemplo: numa sincronização de clientes, use um identificador de origem, implemente tratamento para requisições duplicadas e registre correlação técnica das tentativas. Para erros temporários, aplique novas tentativas com espera progressiva.",
      "Teste erros 401, 429 e 5xx, alterações de contrato e indisponibilidade prolongada. Armazene segredos fora do repositório e evite dados pessoais em logs técnicos e métricas."
    ]
  },
  {
    "slug": "automacao-pedidos-comerciais",
    "category": "AUTOMAÇÕES",
    "title": "Automação de pedidos e processos comerciais",
    "summary": "Do recebimento do pedido à comunicação entre vendas, financeiro e logística.",
    "body": [
      "Trace os estados do pedido antes de automatizar: recebido, validado, pago, faturado, enviado, cancelado e devolvido. Cada transição deve ter regras, origem de verdade e responsável.",
      "Exemplo: pagamento confirmado aciona conferência de estoque; se houver divergência, o pedido entra em análise, sem ser enviado automaticamente à expedição. Emissões fiscais e cancelamentos exigem cuidado com integrações e requisitos legais.",
      "Valide pedidos com múltiplos itens, alterações após pagamento, reembolso parcial e eventos repetidos. A trilha de auditoria deve permitir descobrir por que um pedido mudou de estado."
    ]
  },
  {
    "slug": "dashboards-indicadores-empresariais",
    "category": "DADOS",
    "title": "Dashboards empresariais: indicadores que ajudam a decidir",
    "summary": "Como escolher métricas, organizar fontes e evitar painéis visualmente bonitos sem utilidade.",
    "body": [
      "Comece pela pergunta de negócio: quais decisões o time toma diariamente, semanalmente ou mensalmente? Só depois selecione indicadores e visualizações adequados.",
      "Exemplo: um painel de pedidos pode mostrar backlog, prazo de processamento e exceções abertas; cada indicador precisa de definição, janela de tempo e responsável pela fonte de dados.",
      "Valide conciliações, fuso horário e diferenças entre valores brutos e líquidos. Evite painéis lotados: priorize indicadores acionáveis e inclua detalhes suficientes para investigar anomalias."
    ]
  },
  {
    "slug": "reduzir-retrabalho-automacoes",
    "category": "AUTOMAÇÕES",
    "title": "Como reduzir retrabalho com automações",
    "summary": "Um roteiro para identificar dados duplicados, transferências manuais e pontos de inconsistência.",
    "body": [
      "Observe onde um colaborador copia dados de uma tela para outra, repete validações ou corrige divergências recorrentes. Identifique se a causa é falta de integração, regras inconsistentes ou interface inadequada.",
      "Exemplo: um cadastro aprovado pode alimentar CRM e ERP por integração, em vez de ser digitado novamente. Defina quem pode alterar cada campo e como tratar atualizações concorrentes.",
      "Monitore duplicidades, falhas de sincronização e exceções sem depender apenas de indicadores agregados. Converse com os usuários após a implantação para identificar novos pontos de atrito."
    ]
  },
  {
    "slug": "processos-candidatos-automacao",
    "category": "AUTOMAÇÕES",
    "title": "Como identificar processos candidatos à automação",
    "summary": "Um método para priorizar oportunidades de automação pela previsibilidade e pelo risco.",
    "body": [
      "Priorize usando critérios simples: repetição, previsibilidade, qualidade dos dados, impacto em caso de erro e dificuldade de integração. Dê atenção especial às exceções, não apenas ao fluxo esperado.",
      "Exemplo: notificações automáticas sobre documentos prestes a vencer podem ser um primeiro caso; decisões disciplinares ou financeiras sensíveis exigem revisão humana e controles específicos.",
      "Implemente um piloto mensurável com critérios de aceitação: entradas válidas, tratamento de exceções, responsáveis por alertas e opção de intervenção manual. Amplie somente após confirmar que o processo está estável."
    ]
  }
];
