import Image from 'next/image'
import { whatsappLink } from '@/lib/pizza-data'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/pizzas/cta-pizza-dark.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="text-balance font-display text-4xl leading-[0.95] tracking-wide text-foreground sm:text-6xl">
            Sua próxima pizza está a{' '}
            <span className="text-gradient-gold">um clique</span> de distância
            <span aria-hidden="true"> 🍕</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
            Feita na hora, com muito amor e ingredientes selecionados. Peça agora
            e sinta a diferença.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-destructive px-10 py-5 text-lg font-bold uppercase tracking-wide text-destructive-foreground shadow-2xl shadow-destructive/30 transition-transform hover:scale-105"
          >
            Pedir Agora
          </a>
        </Reveal>
      </div>
    </section>
  )
}
