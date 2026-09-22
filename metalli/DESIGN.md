# Design — Metalli Steel

## Brief verificado

- **Negócio, oferta e público:** Metalli Steel, metalúrgica de Lages (SC). O perfil oficial confirma corte a laser, plasma e oxicorte, dobra CNC e fabricação de fueiros, malhal e porta-paletes. Publicações públicas mostram também caçamba papa-entulho, escudo de cilindro de guindaste florestal e fabricação personalizada.
- **Objetivo e CTA principal:** transformar interesse comercial em conversa no WhatsApp pelo número informado no briefing e repetido nas peças oficiais: `(49) 3240-0613`.
- **Origem do tráfego e dúvidas do visitante:** audiência local/regional vinda de busca, Maps e Instagram. A página deve responder rapidamente o que é fabricado, se há evidência real de execução e como pedir orçamento.
- **Identidade e ativos fornecidos:** logo raster enviada pelo cliente; fotografias e peças do Instagram oficial `@metalli.steel`, observadas em 22/09/2026. Uso assumido como material oficial disponibilizado publicamente pela própria empresa; validação final de direitos permanece com o proprietário do projeto.
- **Restrições e fatos pendentes:** sem métricas, tempo de mercado, certificações, prazos, capacidade, clientes ou área atendida não confirmados. Não há depoimentos. Telefone e endereço seguem o briefing: R. Visconde de Inhaúma, 88 — Maria Luíza, Lages — SC.

## Referências e moodboard

| Fonte/arquivo | Princípio observado | Adaptação à marca | Não copiar |
| --- | --- | --- | --- |
| Logo enviada (`public/images/metalli-logo.jpg`) | Monograma angular, preto/branco, alto contraste | Geometria rígida e cortes diagonais | Não redesenhar a marca |
| Instagram oficial `@metalli.steel` | Fotografia de peças, corte plasma, dobra CNC e aplicação florestal | Prova real em recortes editoriais | Não reproduzir o layout promocional das artes |
| Publicação de corte plasma (12/09/2025) | Luz do processo e chapa perfurada | Cena dominante do hero, recortada como matéria | Não repetir texto promocional embutido |
| Chapa, desenho técnico e cotas industriais | Precisão, espessura e construção | Linhas finas, coordenadas e legendas funcionais | Evitar “blueprint cosplay” e grids decorativos |
| Editorial suíço/industrial | Tipografia condensada, escala e área negativa | Hierarquia disciplinada e assimétrica | Não virar jornal genérico |

## Três conceitos antes do código

| Conceito | Tese e hero | Tipografia, cor e composição | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Matéria em corte | Uma chapa escura é atravessada por um recorte de luz; a foto do plasma surge dentro da geometria | Display condensado, carbono e osso, âmbar térmico mínimo; grid assimétrico | **The Cut Line** | Melhor relação entre serviço real, marca e impacto; baixo peso com CSS |
| B — Catálogo de oficina | Produtos fotografados como páginas de um catálogo técnico | Fundo claro, tipografia técnica, composições numeradas por família | Etiqueta de peça | Muito claro, porém menos memorável e dependente de fotos mais limpas |
| C — Estrutura florestal | Hero dominado pelo fueiro aplicado em caminhão e ritmo vertical | Verdes florestais escuros, aço, tipografia larga | Linhas verticais como fueiros | Específico para um produto, mas reduziria a percepção do portfólio de corte e dobra |

**Escolha e motivo:** Conceito A. É o único que nasce simultaneamente do processo confirmado (corte), do monograma angular e da luz real da fabricação. Ele permite usar os ativos atuais sem simular escala, equipamentos ou tecnologia não demonstrada.

## Direção escolhida

- **Visual thesis:** o aço deixa de ser superfície e passa a ser forma por meio de uma execução precisa.
- **Signature element:** uma linha âmbar de 1px — a linha de corte — divide e revela a matéria no hero e reaparece apenas em transições decisivas.
- **Personalidade e materialidade:** industrial, direta, silenciosa e tecnicamente disciplinada; carbono fosco, aço frio, osso quente e um único acento térmico.
- **Cena dominante do hero:** headline monumental invade a margem esquerda enquanto uma fotografia real de corte plasma é recortada por uma chapa diagonal à direita; a linha de corte separa texto e processo.
- **Fotografia:** prova documental. Contraste levemente frio, sem filtros laranja ou overlays pesados. Recortes ocultam texto promocional embutido quando possível, sem falsificar o conteúdo.
- **Anti-padrões:** sem métricas, selos, depoimentos, FAQ automática, cards arredondados, glow, vidro, grid futurista, faíscas artificiais, ícones genéricos ou 3D.

