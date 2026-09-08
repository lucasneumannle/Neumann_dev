'use client'

import { useState } from 'react'
import { salgadas, especiais, doces, type Pizza } from '@/lib/pizza-data'
import { PizzaCard } from '@/components/pizza-card'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const tabs: { id: string; label: string; data: Pizza[] }[] = [
  { id: 'salgadas', label: 'Salgadas', data: salgadas },
  { id: 'especiais', label: 'Especiais', data: especiais },
  { id: 'doces', label: 'Doces', data: doces },
]

export function MenuSection() {
  const [active, setActive] = useState('salgadas')
  const current = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <section
      id="cardapio"
      className="scroll-mt-20 border-y border-border bg-card/30 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-display text-lg tracking-widest text-destructive">
            NOSSO CARDÁPIO
          </span>
          <h2 className="mt-2 text-balance font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            Escolha a sua <span className="text-gradient-gold">favorita</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Mais de 50 sabores de pizzas salgadas, especiais e doces. Toda pizza
            acompanha muito capricho e carinho.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition-all',
                active === tab.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.data.map((pizza) => (
            <PizzaCard key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}
