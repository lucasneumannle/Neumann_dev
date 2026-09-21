# IFCS Esquadrias — Landing Page

Landing page estática em React/Vite, preparada para execução local e posterior publicação pelo cliente.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Produção

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Onde atualizar os dados

- Telefones, e-mail, WhatsApp, endereços e área atendida: `src/data/company.js`.
- O WhatsApp está desativado por segurança até que o número ativo seja confirmado. Preencha `whatsapp` em `src/data/company.js` para habilitar essa integração em uma futura edição.
- Produtos e tipos do formulário: `src/data/services.js`.
- Textos e seções: `src/main.jsx`.
- Estilos: `src/styles.css`.
- Logotipo original: `public/images/logo-original.png`. O recorte usado no cabeçalho está em `public/images/logo-header.png`.
- Imagem de hero ilustrativa: `public/images/hero-architecture.png`.

## Observações

- A seção “Referências visuais” usa tratamento gráfico conceitual e informa expressamente que não representa obras executadas pela IFCS.
- O formulário não requer backend. Ao enviar, ele abre o aplicativo de e-mail do visitante com a solicitação preenchida para `ifcs.esquadrias@yahoo.com.br`.
- Antes de divulgar a página, confirme o contato de WhatsApp e quaisquer informações comerciais adicionais.