## Sistema visual

- **Tipografia:** display em `Bahnschrift Condensed / Arial Narrow`, corpo em `Aptos / Segoe UI`, utilitária em `Cascadia Mono / Consolas`. Headline com `clamp(4rem, 11vw, 10rem)`, corpo entre 1rem e 1.2rem, labels em 0.72rem com tracking.
- **Cores:** Carbon `#0B0D0E`; Forged `#171A1C`; Steel `#858B8F`; Mist `#D9DBD7`; Bone `#F1F0EA`; Cut `#C1822A`; foco `#FFD37A`; sucesso `#3D8B63`; perigo `#B74A3E`.
- **Grid:** 12 colunas, máximo de 1440px, gutters `clamp(1.1rem, 4vw, 4.75rem)`. Breakpoints por quebra de conteúdo em 1100px, 820px e 560px.
- **Ritmo:** seções entre 6rem e 11rem; alternância entre blocos densos de material e respiros editoriais claros.
- **Superfícies:** bordas finas, raios de 0–3px, sem sombras em conteúdo estático. Botões geométricos e setas lineares.
- **Estados:** hover de linha/deslocamento de 2px; foco visível âmbar de 2px; estados ativos sem deslocar layout.
- **Mobile:** hero recomposto em texto → CTA → fotografia; headline limitada a 22vw; capacidades viram seletor vertical; galeria perde sobreposições e mantém recortes úteis; CTA de WhatsApp persistente, compacto e com safe area.

## Conteúdo e conversão

- **Promessa inicial:** “O aço toma forma.”, seguida das capacidades confirmadas.
- **Sequência:** oferta e ação → posicionamento → capacidades confirmadas → produto aplicado → trabalhos reais → detalhe de processo → localização → CTA final.
- **Destino do CTA:** `wa.me/554932400613` com mensagem curta: “Olá! Vi o site da Metalli Steel e gostaria de solicitar um orçamento.”

## Motion e mídia

- **Cena principal:** entrada curta em que a linha de corte percorre a foto, a máscara abre e a headline ganha contraste. O conteúdo e CTA já estão legíveis desde o primeiro frame.
- **Técnica:** CSS transform/clip-path apenas na coreografia inicial e nas microinterações; sem biblioteca de animação. Revelações por scroll foram removidas após QA para nunca atrasar ou ocultar conteúdo.
- **Mobile e movimento reduzido:** sem parallax; composição estática completa com `prefers-reduced-motion: reduce`.
- **Orçamento:** zero fontes remotas, zero 3D/vídeo, apenas imagens JPEG oficiais; lazy loading abaixo da dobra e dimensões reservadas.

## Mapeamento de tokens

`DESIGN.md → src/styles.css (:root) → componentes React → página renderizada`.

## QA e decisões

| Data | Dispositivo/largura | Problema observado | Correção | Recaptura/estado |
| --- | --- | --- | --- | --- |
| 22/09/2026 | 1440×900 | Revelações por scroll podiam manter seções invisíveis em navegação rápida | Mantida a coreografia no hero; conteúdo abaixo da dobra passou a ser imediatamente visível | `qa/desktop-1440.png` — aprovado |
| 22/09/2026 | 768×1024 | Hierarquia e recomposição verificadas; nenhuma rolagem horizontal | Sem alteração estrutural adicional | `qa/tablet-768.png` — aprovado |
| 22/09/2026 | 390×844 | CTA persistente herdava estilo incompleto, duplicava ação na primeira dobra e cobria mídia | Aplicado primitive de botão; CTA oculto até após 65% do primeiro viewport | `qa/mobile-390.png` — aprovado |
| 22/09/2026 | 390×844 | `role=listitem` removia a semântica nativa dos botões de capacidade | Removidos papéis ARIA redundantes; botão “Dobra CNC” e foco por teclado testados | Aprovado em navegador |
| 22/09/2026 | 360/430/1024/1280 | Verificação de overflow e imagens | `scrollWidth === clientWidth`; nenhuma imagem incompleta | Aprovado |

## Feedback incorporado

| Feedback | Regra alterada | Arquivo/componente afetado |
| --- | --- | --- |
| Não publicar; entregar ZIP | Nenhuma integração de deploy ou hosting | README e entrega final |
