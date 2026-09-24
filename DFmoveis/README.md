# DF Móveis & Cia — prévia comercial

Landing page conceitual, estática e local. As fotografias são placeholders gerados por IA e não representam o showroom, produtos ou projetos reais da empresa.

## Executar

Abra `index.html` diretamente no navegador ou, para testar com servidor local:

```powershell
python -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Estrutura para o domínio

O ZIP de entrega contém a pasta `DFmoveis/`. Ao extrair essa pasta na raiz pública de `neumanndev.com`, o endereço previsto é `https://neumanndev.com/DFmoveis/`.

`/DFmoveis/` é um caminho dentro do domínio. Um subdomínio teria formato `dfmoveis.neumanndev.com`. Este pacote não altera DNS ou hospedagem e não publica o site automaticamente.

## Antes de uma versão final

1. Preencha `WHATSAPP_NUMBER` no início de `script.js`, apenas com DDI + DDD + número.
2. Substitua as imagens em `assets/images/` por fotografias reais autorizadas, preservando os nomes ou atualizando os caminhos.
3. Confirme endereço, horário, área de atendimento e eventuais condições comerciais antes de publicar.
