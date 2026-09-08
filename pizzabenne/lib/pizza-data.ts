export const WHATSAPP_NUMBER = '5547999578961'

export function whatsappLink(pizzaName?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const message = pizzaName
    ? `Olá! Gostaria de pedir uma Pizza Express Benne. Tenho interesse na pizza ${pizzaName}.`
    : 'Olá! Gostaria de fazer um pedido na Pizza Express Benne. 🍕'
  return `${base}?text=${encodeURIComponent(message)}`
}

export type Pizza = {
  name: string
  description: string
  image?: string
  badge?: string
}

// Imagens reais geradas para sabores em destaque; demais usam foto representativa por categoria.
const IMG = {
  calabresa: '/pizzas/calabresa.png',
  baconCheddar: '/pizzas/bacon-cheddar.png',
  quatroQueijos: '/pizzas/quatro-queijos.png',
  frangoCatupiry: '/pizzas/frango-catupiry.png',
  marguerita: '/pizzas/marguerita.png',
  express: '/pizzas/pizza-express.png',
  modaDaCasa: '/pizzas/moda-da-casa.png',
  brigadeiro: '/pizzas/doce-brigadeiro.png',
  prestigio: '/pizzas/doce-prestigio.png',
}

export const especiais: Pizza[] = [
  {
    name: 'Pizza Express',
    description:
      'Molho de tomate, queijo mussarela, strogonoff de filé, milho coberto com creme de leite extra e orégano.',
    image: IMG.express,
    badge: 'A mais pedida',
  },
  {
    name: 'Frango e Brócolis',
    description: 'Molho de tomate, frango, brócolis coberto com requeijão e orégano.',
    image: IMG.frangoCatupiry,
    badge: 'Especial',
  },
  {
    name: 'Frango e Requeijão Tipo Catupiry',
    description: 'Molho de tomate, queijo mussarela, frango coberto com requeijão e orégano.',
    image: IMG.frangoCatupiry,
    badge: 'Especial',
  },
  {
    name: 'Frango e Cheddar',
    description: 'Molho de tomate, queijo mussarela, frango coberto com cheddar e orégano.',
    image: IMG.baconCheddar,
    badge: 'Especial',
  },
  {
    name: 'Frango e Cream Cheese',
    description: 'Molho de tomate, queijo mussarela, frango coberto por cream cheese e orégano.',
    image: IMG.frangoCatupiry,
    badge: 'Especial',
  },
]

export const destaques: Pizza[] = [
  {
    name: 'Moda da Casa',
    description:
      'Palmito, cubos de filé, bacon em cubos com cobertura de requeijão cremoso e orégano.',
    image: IMG.modaDaCasa,
    badge: '🔥 Mais pedida',
  },
  {
    name: 'Pizza Express',
    description:
      'Strogonoff de filé, milho coberto com creme de leite extra e orégano.',
    image: IMG.express,
    badge: '⭐ Favorita da casa',
  },
  {
    name: 'Quatro Queijos',
    description:
      'Requeijão cremoso, cream cheese e camada extra de queijo mussarela e orégano.',
    image: IMG.quatroQueijos,
    badge: '❤️ Queridinha',
  },
]

