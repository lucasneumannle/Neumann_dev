# Design — AcquaStation Piscinas

## Brief verificado

- Negócio, oferta e público: loja especializada em produtos, acessórios e equipamentos para piscinas, em Camboriú/SC. Público principal: proprietários de piscinas residenciais e profissionais/condomínios da região que precisam resolver compra, limpeza, tratamento ou equipamento.
- Objetivo e CTA principal: iniciar uma conversa no WhatsApp pelo número público `(47) 98832-3408`.
- Origem do tráfego e dúvidas do visitante: Instagram, busca local e indicação. Dúvidas centrais: “tem o produto que preciso?”, “vocês entendem do problema?”, “onde fica?”, “quando abre?” e “como falo agora?”.
- Identidade e ativos fornecidos: logo circular enviado pelo usuário, preservado sem redesenho. Paleta extraída visualmente do logo: azul-marinho, azul piscina, branco. Fotografias são ilustrativas, licenciadas pelo Unsplash; não representam obras, equipe ou loja da AcquaStation.
- Fatos verificados: Instagram público `@acquastation.bc` com a descrição “Tudo para sua piscina — Produtos | Acessórios | Motores | Filtros”; Google Maps com endereço Rua Heitor Santos, 511, sala 02, Centro, Camboriú/SC; telefone `(47) 98832-3408`; nota 5,0 em 10 avaliações na data de 29/09/2026; horários de segunda a sexta, 08:00–12:00 e 14:00–18:00, sábado 08:00–12:00, domingo fechado.
- Restrições e pressupostos: landing page estática para GitHub Pages; sem formulário e sem backend. O WhatsApp é o único CTA dominante. Estoque, prazo, entrega e área de atendimento devem ser confirmados no contato.

## Referências e moodboard

| Fonte/arquivo | Princípio observado | Adaptação à marca | Não copiar |
| --- | --- | --- | --- |
| Logo fornecido | círculo concêntrico, contraste azul-marinho/ciano e gesto de respingo | círculos orbitais e “linha d’água” como assinatura | não redesenhar o símbolo nem alterar a proporção do logo |
| Instagram `@acquastation.bc` | comunicação direta, foco em produto, azul intenso, marcas técnicas | copy objetiva e catálogo organizado por necessidade | não usar posts/imagens proprietárias como fotografia editorial |
| Google Maps da loja | confiança local, nota, endereço, horário e telefone | prova local cedo, bloco de visita e CTA de rota | não inflar avaliações nem inventar depoimentos |
| Unsplash — Nathan Dumlao | piscina vertical, contraste de paisagem e geometria | hero editorial com recorte alto | não sugerir que o local fotografado foi atendido pela empresa |
| Unsplash — Dan Counsell | refração e superfície de água como matéria | faixa sensorial e textura de fundo | não usar textura como decoração desconectada |
| Unsplash — Point3D Commercial Imaging | contexto residencial e leitura clara da área de lazer | seção de decisão/benefício | não apresentar como portfólio ou obra real |

## Três conceitos antes do código

| Conceito | Tese e hero | Tipografia, cor e composição | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Linha d’água editorial | “Da precisão técnica à leveza de uma piscina pronta.” Hero dividido entre headline forte e fotografia vertical | grotesca de caráter no display, sans legível no corpo; marinho, ciano, branco e verde controlado para ação; grid assimétrico | órbitas circulares derivadas do logo atravessam a linha d’água | melhor equilíbrio entre desejo, confiança local e implementação leve |
| B — Balcão técnico | “A peça certa, sem adivinhação.” Hero modular com diagrama de sistema de piscina | linguagem técnica, grade densa, pouca fotografia | linhas/legendas de catálogo e marcadores de equipamento | muito claro, porém menos emocional para tráfego frio e depende de dados técnicos mais completos |
| C — Azul resort | “A piscina como pausa.” Fotografia imersiva em tela cheia | tipografia condensada, contraste profundo e grandes áreas de imagem | enquadramento cinematográfico e reflexos | alto desejo, mas genérico demais e arriscaria parecer hotelaria ou construtora |

**Escolha e motivo:** conceito A. Ele nasce diretamente do círculo e do respingo do logo, mantém o produto/serviço compreensível e cria desejo sem transformar fotos de banco em falsa prova.

## Direção escolhida

- **Visual thesis:** da precisão técnica à leveza de uma piscina pronta.
- **Signature element:** “linha d’água” formada por dois círculos orbitais finos que enquadram foto, títulos e transições; o gesto é derivado do logo e não de um ornamento genérico.
- Personalidade e materialidade: fresca, técnica e próxima. Superfícies claras com profundidade marinha; ciano como luz/refração, não como gradiente genérico.
- Cena dominante e foco do hero: texto e CTA imediatamente legíveis à esquerda; piscina vertical à direita, recortada por arco, com selo local apoiado na borda.
- Fotografia/ilustração: imagens de banco apenas como contexto e desejo; tratamento frio, enquadramentos de água/arquitetura e legenda explícita de “imagem ilustrativa”.
- Anti padrões específicos: nenhum carrossel, nenhum antes/depois falso, nenhum número de clientes não comprovado, nenhuma galeria apresentada como portfólio, nenhuma cascata de cards iguais, nenhum glassmorphism.

