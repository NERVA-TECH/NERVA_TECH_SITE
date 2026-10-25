
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
      "Uma integração entre ERP e e-commerce começa pela identificação da origem confiável de cada informação. É importante estabelecer onde surgem pedidos, quais dados são necessários para faturamento e qual sistema administra disponibilidade de estoque.",
      "Também é necessário especificar quando enviar atualizações, como reconhecer eventos repetidos e o que fazer quando o ERP estiver indisponível. Webhooks, filas e APIs podem ser combinados conforme o contexto técnico.",
      "Antes da implantação, valide pedidos cancelados, alterações de endereço, estornos e divergências de catálogo. Registre logs técnicos que facilitem correções sem expor dados sensíveis."
    ]
  },
  {
    "slug": "automatizar-processos-administrativos",
    "category": "AUTOMAÇÕES",
    "title": "Como automatizar processos administrativos com segurança",
    "summary": "Identifique tarefas repetitivas e estabeleça controles antes de automatizar aprovações e registros.",
    "body": [
      "Um bom ponto de partida é desenhar o processo atual: gatilhos, responsáveis, regras de aprovação, entradas e resultados esperados.",
      "Tarefas padronizadas, como conferência de cadastros ou avisos de vencimento, costumam permitir automação gradual. Etapas que envolvem julgamento precisam de revisão humana quando apropriado.",
      "Inclua tratamento de exceções, controle de permissões e rastreabilidade desde o início. A automação precisa tornar a operação mais confiável, não apenas mais rápida."
    ]
  },
  {
    "slug": "quando-software-sob-medida",
    "category": "SOFTWARE",
    "title": "Quando uma empresa precisa de software sob medida?",
    "summary": "Critérios práticos para comparar ferramentas prontas, integrações e desenvolvimento personalizado.",
    "body": [
      "Software sob medida pode ser indicado quando processos centrais são específicos demais para ferramentas genéricas e adaptações sucessivas prejudicam a operação.",
      "Avalie primeiro se uma solução existente atende às necessidades com configuração ou integração. Compare custo total, manutenção, segurança, propriedade dos dados e capacidade de evolução.",
      "Se a construção for necessária, inicie com requisitos claros, etapas pequenas de entrega e critérios de aceitação verificáveis."
    ]
  },
  {
    "slug": "integrar-sistemas-apis",
    "category": "INTEGRAÇÕES",
    "title": "Como integrar sistemas por APIs: fundamentos e decisões",
    "summary": "Autenticação, contratos de dados, versionamento e tratamento de falhas em integrações empresariais.",
    "body": [
      "A API deve possuir contratos definidos: campos esperados, formato das respostas, códigos de erro, autenticação e limites de uso.",
      "Planeje idempotência para operações repetidas, política de tentativas com intervalos e observabilidade que ajude a diagnosticar falhas sem registrar segredos.",
      "Versionamento, testes de contrato e documentação reduzem o risco de mudanças em uma aplicação quebrarem os sistemas conectados."
    ]
  },
  {
    "slug": "automacao-pedidos-comerciais",
    "category": "AUTOMAÇÕES",
    "title": "Automação de pedidos e processos comerciais",
    "summary": "Do recebimento do pedido à comunicação entre vendas, financeiro e logística.",
    "body": [
      "Mapeie a jornada de pedidos e as responsabilidades de cada sistema, incluindo aprovação, pagamento, separação, emissão e atendimento.",
      "Uma automação pode validar dados obrigatórios, encaminhar atualizações e registrar exceções, desde que preserve as regras comerciais e fiscais aplicáveis.",
      "Comece validando fluxos de cancelamento, duplicidade e divergências de estoque, não apenas o caminho de sucesso."
    ]
  },
  {
    "slug": "dashboards-indicadores-empresariais",
    "category": "DADOS",
    "title": "Dashboards empresariais: indicadores que ajudam a decidir",
    "summary": "Como escolher métricas, organizar fontes e evitar painéis visualmente bonitos sem utilidade.",
    "body": [
      "Antes de desenhar um dashboard, defina qual decisão o painel pretende apoiar e quem utilizará cada indicador.",
      "Documente cálculo, frequência de atualização, fonte e responsáveis. Informações de sistemas diferentes precisam de regras de conciliação para evitar números conflitantes.",
      "Organize os indicadores por importância e destaque exceções úteis. Um painel claro prioriza a ação e a interpretação correta."
    ]
  },
  {
    "slug": "reduzir-retrabalho-automacoes",
    "category": "AUTOMAÇÕES",
    "title": "Como reduzir retrabalho com automações",
    "summary": "Um roteiro para identificar dados duplicados, transferências manuais e pontos de inconsistência.",
    "body": [
      "Retrabalho costuma surgir quando uma mesma informação é digitada em múltiplos sistemas ou quando não existe clareza sobre quem atualiza determinado registro.",
      "Identifique as etapas repetidas, suas causas e consequências antes de escolher tecnologias. Integrações podem eliminar cópias manuais, enquanto validações reduzem erros na origem.",
      "Meça o processo de forma responsável, acompanhe exceções e revise regras com os usuários após a implantação."
    ]
  },
  {
    "slug": "processos-candidatos-automacao",
    "category": "AUTOMAÇÕES",
    "title": "Como identificar processos candidatos à automação",
    "summary": "Um método para priorizar oportunidades de automação pela previsibilidade e pelo risco.",
    "body": [
      "Liste atividades frequentes que dependem de regras explícitas, como triagem, notificações, conciliações e geração de relatórios.",
      "Analise a estabilidade do processo, a qualidade das entradas, as exceções e o impacto de uma falha. Processos instáveis podem precisar de padronização antes de automação.",
      "Escolha um caso inicial de escopo controlado, defina resultados esperados e valide com quem executa a atividade."
    ]
  }
];
