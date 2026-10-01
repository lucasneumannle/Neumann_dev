# Granimar — landing page

Página estática, pronta para enviar ao GitHub. Abra `index.html` em um navegador ou hospede a pasta inteira em qualquer serviço de arquivos estáticos. Não precisa instalar dependências nem executar build.

## Antes de publicar para clientes finais

1. Substitua `assets/images/hero.webp`, `kitchen.webp` e `detail.webp` por fotografias autorizadas de projetos reais da Granimar. Atualize os textos alternativos e retire os avisos de “imagen ilustrativa” **somente** onde a substituição foi feita.
2. Confirme nota, número de avaliações e resumos dos três depoimentos com as fontes originais. Atualmente vêm do briefing fornecido.
3. Após definir o domínio, configure a URL absoluta de `og:image` e, se desejado, uma tag canonical.

## Arquivos

- `index.html`: conteúdo, SEO e estrutura semântica.
- `styles.css`: layout responsivo e estados.
- `script.js`: menu e ponto de integração dos cliques de WhatsApp.
- `assets/images/`: logo fornecido e imagens conceituais otimizadas.
- `design.md`: decisões de direção de arte e conteúdo.

Todos os botões de cotação abrem o mesmo link de WhatsApp com mensagem preenchida. O script emite o evento `granimar:whatsapp-click` e usa `gtag`/`fbq` caso sejam instalados depois. A ilustração da localização é esquemática; o link “Cómo llegar” abre uma pesquisa no Google Maps.

Não há deploy configurado neste repositório.
