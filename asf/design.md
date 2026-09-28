# Design — ASF Limpeza e Manutenção de Piscinas

## Brief verificado

- Negócio, oferta e público: serviço local de limpeza e manutenção de piscinas para clientes de Camboriú, Balneário Camboriú e região.
- Objetivo e CTA principal: iniciar orçamento pelo WhatsApp `+55 47 99710-8689`.
- Origem do tráfego e dúvidas do visitante: apresentação comercial; precisa explicar qualidade do cuidado, confiança, área atendida e caminho de contato.
- Identidade e ativos fornecidos: nome ASF; informações do Google fornecidas pelo usuário; perfil público `@asf_limpeza_de_piscinas`; fotografia atmosférica gerada para a prévia, sem alegação de trabalho real.
- Provas verificadas: nota 5,0 com 10 avaliações no Google; endereço na Av. Rio Teixeira, Bairro Rio Pequeno, Camboriú; aberto 24h; avaliações fornecidas mencionam profissionalismo, pontualidade, atenção, capricho, água cristalina, atendimento e preço; publicação sobre limpeza de pré-filtro.
- Pesquisa pública em 28/09/2026: bio do Instagram informa manutenção completa e atendimento em Balneário Camboriú e região; destaques visíveis: SPAs, remoção de manchas, trabalhos e troca de areia. Não se inferiram garantias, preços ou processos específicos.
- Restrições e pressupostos: prévia comercial; sem formulário ou backend; nenhum antes/depois factual disponível; o WhatsApp é o único fluxo de conversão.

## Referências e moodboard

| Fonte/arquivo | Princípio observado | Adaptação à marca | Não copiar |
| --- | --- | --- | --- |
| Instagram público da ASF | Linguagem direta, local e orientada à manutenção | Menções amplas a cuidado contínuo e região | Posts, fotos ou promessas não verificadas |
| Reflexos naturais em água de piscina | Caústicas, profundidade e contraste entre água calma e luz | Corte diagonal como assinatura composicional | Resort tropical ou luxo genérico |
| Etiquetas técnicas de manutenção | Confiança por observação e prevenção | Microlegendas e linhas finas próximas a detalhes do equipamento | Aparência industrial excessiva |
| Avaliações Google fornecidas | Prova social curta, atribuível e local | Trechos reais em composição editorial | Depoimentos ou nomes adicionais |

## Três conceitos antes do código

| Conceito | Tese e hero | Tipografia, cor e composição | Assinatura | Adequação e custo |
| --- | --- | --- | --- | --- |
| A — Água sob controle | Água cristalina encontra precisão técnica | Serif editorial + sans limpa; azul profundo, turquesa mineral e calcário | Lâmina d’água diagonal que organiza a página | Alta clareza, bom impacto, baixo peso |
| B — Caderno do piscineiro | Hero como ficha de inspeção e rotinas marcadas | Mono utilitária + sans; grade modular, branco e azul técnico | Marcas de medição e checklist | Muito técnico; menor desejo visual |
| C — Horizonte da Costa | Atmosfera ensolarada e regional | Sans larga; ciano claro e areia; fotos amplas | Linha de horizonte contínua | Agradável, porém mais genérico e dependente de fotografia real |

**Escolha e motivo:** A. Equilibra desejo (água cristalina) e confiança (cuidado técnico), sustenta um hero forte e funciona com poucos ativos reais.

## Direção escolhida

- **Visual thesis:** a serenidade de uma piscina pronta para usar, sustentada por um cuidado técnico que acontece antes do problema.
- **Signature element:** um recorte diagonal inspirado na divisão entre sombra profunda e água iluminada, repetido em linhas e transições de seção.
- Personalidade e materialidade: precisa, calma, local, sem ostentação.
- Cena dominante: água realista em dois níveis de luz, com equipamento discreto no extremo direito; copy repousa sobre a zona profunda.
- Fotografia: função atmosférica; enquadramento sem imóvel identificável ou pessoa; não é prova de serviço da ASF.
- Anti padrões: gradiente neon, bolhas decorativas aleatórias, grade de cards idênticos, “antes/depois” inventado, palmeiras e clichê de resort.

## Sistema visual

- Tipografia: Georgia para display (voz editorial e confiável); Segoe UI/Arial para corpo e interface; display com 0,91 de entrelinha e corpo com 1,65.
- Cores: abismo `#062B33`, oceano `#0B5361`, mineral `#23B8BC`, espuma `#EAFBFA`, calcário `#F2E9DA`, branco `#FFFFFF`, texto `#102B30`.
- Grid: container máximo 1180px; 12 colunas no desktop; blocos assimétricos 7/5 e 5/7; breakpoint principal 780px.
- Ritmo: hero imersivo; prova social condensada; serviços arejados; manutenção preventiva mais densa; CTA final amplo.
- Superfícies: cantos contidos de 14–28px; bordas finas; sombras profundas somente em mídia e CTA.
- Estados: hover com deslocamento curto e contraste; foco de 3px visível; active com escala mínima; sem controles desabilitados.
- Mobile: copy antes da mídia auxiliar, navegação simplificada, faixa de prova empilhada e CTA WhatsApp fixo com safe-area.

## Conteúdo e conversão

- Promessa inicial: água cristalina e equipamentos bem cuidados, com atendimento local.
- Sequência: adequação → prova Google → escopo do cuidado → transformação visual conceitual → prevenção → avaliações → área atendida → CTA.
- Destino: `wa.me/5547997108689` com mensagem pré-preenchida pedindo orçamento. O usuário segue a conversa no WhatsApp.

## Motion e mídia

- Cena principal: a lâmina diagonal revela lentamente o lado iluminado da água após a copy estar legível.
- Técnica: CSS e IntersectionObserver; nenhum pacote externo.
- Microinterações: sublinhado líquido, seta curta no CTA e revelação agrupada de seções.
- Mobile/reduced motion: composição estática completa; sem paralaxe ou conteúdo escondido.
- Orçamento: uma imagem WebP local (~213 KB), JavaScript abaixo de 5 KB e zero dependências.

## QA e decisões

| Data | Dispositivo/largura | Problema observado | Correção | Recaptura/estado |
| --- | --- | --- | --- | --- |
| 2026-09-28 | 1440×900 | Hero legível e assinatura diagonal preservada | Sem correções estruturais | Aprovado em captura completa |
| 2026-09-28 | 768×1024 | Elementos decorativos ampliavam a largura do documento | Lettering de fundo e linhas técnicas contidos no breakpoint | Recaptura sem overflow |
| 2026-09-28 | 390×844 | Linha da transformação avançava além da viewport | Linha limitada ao quadro no mobile | Recaptura sem overflow |

## Feedback incorporado

| Feedback | Regra alterada | Arquivo/componente afetado |
| --- | --- | --- |
| Entregar em ZIP para GitHub/domínio | Site sem build, URLs relativas e mídia local | pacote completo |