## Sistema visual

- Tipografia: `Bricolage Grotesque` para display, `Manrope` para corpo e interface; fallback para fontes de sistema. Headline desktop 72–92 px com entrelinha curta; corpo 17–19 px; utilidade 12–13 px em caixa alta moderada.
- Cores por função: `#062E4A` marinho-base; `#074E73` marinho médio; `#2FB7DE` ciano da marca; `#A8E8F4` água clara; `#F4FBFB` fundo; `#FFFFFF` superfície; `#146C56` CTA/WhatsApp; `#153442` texto secundário.
- Grid, contêineres e breakpoints: container máximo 1240 px; desktop em 12 colunas; tablet abaixo de 900 px; mobile em coluna única abaixo de 720 px; margem mínima 20 px.
- Ritmo de espaço: hero denso no texto e generoso na imagem; prova local compacta; serviços em composição editorial de linhas; bloco sensorial amplo; FAQ mais contido.
- Superfícies, bordas, raios e sombras: raios de 18–32 px em fotos e caixas essenciais; bordas azul-claro; sombras raras e suaves, concentradas no hero e CTA flutuante mobile.
- Componentes e estados: links e botões semânticos com hover, active e foco visível; `details` nativo para FAQ; header sticky discreto; nenhuma interação essencial depende de hover.
- Adaptação mobile: logo/header compactos; hero vira texto → CTA → prova → imagem; órbitas recortadas; CTA de WhatsApp fixo no rodapé sem cobrir conteúdo; serviços deixam de usar colunas e passam a linhas empilhadas.

## Conteúdo e conversão

- Promessa inicial e ação: “Água limpa. Piscina pronta.” + “Falar no WhatsApp”.
- Sequência de dúvidas/provas: oferta imediata → prova local/avaliação → categorias de solução → como o atendimento avança → confiança e localização → FAQ → CTA final.
- Destino do CTA: `https://wa.me/5547988323408` com mensagem pré-preenchida e contexto de origem. Após o clique, o visitante abre o WhatsApp para confirmar produto, serviço ou disponibilidade.

## Motion e mídia

- Cena principal e função: no carregamento, a linha d’água desenha o enquadramento e a fotografia se revela discretamente; comunica cuidado e continuidade sem atrasar o CTA.
- Técnica: CSS e IntersectionObserver leve para revelações pontuais; sem dependências.
- Mobile/reduced motion: órbitas ficam estáticas; revelações e deslocamentos são removidos com `prefers-reduced-motion`.
- Orçamento: 3 imagens WebP locais, lazy loading abaixo da dobra, dimensões/aspect-ratio reservados; JS pequeno apenas para menu, ano, revelação e parâmetros de campanha do WhatsApp.

## QA e decisões

| Data | Dispositivo/largura | Problema observado | Correção | Recaptura/estado |
| --- | --- | --- | --- | --- |
| 29/09/2026 | Planejamento | risco de fotografias de banco parecerem portfólio | legenda global e créditos explícitos; nenhuma linguagem de case/obra | confirmado em todas as mídias |
| 29/09/2026 | Desktop 1440×900 | primeira dobra clara; captura full-page repetia elementos sticky e mantinha reveals fora da viewport ocultos | inspeção refeita por viewport e por seção; fallback sem JS corrigido para manter conteúdo visível | hero, soluções, confiança e localização verificados |
| 29/09/2026 | Tablet 768×1024 | sem quebra de navegação; imagem do hero precisava preservar o arco sem comprimir texto | composição em coluna e crop vertical mantidos | recaptura aprovada |
| 29/09/2026 | Mobile 390×844 | menu fixo era limitado pelo contexto criado por `backdrop-filter` no header | removido o filtro; overlay passou a ocupar a viewport inteira com logo e fechar visíveis | menu aberto/fechado verificado |
| 29/09/2026 | Mobile 320×800 | órbitas do hero ampliavam `scrollWidth` para 437 px | hero passou a recortar elementos decorativos | `scrollWidth` 310 px para viewport útil de 310 px; sem overflow |
| 29/09/2026 | Mobile 320×800 | fotos locais demoravam a aparecer durante a primeira inspeção | WebP redimensionados e recomprimidos; pacote de imagens reduzido para ~512 KB | todas as 5 instâncias de imagem carregadas com dimensões válidas |
| 29/09/2026 | Navegador local | menu, FAQ e CTA precisavam de teste funcional | menu testado com clique e Escape; FAQ expandida; WhatsApp conferido com número e mensagem | sem erros ou avisos no console |

## Feedback incorporado

| Feedback | Regra alterada | Arquivo/componente afetado |
| --- | --- | --- |
| Usar imagens de banco e entregar para GitHub Pages | mídia local e pacote estático sem build | `index.html`, `styles.css`, `script.js`, `assets/` |
| Logo fornecido após o pedido inicial | identidade preservada e paleta derivada do ativo | hero, header, cores e assinatura circular |

