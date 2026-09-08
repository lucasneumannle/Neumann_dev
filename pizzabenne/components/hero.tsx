import Image from 'next/image'
import { Star, MapPin } from 'lucide-react'
import { whatsappLink } from '@/lib/pizza-data'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 pb-10 sm:pt-28 lg:pt-32"
    >
      {/* glow de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-destructive/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-4">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            4,8 no Google • +660 avaliações
          </span>

          <h1 className="mt-5 text-balance font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
            <span className="text-foreground">PIZZA FEITA COM</span>{' '}
            <span className="text-gradient-gold">MUITO AMOR</span>{' '}
            <span aria-hidden="true">🍕</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Seu momento fica ainda melhor com uma pizza caprichada, quentinha e
            cheia de sabor.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:justify-start">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-destructive px-8 py-4 text-base font-bold uppercase tracking-wide text-destructive-foreground shadow-lg shadow-destructive/30 transition-transform hover:scale-105"
            >
              Pedir Agora 🍕
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary/10"
            >
              Ver Cardápio
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-pretty">
              São Bento do Sul • Rio Negrinho • Mafra/Rio Negro • Jaraguá do Sul
            </span>
          </p>
        </div>

        <div className="relative z-0 mx-auto w-full max-w-lg">
          <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-destructive/20 blur-2xl" />
          <div className="relative aspect-square animate-float overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl shadow-black/70">
            <Image
              src="/pizzas/hero-pizza.png"
              alt="Pizza artesanal recém-saída do forno com queijo derretendo"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -right-2 top-6 rotate-6 rounded-2xl bg-card/90 px-4 py-3 text-center shadow-xl backdrop-blur-sm">
            <span className="block font-display text-3xl leading-none text-primary">4,8</span>
            <span className="text-xs text-muted-foreground">no Google</span>
          </span>
        </div>
      </div>
    </section>
  )
}
