import { destaques } from '@/lib/pizza-data'
import { PizzaCard } from '@/components/pizza-card'
import { Reveal } from '@/components/reveal'

export function DestaquesSection() {
  return (
    <section id="especiais" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-display text-lg tracking-widest text-destructive">
          AS QUERIDINHAS DA CASA
        </span>
        <h2 className="mt-2 text-balance font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          As pizzas que <span className="text-gradient-gold">todo mundo ama</span>
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Sabores campeões de pedido — testados e aprovados por quem já provou.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {destaques.map((pizza, i) => (
          <Reveal key={pizza.name} delay={i * 120}>
            <PizzaCard pizza={pizza} featured />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