export const salgadas: Pizza[] = [
  { name: 'Alho e Óleo', description: 'Molho de tomate, queijo mussarela, molho de alho e orégano.' },
  { name: 'Bacon', description: 'Molho de tomate, queijo mussarela, delicioso bacon em cubos e orégano.' },
  {
    name: 'Bacon com Cheddar',
    description:
      'Molho de tomate, queijo mussarela, delicioso bacon em cubos acompanhado com cobertura de cheddar e orégano.',
    image: IMG.baconCheddar,
  },
  {
    name: 'Bacon com Cream Cheese',
    description:
      'Molho de tomate, queijo mussarela, delicioso bacon em cubos com cobertura em cream cheese e orégano.',
  },
  {
    name: 'Bacon com Milho',
    description:
      'Molho de tomate, queijo mussarela, delicioso bacon em cubos acompanhado com milho e orégano.',
  },
  {
    name: 'Bolonhesa',
    description:
      'Molho de tomate, queijo mussarela, carne moída coberta com requeijão cremoso e orégano.',
  },
  {
    name: 'Brasileira',
    description:
      'Molho de tomate, queijo mussarela, frango, milho e cobertura de requeijão cremoso e orégano.',
  },
  { name: 'Brócolis', description: 'Molho de tomate, queijo mussarela, brócolis picado e orégano.' },
  {
    name: 'Brócolis com Requeijão Tipo Catupiry',
    description: 'Molho de tomate, queijo mussarela, brócolis picado coberto com requeijão e orégano.',
  },
  {
    name: 'Brócolis com Bacon',
    description:
      'Molho de tomate, queijo mussarela, bacon em cubos, brócolis picado com cobertura de requeijão cremoso e orégano.',
  },
  {
    name: 'Brócolis com Palmito',
    description: 'Molho de tomate, queijo mussarela, brócolis picado com cubos de palmito e orégano.',
  },
  {
    name: 'Calabresa',
    description: 'Molho de tomate, queijo mussarela, calabresa em rodelas e orégano.',
    image: IMG.calabresa,
  },
  {
    name: 'Calabresa Apimentada',
    description: 'Molho de tomate, queijo mussarela, calabresa em rodelas, molho de pimenta e orégano.',
    image: IMG.calabresa,
  },
  {
    name: 'Calabresa Acebolada',
    description:
      'Molho de tomate, queijo mussarela, calabresa em rodelas acompanhadas de cebola e orégano.',
    image: IMG.calabresa,
  },
  { name: 'Cheddar', description: 'Molho de tomate, queijo mussarela coberto por requeijão cheddar e orégano.' },
  {
    name: 'Cinco Queijos',
    description:
      'Molho de tomate, queijo mussarela, requeijão cremoso, cream cheese, camada extra de queijo e orégano.',
    image: IMG.quatroQueijos,
  },
  {
    name: 'Crocante com Batata',
    description:
      'Molho de tomate, queijo mussarela, bacon em cubos com cobertura de requeijão cremoso, batata palha e orégano.',
  },
  {
    name: 'Frango com Bacon',
    description: 'Molho de tomate, queijo mussarela, frango, bacon em cubos com requeijão e orégano.',
  },
  {
    name: 'Frango e Brócolis',
    description: 'Molho de tomate, queijo mussarela, frango, brócolis coberto com requeijão e orégano.',
  },
  {
    name: 'Frango e Requeijão Tipo Catupiry',
    description: 'Molho de tomate, queijo mussarela, frango coberto com requeijão e orégano.',
    image: IMG.frangoCatupiry,
  },
  {
    name: 'Frango e Cheddar',
    description: 'Molho de tomate, queijo mussarela, frango coberto com cheddar e orégano.',
  },
  {
    name: 'Frango e Cream Cheese',
    description: 'Molho de tomate, queijo mussarela, frango coberto por cream cheese e orégano.',
  },
  {
    name: 'Marguerita',
    description:
      'Molho de tomate, queijo mussarela, tomate em rodelas com um toque especial de manjericão desidratado.',
    image: IMG.marguerita,
  },
  {
    name: 'Mexicana Apimentada',
    description:
      'Molho de tomate, queijo mussarela, bacon em cubos acompanhado de molho de pimenta e orégano.',
  },
  { name: 'Milho', description: 'Molho de tomate, queijo mussarela, milho e orégano.' },
  {
    name: 'Milho com Requeijão Tipo Catupiry',
    description: 'Molho de tomate, queijo mussarela, milho coberto com requeijão e orégano.',
  },
  {
    name: 'Moda da Casa',
    description:
      'Molho de tomate, queijo mussarela, palmito, cubos de filé, bacon em cubos com cobertura de requeijão cremoso e orégano.',
    image: IMG.modaDaCasa,
  },
  {
    name: 'Napolitana',
    description:
      'Molho de tomate, queijo mussarela, tomate em rodelas, camada extra de queijo mussarela e orégano.',
    image: IMG.marguerita,
  },
  { name: 'Palmito', description: 'Molho de tomate, queijo mussarela, palmito em cubos e orégano.' },
  {
    name: 'Paulista Especial',
    description:
      'Molho de tomate, queijo mussarela, rodelas de tomate, calabresa, cubos de filé cobertos com queijo mussarela e orégano.',
  },
  {
    name: 'Peito de Peru',
    description: 'Molho de tomate, queijo mussarela, peito de peru coberto com requeijão cremoso e orégano.',
  },
  {
    name: 'Peito de Peru e Palmito',
    description: 'Molho de tomate, queijo mussarela, peito de peru, palmito e orégano.',
  },
  {
    name: 'Peito de Peru e Tomate',
    description:
      'Molho de tomate, queijo mussarela, rodelas de tomate, peito de peru coberto com requeijão cremoso e orégano.',
  },
  {
    name: 'Quatro Queijos',
    description:
      'Molho de tomate, queijo mussarela, requeijão cremoso, cream cheese e camada extra de queijo mussarela e orégano.',
    image: IMG.quatroQueijos,
  },
  {
    name: 'Quatro Nachos com Doritos',
    description:
      'Molho de tomate, queijo mussarela, carne moída temperada com cobertura de requeijão cheddar, Doritos e orégano.',
  },
]

