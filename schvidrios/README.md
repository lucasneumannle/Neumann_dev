# SCH Vidrios Planos

Landing page completa em espanhol colombiano. Arquivos estáticos, sem instalação, dependências ou etapa de build. Não foi publicada.

## Abrir a prévia

Abra `index.html` no navegador. Fotos, fonte, CSS e JavaScript estão incluídos. WhatsApp, Instagram e o mapa precisam de conexão.

## Subir no GitHub

1. Crie um repositório e envie **o conteúdo desta pasta**: `index.html`, `styles.css`, `script.js`, `assets/` e demais arquivos.
2. Para usar GitHub Pages, abra Settings → Pages → Deploy from a branch → main → / (root) → Save.
3. Para usar Vercel, importe o repositório, selecione o preset **Other**, deixe Build Command vazio e Output Directory na raiz (`.`).

Também funciona como subpasta de GitHub Pages: os caminhos dos assets são relativos.

## Conteúdo e contato

Todos os botões de cotação usam +57 301 699 7174. Os textos e dados estão em `index.html`, as mensagens de WhatsApp em `script.js` e nos atributos `data-message`. Não há backend, formulário, rastreamento, depoimentos fictícios ou números inventados de projetos.

O logo original enviado está em `assets/logo-original.png`, preservado. O favicon é uma adaptação geométrica para identificação da aba; o logo original permanece como marca na página.

## Fotografias e fonte

Não foi possível acessar as fotos do Instagram durante a execução. As imagens incluídas são **referências de arquitetura**, identificadas no site; não representam obras da SCH. Antes de usar a página como portfólio oficial, substitua as imagens por fotos autorizadas do cliente e atualize os títulos, alt texts e avisos correspondentes.

Imagens obtidas do Unsplash, licença: https://unsplash.com/license

| Arquivos locais | Origem |
| --- | --- |
| living-*.webp | https://images.unsplash.com/photo-1600607687920-4e2a09cf159d |
| hero-*.webp | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |
| office-*.webp | https://images.unsplash.com/photo-1497366811353-6870744d04b2 |
| detail-*.webp | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c |

Variantes WebP de 800 e 1600 pixels. Nenhuma imagem temporária do Instagram nem hotlink utilizado. A fonte Manrope é local, distribuída sob SIL Open Font License; consulte `assets/OFL.txt`.

## Observações para publicação

Endereço, horário e avaliação de 4.8 / aproximadamente 53 resenhas foram fornecidos no briefing. A página explicita a origem da avaliação; não foram criadas citações de avaliações. O schema usa somente nome, endereço, telefone, Instagram e horário.

Como ainda não há domínio definido, ajuste `og:image` em `index.html` para a URL absoluta da imagem após escolher o endereço publicado. Pode então adicionar `og:url` e canonical com a URL real. Não há domínio fictício nem sitemap com endereço inventado.

O mapa é carregado somente quando o visitante clica, sem chave de API. O botão Como chegar funciona independentemente do mapa. Google pode restringir o embed em certos navegadores/redes.

## Verificação

Consulte `QA.md` para verificações realmente executadas. Nenhuma pontuação Lighthouse é prometida sem medição.
