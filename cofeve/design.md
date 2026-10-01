# Direção de design — CONSTRULEV

## Brief verificado
- Empresa de Villavicencio, Meta. Soluções sob medida em alumínio, aço e vidro; portas, janelas e barandas.
- Conversão principal: conversa de cotação no WhatsApp, com convite para enviar fotos e medidas.
- Ativos fornecidos: imagem original da marca. Fotos próprias não estavam acessíveis no Instagram durante esta produção.
- Dados de avaliação (4,8/5; 27 resenhas) e relatos dos clientes vieram do briefing e devem ser conferidos antes de publicação.
- Esta entrega é uma prévia comercial estática, sem deploy.

## Referências e moodboard
| Fonte | Princípio observado | Adaptação | Limite |
| --- | --- | --- | --- |
| Logo fornecido | Preto, alumínio escovado e gesto laranja | Wordmark tipográfico e laranja contido nos CTAs | Não redesenhar símbolo original |
| Briefing do cliente | Arquitetura residencial, precisão e materialidade | Linhas de esquadria, fotografias em grande escala e legendas técnicas | Sem alegar obras não comprovadas |
| Fotografias de ambientação geradas para a prévia | Relação entre vidro, perfis e espaço | Hero, galeria e detalhe | Nunca apresentar como portfólio real |

## Três conceitos antes do código
| Conceito | Tese e hero | Composição | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Plano aberto | Fachada envidraçada com texto branco sobre faixa escura | Hero amplo, seções claras, imagens assimétricas | Linha fina em ângulo, como encontro de perfis | Comunica produto de imediato; requer foto forte |
| B — Oficina editorial | Close de material com grande título preto | Mais texto e macrofotografia, grid denso | Numeração técnica | Boa materialidade, mas menos clareza sobre aplicações |
| C — Galeria silenciosa | Painéis fotográficos sequenciais, título mínimo | Ritmo museográfico e muito espaço vazio | Molduras contínuas | Sofisticado, porém adia a oferta e o CTA |

**Escolha:** A, combinando a escala arquitetônica com a materialidade do conceito B. O primeiro viewport explica oferta, praça e próximo passo.

## Direção escolhida
- **Tese visual:** precisão arquitetônica acessível para espaços residenciais e comerciais em Villavicencio.
- **Assinatura:** filetes que lembram os encontros de perfis de alumínio, números discretos e imagens enquadradas em cortes retos.
- **Hero:** fachada contemporânea com vidro e alumínio; texto em área escurecida para contraste estável.
- **Fotografia:** imagens conceituais geradas, com aviso junto à galeria; substituição futura por fotos reais da empresa.
- **Antipadrões:** cartões SaaS iguais, ícones industriais, efeito de vidro artificial, gradientes coloridos e alegações sem prova.

## Sistema visual
- Display: Arial/Helvetica sans, peso 600–700, tracking negativo; corpo: mesma família com entrelinha confortável. Sem requisição de fonte externa.
- Fundo principal `#f3f2ee`, superfícies `#fafaf7`, carvão `#111312`, grafite `#222524`, alumínio `#969a98`, linha `#d8dad6`, acento `#e46f30` derivado do logo.
- Contêiner até 1440 px; gutters `clamp(20px, 4.2vw, 72px)`. Desktop em 12 colunas flexíveis; mobile recompõe em coluna única.
- Espaçamento amplo entre blocos, mas compactação deliberada do hero no celular. Raios mínimos; sem sombras grandes.
- CTA primário laranja ou claro em fundo escuro; foco visível. Links internos com sublinhado/linha curta.
- Fotografias com proporções reservadas e `object-fit: cover`; imagens abaixo da dobra carregam sob demanda.

## Conteúdo e conversão
1. Oferta + localização + ação no hero.
2. Soluções concretas e usos visuais.
3. Indícios de confiança e materiais.
4. Caminho simples de cotação: fotos, medidas aproximadas e conversa.
5. CTA final e contato/localização.
- Todos os CTAs principais usam WhatsApp com mensagem pré-preenchida. Não há formulário.

## Motion e mídia
- Revelação curta de conteúdo na rolagem e zoom leve em imagem ao hover, apenas para orientar o olhar.
- `prefers-reduced-motion` desativa animação. Conteúdo permanece disponível sem JavaScript.
- Imagens WebP locais; logo JPG original local; nenhuma biblioteca de interface ou fonte externa.

## QA e decisões
| Data | Largura | Verificação | Estado |
| --- | --- | --- | --- |
| 2026-10-01 | 375, 390, 430, 768 e 1440 px | Capturas completas no Microsoft Edge; sem overflow horizontal | Aprovado |
| 2026-10-01 | 390 e 1440 px | Hero, galeria, processo, CTA e rodapé revistos visualmente | Aprovado |
| 2026-10-01 | 390 px | Menu abre/fecha, links internos, 14 links WhatsApp e imagens locais | Aprovado |
| 2026-10-01 | 390 px | `prefers-reduced-motion: reduce` mantém conteúdo visível | Aprovado |

As capturas inicialmente mostraram caixas cinzas abaixo da dobra porque o navegador de captura não acionou o carregamento preguiçoso durante um screenshot de página inteira. Repeti a captura com as imagens forçadas a carregar; os arquivos foram exibidos corretamente. Corrigi as dimensões intrínsecas da foto vertical e refinei a atribuição das avaliações e do mapa ilustrativo.
