# Metalli Steel — Landing Page

Landing page institucional e comercial da Metalli Steel, construída em React + Vite. O projeto usa conteúdo e imagens reais do perfil oficial da empresa, sem dados ou provas fictícias.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abra o endereço informado pelo Vite (por padrão, `http://127.0.0.1:5173`).

## Build de produção

```bash
npm run build
```

Os arquivos finais são gerados em `dist/`.

## Verificações

```bash
npm run lint
npm run test
npm run build
```

## Onde alterar conteúdo

- Telefone e mensagem do WhatsApp: constante `WHATSAPP` em `src/App.jsx`.
- Endereço, Instagram e CNPJ: componentes `Location` e `Footer` em `src/App.jsx`.
- Serviços e imagens associadas: array `capabilities` em `src/App.jsx`.
- Trabalhos da galeria: array `projects` em `src/App.jsx`.
- Metadados de busca e dados estruturados: `index.html`.
- Cores, tipografia, espaçamento e breakpoints: tokens no início de `src/styles.css`.
- Direção de arte e decisões permanentes: `DESIGN.md`.

## Assets

Os arquivos de imagem ficam em `public/images/`:

- `metalli-logo.jpg`: marca fornecida pelo cliente.
- `corte-plasma.jpg`, `corte-personalizado.jpg`, `dobra-cnc.jpg`, `fueiros.jpg`, `fueiro-aplicado.jpg`, `cacamba.jpg` e `escudo-cilindro.jpg`: materiais publicados no Instagram oficial `@metalli.steel`.

Antes de uma publicação pública, confirme com a empresa a autorização final de uso dos materiais e revise telefone, endereço e portfólio.

## Estrutura

```text
public/images/   imagens reais e logo
src/App.jsx      conteúdo e componentes da página
src/styles.css   sistema visual e responsividade
qa/              capturas finais desktop, tablet, mobile e reduced motion
DESIGN.md        direção de arte, tokens e registro de QA
UX-CONTRACT.md   contrato de comportamento e acessibilidade
```

Este projeto não inclui configuração de deploy ou domínio.
