# Granimar — direção de interface

## Brief e ativos
- Negócio: Cocinas y Mármoles Granimar, Ibagué, Tolima. Cozinhas, mesones e superfícies sob medida.
- Objetivo dominante: conversa de cotação no WhatsApp. Busca e redes sociais são as entradas prováveis.
- Fatos fornecidos pelo cliente: telefone, endereço, materiais, serviços e nota 4,9 com 56 avaliações. Textos de três avaliações foram fornecidos em resumo, sem citações literais.
- Ativos: imagem de marca fornecida (314 × 314, baixa resolução); três imagens conceituais criadas com ImageGen para demonstrar a composição. Elas não retratam obras da empresa.
- Pendente: fotografias originais de obras, autorização/licença delas, URLs individuais das avaliações e domínio final para canonical/OG.

## Referências de princípio
| Fonte | Princípio observado | Aplicação | Limite |
| --- | --- | --- | --- |
| Brief do cliente | Arquitetura contemporânea, pedra, madeira | Matéria e espaços generosos | Não copiar marca alheia |
| Logo enviado | Vermelho escuro, arco arquitetônico | Wordmark discreto e filete arqueado em CSS | Não ampliar o bitmap como foto nítida |
| Fachada/endereço público em Waze | Presença local concreta | Ibagué e visita com rota | Não inferir cobertura de outras cidades |
| Fotografia conceitual gerada | Atmosfera e desejo | Hero e galeria de inspiração rotulada | Nunca apresentar como obra real |

## Três conceitos
| Conceito | Tese e hero | Linguagem | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Arquitetura vivida | Cozinha em tela cheia, texto sobre área escura | Marfim, carvão, serif editorial | Filete arqueado inspirado no logo e legenda de prancha | Melhor para desejo e ação; depende de fotos boas |
| B — Atlas da pedra | Macro de superfície na primeira dobra | Quase monocromático, texto técnico | Amostras de textura | Forte para material, fraco para transformação da cozinha |
| C — Ateliê doméstico | Tipografia gigante e fotos em blocos | Mais vermelho e ritmo gráfico | Numeração de processo | Reconhecível, mas menos calor residencial |

**Escolha:** A. Mostra o resultado desejado antes de explicar o material, alinhado ao objetivo comercial. O acento vermelho discreto preserva vínculo com a marca.

## Direção escolhida
- **Tese visual:** a pedra ganha valor quando faz parte de uma cozinha que se deseja viver.
- **Assinatura:** filete arqueado sutil junto ao wordmark e legendas de fotografia com linguagem de prancha editorial.
- **Primeiros três segundos:** cozinha contemporânea ampla, promessa clara, Ibagué e ação de cotação.
- **Prova visual ideal:** fotos reais de cozinhas instaladas e detalhes dos encaixes; ausentes nesta entrega.
- **Motion:** apenas entradas discretas, mudança de fundo do header e hover; conteúdo plenamente legível sem animação.
- **Evitar:** cards de SaaS, dourado excessivo, sombras, falsa galeria de obras.

## Sistema visual
- Tipografia: Georgia para títulos, Arial para texto e interface; fontes de sistema, sem conexão externa. Títulos com linhas curtas.
- Cor: marfim `#f5f2eb`, papel `#fbfaf7`, carvão `#1c1e1b`, texto `#343530`, pedra `#a7a296`, vermelho da marca `#842a24` usado pontualmente.
- Grid: contêiner até 1320 px; 6 colunas implícitas no desktop, empilhamento deliberado no mobile. Quebras principais em 900 e 640 px.
- Ritmo: seções de 96–150 px no desktop e 64–88 px no mobile. Imagens dominam hero, galeria e diferencial.
- Superfícies: sem cards arredondados nem sombra; linhas finas, cantos retos, grandes planos claros e carvão.
- CTA principal: mesmo link WhatsApp em todos os pontos de cotação. `data-cta` permite futura integração analítica.
- Mobile: menu com botão acessível; hero com recorte central, texto em faixa escura; CTA fixo inferior com folga no footer.

## Conteúdo e conversão
1. Oferta e cotação; 2. sinal local e avaliações; 3. visão visual ilustrativa (até receber portfólio); 4. serviços e materiais; 5. modo de trabalhar; 6. depoimentos resumidos; 7. cotação; 8. visita.
- Após clicar, abre conversa no WhatsApp com mensagem preenchida. Sem formulário e sem promessa de prazo de resposta.
- A nota e os resumos de depoimentos vieram do brief do cliente; devem ser conferidos antes da publicação definitiva.

## Mídia e implementação
- Hero WebP 1672 × 941 (154 KB), imagem secundária 1536 × 1024 (235 KB), detalhe 1024 × 1536 (124 KB). Arquivos locais, gerados com ImageGen e rotulados como ilustrativos na interface.
- Prompts de geração registrados em `.prompts/images.md`.
- CSS/JS locais, sem framework. Fontes de sistema sem conexão externa. `prefers-reduced-motion` respeitado.

## QA
| Data | Largura | Problema | Correção | Estado |
| --- | --- | --- | --- | --- |
| 2026-10-01 | 1440, 768, 390, 375 px | Primeiro teste encontrou ícone SVG inválido e fonte externa bloqueada no ambiente local | Ícone redesenhado com path válido e uso de fontes de sistema | Recaptura sem erros de console |
| 2026-10-01 | 390 px | Link de pular conteúdo aparecia parcialmente na captura e faltava espaço na quebra responsiva do título | Posição oculta corrigida e espaço incluído no HTML | Recaptura correta |
| 2026-10-01 | 1440, 768, 390, 375 px | Checagem final | Sem overflow horizontal, imagens carregadas, um H1 e menu mobile funcional | Aprovado para entrega dos arquivos |