export const doces: Pizza[] = [
  {
    name: 'Banana Cremosa',
    description: 'Queijo mussarela, banana, chocolate branco, chocolate preto, creme de leite e cappuccino.',
  },
  { name: 'Bis', description: 'Queijo mussarela, chocolate preto, chocolate branco, Bis picado e creme de leite.' },
  {
    name: 'Brigadeiro Branco',
    description: 'Queijo mussarela, chocolate branco, chocolate granulado e creme de leite.',
    image: IMG.brigadeiro,
  },
  {
    name: 'Brigadeiro Preto',
    description: 'Queijo mussarela, chocolate preto, chocolate granulado e creme de leite.',
    image: IMG.brigadeiro,
  },
  {
    name: 'Capuccino',
    description: 'Queijo mussarela, chocolate preto, chocolate branco, cappuccino e creme de leite.',
  },
  { name: 'Chocolate Branco', description: 'Queijo mussarela, chocolate branco.', image: IMG.prestigio },
  { name: 'Chocolate Preto', description: 'Queijo mussarela, chocolate preto.', image: IMG.brigadeiro },
  {
    name: 'Chokito Branco',
    description: 'Queijo mussarela, chocolate branco, amendoim moído e creme de leite.',
  },
  {
    name: 'Chokito Preto',
    description: 'Queijo mussarela, chocolate preto, amendoim moído e creme de leite.',
  },
  { name: 'Confete', description: 'Queijo mussarela, chocolate preto, confete e creme de leite.' },
  {
    name: 'Dois Amores',
    description: 'Queijo mussarela, chocolate preto, chocolate branco e creme de leite.',
  },
  {
    name: 'Pina',
    description: 'Queijo mussarela, chocolate branco, abacaxi em cubos, coco ralado e creme de leite.',
    image: IMG.prestigio,
  },
  {
    name: 'Prestígio Branco',
    description: 'Queijo mussarela, chocolate branco, coco ralado e creme de leite.',
    image: IMG.prestigio,
  },
  {
    name: 'Prestígio Preto',
    description: 'Queijo mussarela, chocolate preto, coco ralado e creme de leite.',
    image: IMG.brigadeiro,
  },
]

export const cidades = [
  'São Bento do Sul',
  'Rio Negrinho',
  'Mafra / Rio Negro',
  'Jaraguá do Sul',
]
