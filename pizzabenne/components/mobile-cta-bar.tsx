import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/pizza-data'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 text-base font-bold uppercase tracking-wide text-whatsapp-foreground"
      >
        <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
        Pedir pelo WhatsApp
      </a>
    </div>
  )
}
