# Verificação da entrega

Executada em 02/10/2026, no Microsoft Edge Chromium em modo headless, abrindo `index.html` diretamente. Não foi feito deploy.

## Responsivo

Capturas de página completa geradas em 1440, 1280, 1024, 768, 430, 390 e 360px. Revisão visual do hero nas sete larguras, da página completa desktop e dos detalhes mobile. Nenhum overflow horizontal detectado: scrollWidth igual à largura do viewport em todas as sete medidas.

Fotos locais visíveis e fonte WOFF2 carregadas. Imagem de serviço oculta no mobile é deliberadamente dispensada nessa composição. Dimensões reservadas e srcset nas fotografias maiores.

## Funcionalidade

- Links de WhatsApp: todos usam `573016997174`, com mensagens preenchidas e codificadas.
- Anclas internas: todos os destinos existem.
- Menu móvel: abre, fecha com Escape e fecha após seleção de um link.
- Serviços: abertura do conteúdo por summary/details verificada.
- Galeria: abre, passa à próxima imagem com seta do teclado, fecha com Escape e devolve foco ao botão original.
- Reduced motion: rolagem suave desativada e efeito de vidro em estado estático.
- Mapa: clique cria iframe com destino Google Maps. A disponibilidade do conteúdo externo não foi certificada; Como chegar permanece como alternativa independente.
- Nenhum erro JavaScript registrado durante a execução.
- Sintaxe validada com `node --check script.js`.

## Conteúdo, contraste e performance

Idioma es-CO, título, meta description, Open Graph e LocalBusiness presentes. Um H1, headings hierárquicos, landmarks, labels de controles, skip link e foco visível. Avaliação vem do briefing e é identificada como tal. Fotografias de referência identificadas; não há depoimentos ou projetos fictícios atribuídos à empresa.

Contraste calculado dos tokens principais: texto escuro em fundo claro 15.40:1; CTA verde com texto claro 7.03:1; texto secundário do rodapé 9.11:1. Cinza dos títulos grandes em fundo claro 4.30:1. Isto é uma verificação dos tokens, não uma auditoria WCAG integral de cada pixel das fotografias.

Assets locais aproximadamente 905 KB no total; JavaScript aproximadamente 4 KB. Sem bibliotecas de interface, chamadas externas iniciais, analytics ou instalação. O mapa só carrega após clique. Não foi medida uma pontuação Lighthouse nem validado em aparelhos físicos ou com leitor de tela. Não há etapa de build: os arquivos entregues são o próprio site executável.
