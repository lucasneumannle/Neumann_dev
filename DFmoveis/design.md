# Design — DF Móveis & Cia / prévia comercial

## Brief verificado
- Negócio: loja de móveis residenciais com atuação relacionada à montagem, em Porto Belo / SC, região do Alto Perequê.
- Objetivo: apresentar uma prévia comercial memorável e levar a conversa ao WhatsApp.
- Público: moradores da região pesquisando móveis para estar, jantar e conforto; tráfego provável de Instagram, Google e WhatsApp.
- Identidade fornecida: logo em azul-marinho, laranja e branco. A logo é o único ativo real usado nesta prévia.
- Restrições: site local, uma página, sem e-commerce, catálogo, backend, CMS, deploy, provas ou condições comerciais inventadas.
- Mídia: fotografias sintéticas autorizadas como atmosfera/placeholder; não representam showroom, produtos ou trabalhos reais da empresa.

## Referências e moodboard
| Fonte/arquivo | Princípio observado | Adaptação à marca | Não copiar |
| --- | --- | --- | --- |
| Logo enviada pelo cliente | Telhado aberto, marinho e laranja | Recortes diagonais e molduras abertas | Não redesenhar a marca |
| Brief fornecido | Revista de interiores + showroom digital | Escala fotográfica, respiro e títulos editoriais | Não imitar um site específico |
| Imagens sintéticas da campanha | Madeira, tecido, luz dourada, presença do marinho | Unidade visual em hero, ambientes e detalhe | Não apresentar como prova real |

## Três conceitos antes do código
| Conceito | Tese e hero | Tipografia, cor e composição | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Casa ao entardecer | Um lar contemporâneo ganha calor quando o mobiliário encontra luz e textura | Hero imersivo, marinho profundo, laranja queimado, serif editorial | Linha diagonal inspirada no telhado da logo | Melhor equilíbrio entre impacto, marca e clareza; baixo custo técnico |
| B — Caderno de materiais | A escolha começa no toque e no acabamento | Fundo mineral claro, closes, legenda técnica, grid rígido | Amostras e macrofotografia | Elegante, porém comunica menos variedade na primeira dobra |
| C — Vistas do showroom | Ambientes vistos como janelas arquitetônicas | Mosaico modular, tipografia mais racional, navegação por cenas | Molduras encaixadas | Forte para catálogo futuro, mas mais próximo de e-commerce |

**Escolha e motivo:** Conceito A. A foto dominante vende desejo, a diagonal liga a composição à marca e o contraste marinho/laranja preserva reconhecimento sem parecer varejo popular.

## Direção escolhida
- **Visual thesis:** um showroom ao entardecer, onde cada móvel aparece como parte de uma casa vivida, acolhedora e contemporânea.
- **Signature element:** a “linha de casa”, um recorte diagonal fino inspirado no telhado da marca, atravessa transições e enquadramentos.
- Personalidade: próxima, segura, tátil e editorial; premium no acabamento, não no discurso.
- Hero: fotografia panorâmica ocupando a tela, copy ancorada no vazio escuro e recorte inferior diagonal.
- Fotografia: luz natural dourada, madeira, linho e estofados; crops grandes, sem pessoas, logos ou texto embutido.
- Antipadrões: cards repetidos, selos, números, gradientes tecnológicos, catálogo, vidro fosco excessivo e prova fictícia.

## Sistema visual
- Tipografia: Cormorant Garamond para display; Manrope para interface e corpo. Fallbacks locais mantêm legibilidade se a rede estiver indisponível.
- Cores: marinho `#0E2B43`, marinho profundo `#081B2A`, laranja `#D96900`, areia `#F2EEE6`, papel `#FBF8F2`, grafite `#172027`.
- Grid: 12 colunas no desktop, 6 no tablet, 4 no mobile; container máximo 1440px; quebras em 1080px e 720px.
- Ritmo: seções amplas, alternando fotografia dominante e texto concentrado; cantos discretos de 2–18px conforme função.
- CTA: pílula sólida laranja sobre marinho ou marinho sobre fundo claro; foco visível por contorno claro.
- Mobile: hero vertical, texto abaixo da área mais escura da foto, menu em painel simples, mosaicos recompostos em uma coluna.

## Conteúdo e conversão
- Promessa: móveis que dão forma à vida dentro de casa.
- Ordem: reconhecimento imediato → ambientes → significado/qualidade → inspiração → convite ao contato.
- CTA dominante: falar com a DF Móveis; o número real está pendente e centralizado em `WHATSAPP_NUMBER` no JavaScript.
- Sem formulário. O link permanece desabilitado de forma explicativa até a configuração do número.

## Motion e mídia
- Função: revelar o hero como uma cortina editorial e conduzir a leitura com entradas discretas.
- Técnica: CSS + IntersectionObserver; sem dependências.
- Hover: zoom máximo de 3% e deslocamento breve das legendas.
- Reduced motion: transições e deslocamentos removidos; todo conteúdo permanece visível.
- Mídia: três imagens PNG geradas, com dimensões reservadas e carregamento preguiçoso abaixo da dobra.

## QA e decisões
| Data | Dispositivo/largura | Problema observado | Correção | Recaptura/estado |
| --- | --- | --- | --- | --- |
| 2026-09-24 | Desktop 1440×900 | Entradas ainda não haviam terminado na primeira captura | Aguardado estado final e recapturado; hero, ambientes, galeria e CTA inspecionados | Aprovado |
| 2026-09-24 | Tablet 768×1024 | Nenhum corte ou overflow | Navegação compactada em menu e hero mantido editorial | Aprovado |
| 2026-09-24 | Mobile 390×844 e 320×844 | CTA de WhatsApp sem número real precisava de retorno claro | Toast local explica a configuração pendente; menu, Escape, foco e largura verificados | Aprovado |
| 2026-09-24 | Auditoria estática estrita | Links `#` e botão com ação externa ao HTML foram sinalizados | Âncoras ganharam destino real e o acionador do menu ficou detectável | 0 achados |

## Feedback incorporado
| Feedback | Regra alterada | Arquivo/componente afetado |
| --- | --- | --- |
| Não baixar imagens do Instagram; gerar placeholders hiper-realistas | Toda mídia fotográfica é sintética e identificada em comentário/README | `assets/images/*`, `index.html` |
