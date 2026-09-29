# Design — Crystal Clear

## Brief verificado

- **Negócio, oferta e público:** tratamento, limpeza e manutenção profissional de piscinas em Mogi das Cruzes e Alto Tietê; proprietários que querem reduzir a carga da manutenção recorrente.
- **Objetivo e CTA principal:** contato pelo WhatsApp, com ênfase comercial em planos recorrentes.
- **Origem do tráfego e dúvidas:** Google, Instagram e WhatsApp; “resolve o meu caso?”, “posso contratar recorrente?”, “o que é acompanhado?” e “como peço orçamento?”.
- **Identidade e ativos:** símbolo quadrado fornecido pelo cliente; slogan “Claro como Cristal”; paleta sugerida no briefing. Fotografias Pexels são ambientação licenciada e creditada no README.
- **Restrições:** sem preços, tempo de mercado, números, avaliações, garantias, cidades, equipe ou provas não confirmadas. Sem before/after ou feed falso do Instagram.

## Referências e moodboard

| Fonte/arquivo | Princípio observado | Adaptação à marca | Não copiar |
| --- | --- | --- | --- |
| Site atual informado no briefing | Preservar contatos, serviços e foco local | Reestruturar a proposta como cuidado contínuo | Layout e linguagem visual existentes |
| Pexels 5563466, Jonathan Borba | Arquitetura residencial, água como parte da casa | Hero orientado ao resultado e à conveniência | Apresentar como piscina atendida |
| Pexels 16820015, Allan Carvalho | Reflexo solar e superfície da água | Macro editorial e matéria visual | Azul saturado como fundo de todo o site |
| Hotelaria contemporânea | Ritmo calmo, espaços generosos e serviço invisível | Off-white, enquadramentos amplos e texto econômico | Estética turística ou promessa de resort literal |
| Instrumentação técnica | Ordem, linhas, registro e rotina | Linhas finas, módulos de processo e relatório | Dashboard fictício ou certificações |

## Três conceitos antes do código

| Conceito | Tese e hero | Tipografia, cor e composição | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Resort doméstico | A piscina vira o lugar mais tranquilo da casa | Serif editorial pontual, grandes fotos claras | Moldura panorâmica de hotelaria | Desejável, porém menos técnico e mais dependente de fotografia |
| B — Precisão líquida | Manutenção como operação técnica invisível | Sans condensada, grid modular e petróleo | Linhas de leitura e marcações | Confiável, porém pode esfriar o benefício emocional |
| C — Clareza em camadas | Resultado sereno na frente, precisão por baixo | Display geométrica + sans humana; deep ocean e off-white | Linha de refração atravessando blocos | Equilibra desejo, recorrência e confiança com baixo custo técnico |

**Escolha e motivo:** conceito C. Ele traduz a promessa “pronta, sempre” sem transformar a marca em hotel ou assistência técnica genérica.

## Direção escolhida

- **Visual thesis:** tranquilidade residencial sustentada por uma rotina técnica que quase não precisa aparecer.
- **Signature element:** uma linha de refração fina que muda de direção entre seções e aparece em contornos, divisores e no hero.
- **Personalidade e materialidade:** silenciosa, precisa, fresca e residencial.
- **Cena dominante:** fotografia ampla de piscina e arquitetura sob camada deep ocean; o olhar pousa no H1 e no CTA antes de percorrer a água.
- **Fotografia:** primeiro resultado/desejo, depois superfície/clareza; stock sempre como ambientação.
- **Anti padrões:** ondas infantis, bolhas, cards repetidos, gradiente roxo, glassmorphism, ícones genéricos e claims não verificáveis.

## Sistema visual

- **Tipografia:** `Manrope`/system para display e interface; `Georgia` itálica apenas em frases editoriais. H1 com clamp 4rem–8.4rem; corpo entre 1rem e 1.15rem; linhas de leitura até 62ch.
- **Cores:** deep ocean `#051B24`, petróleo `#0B3440`, off-white `#F7F9F8`, aquático `#EAF6F5`, aqua `#52D5D0`, aqua claro `#9EE7DF`.
- **Grid:** contêiner de 1240px; 12 colunas no desktop; quebras em 980px e 720px; mobile em fluxo deliberado.
- **Ritmo:** seções entre 88px e 150px; alternância intencional entre editorial claro, técnico escuro e foto full-bleed.
- **Superfícies:** cantos pequenos (0–18px), bordas finas e sombras raras. Botões arredondados apenas como controles táteis.
- **Estados:** foco aqua de alto contraste; hover curto com deslocamento de 2px; tabs com texto, número e estado selecionado.
- **Mobile:** menu expansível, CTA sticky, imagens com crops próprios, títulos reduzidos e timelines em uma coluna.

## Conteúdo e conversão

- **Promessa inicial:** “Sua piscina. Pronta. Sempre.”
- **Sequência:** resultado → valor invisível → contrato recorrente → demanda pontual → escopo → rotina → desejo → benefícios → relatório → confiança local → FAQ → contato.
- **Destino:** todos os CTAs comerciais abrem `wa.me/5511975409520` com mensagem contextual. Não há formulário.

## Motion e mídia

- **Cena principal:** caustics discretos no hero e deslocamento mínimo da foto para dar materialidade à água.
- **Técnica:** CSS e IntersectionObserver nativos; sem bibliotecas.
- **Mobile/reduced motion:** parallax desativado; transições removidas em `prefers-reduced-motion`.
- **Orçamento:** imagens WebP locais; hero prioritário, demais com lazy loading; JS abaixo de 10 KB.

## QA e decisões

| Data | Dispositivo/largura | Problema observado | Correção | Recaptura/estado |
| --- | --- | --- | --- | --- |
| 2026-09-29 | 1440×900, 768×1024, 390×844 e 320×760 | CTA flutuante duplicava a ação no hero | CTA passa a surgir somente após a primeira dobra | Recapturado; hero limpo |
| 2026-09-29 | 390×844 e 320×760 | 2 px de overflow horizontal causados pelo caustics animado | Movimento mantido apenas no background; raiz recortada | `scrollWidth === clientWidth` |
| 2026-09-29 | Rolagem rápida | Uma seção podia permanecer oculta antes do IntersectionObserver disparar | Fallback temporal adiciona o estado visível; hero não depende de JS | Testado em Chrome headless |

