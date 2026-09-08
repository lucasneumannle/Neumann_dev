import { MapPin, Clock, MessageCircle } from 'lucide-react'
import { cidades, whatsappLink } from '@/lib/pizza-data'
import { Reveal } from '@/components/reveal'

export function LocationSection() {
  return (
    <section
      id="onde-estamos"
      className="scroll-mt-20 border-t border-border bg-card/30 py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="font-display text-lg tracking-widest text-destructive">
            ONDE ESTAMOS
          </span>
          <h2 className="mt-2 text-balance font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            Delivery na sua <span className="text-gradient-gold">cidade</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Levamos nossas pizzas quentinhas até você. Confira as regiões que
            atendemos e faça já o seu pedido pelo WhatsApp.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {cidades.map((cidade) => (
              <li
                key={cidade}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground">{cidade}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
            <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-foreground/90">
              Aberto de <strong className="text-foreground">terça a domingo</strong>, das 18h às 23h
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary p-8 text-center shadow-xl shadow-black/40">
            <span className="text-5xl" aria-hidden="true">
              🍕
            </span>
            <h3 className="text-balance font-display text-3xl tracking-wide text-foreground">
              Bateu aquela vontade?
            </h3>
            <p className="text-pretty text-muted-foreground">
              É rápido e fácil: chame a gente no WhatsApp e receba sua pizza
              quentinha em casa.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
              Pedir pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
