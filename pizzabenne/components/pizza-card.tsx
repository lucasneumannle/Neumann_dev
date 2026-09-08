import Image from 'next/image'
import { Pizza as PizzaIcon } from 'lucide-react'
import { type Pizza, whatsappLink } from '@/lib/pizza-data'
import { cn } from '@/lib/utils'

export function PizzaCard({
  pizza,
  featured = false,
}: {
  pizza: Pizza
  featured?: boolean
}) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-black/60',
        featured && 'ring-1 ring-primary/40',
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {pizza.image ? (
          <Image
            src={pizza.image || '/placeholder.svg'}
            alt={`Pizza ${pizza.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-background">
            <PizzaIcon className="h-12 w-12 text-primary/40" aria-hidden="true" />
          </div>
        )}
        {pizza.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-bold uppercase tracking-wide text-destructive-foreground shadow-md">
            {pizza.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-2xl leading-none tracking-wide text-primary">
          {pizza.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {pizza.description}
        </p>
        <a
          href={whatsappLink(pizza.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-destructive px-4 py-3 text-sm font-bold uppercase tracking-wide text-destructive-foreground transition-colors hover:brightness-110"
        >
          Pedir 🍕
        </a>
      </div>
    </article>
  )
}
