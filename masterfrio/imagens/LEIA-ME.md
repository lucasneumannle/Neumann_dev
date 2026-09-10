# Imagens da LP — Master Frio Climatização

## Já prontas (geradas do logo oficial)
- `logo-master-frio.png` — logo em PNG com fundo transparente (640px). É o herói visual da página.
- `logo-master-frio-180.png` — apple-touch-icon
- `favicon.png` — 64px

O hero **não depende mais de foto de banco de imagens** — ele é tipográfico + mascote.
Só a galeria usa fotos.

## Faltam: 4 fotos da galeria
A página não quebra sem elas: cada slot vira um bloco gelo com o rótulo do serviço.
Mas com foto real converte mais.

| Arquivo | O que procurar |
|---|---|
| `galeria-instalacao-split.jpg` | instalação de split na parede |
| `galeria-higienizacao-evaporadora.jpg` | limpeza/higienização da evaporadora |
| `galeria-manutencao-condensadora.jpg` | técnico na condensadora (unidade externa) |
| `galeria-split-escritorio.jpg` | split em escritório ou comércio |

Proporção usada: 3/4 (retrato). Recorte para ~900×1200.

### Onde buscar (licença livre)
- Unsplash: https://unsplash.com/s/photos/hvac
- Pexels: https://www.pexels.com/search/air%20conditioner%20technician/
- Pixabay: https://pixabay.com/images/search/air%20conditioning/

Critério: técnico real, luz natural, tons frios/neutros para casar com o azul da marca.
Evitar foto corporativa clichê e qualquer coisa com cara de IA.

### Otimização
- Máx. 1200px no lado maior, WebP ou JPG q80, abaixo de 180 KB cada.

## Se a Master Frio mandar fotos reais
Prioridade total. Salvar com os mesmos nomes e apagar do `index.html` a linha:
`<p class="nota">Imagens ilustrativas de banco de imagens.</p>`
