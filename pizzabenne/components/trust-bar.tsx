import { Star, Pizza, Truck, Heart } from 'lucide-react'

const items = [
  { icon: Star, label: '4,8/5 no Google', fill: true },
  { icon: null, emoji: '+660', label: 'avaliações' },
  { icon: Pizza, label: 'Pizzas caprichadas' },
  { icon: Truck, label: 'Delivery' },
  { icon: Heart, label: 'Feita com muito amor', fill: true },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-5 sm:px-6 md:justify-between">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-semibold">
            {item.icon ? (
              <item.icon
                className={`h-5 w-5 text-primary ${item.fill ? 'fill-current' : ''}`}
                aria-hidden="true"
              />
            ) : (
              <span className="font-display text-2xl leading-none text-primary">
                {item.emoji}
              </span>
            )}
            <span className="text-foreground/90">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
