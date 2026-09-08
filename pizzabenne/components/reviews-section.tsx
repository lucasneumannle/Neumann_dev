import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reviews = [
  {
    name: 'Ana Paula',
    text: 'A melhor pizza da região! Massa perfeita, recheio generoso e chega quentinha. A Moda da Casa é simplesmente sensacional.',
  },
  {
    name: 'Carlos Eduardo',
    text: 'Peço toda semana. Atendimento nota mil pelo WhatsApp e entrega sempre rápida. A Pizza Express nunca decepciona!',
  },
  {
    name: 'Juliana Martins',
    text: 'As pizzas doces são um espetáculo à parte. A de Prestígio é viciante! Feita com muito amor mesmo, dá pra sentir.',
  },
]

export function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-primary text-primary" aria-hidden="true" />
          ))}
        </div>
        <h2 className="mt-3 text-balance font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          <span className="text-gradient-gold">4,8 estrelas</span> no Google
        </h2>
        <p className="mt-3 text-muted-foreground">
          Mais de 660 avaliações de clientes apaixonados.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={i * 120}>
            <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/30">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 text-pretty leading-relaxed text-foreground/90">
                {`"${review.text}"`}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-display text-lg text-primary">
                  {review.name.charAt(0)}
                </span>
                <span className="font-semibold text-foreground">{review.name}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
