import { MessageCircle, MapPin, Clock } from 'lucide-react'
import { cidades, whatsappLink } from '@/lib/pizza-data'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl leading-none" aria-hidden="true">
              🍕
            </span>
            <span className="font-display text-2xl leading-none tracking-wide">
              <span className="text-primary">PIZZA EXPRESS</span> BENNE
            </span>
          </div>
          <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Pizza artesanal feita com muito amor. Massa caprichada, recheio
            generoso e aquele sabor que dá vontade de pedir de novo.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-110"
            >
              <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-transform hover:scale-110"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-foreground">Onde entregamos</h3>
          <ul className="mt-4 space-y-2">
            {cidades.map((cidade) => (
              <li key={cidade} className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {cidade}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-foreground">Horário</h3>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Terça a domingo, das 18h às 23h
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-destructive px-6 py-3 text-sm font-bold uppercase tracking-wide text-destructive-foreground transition-transform hover:scale-105"
          >
            Fazer meu pedido 🍕
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} Pizza Express Benne. Todos os direitos reservados.</p>
          <p>Feito com muito amor 🍕</p>
        </div>
      </div>
    </footer>
  )
}
