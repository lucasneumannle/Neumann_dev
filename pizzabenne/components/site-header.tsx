'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { whatsappLink } from '@/lib/pizza-data'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Especiais', href: '#especiais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Onde estamos', href: '#onde-estamos' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/70 to-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl leading-none" aria-hidden="true">
            🍕
          </span>
          <span className="font-display text-xl leading-none tracking-wide sm:text-2xl">
            <span className="text-primary">PIZZA EXPRESS</span>{' '}
            <span className="text-foreground">BENNE</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-destructive px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-destructive-foreground transition-transform hover:scale-105 sm:inline-flex"
          >
            Pedir Agora
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-base font-medium text-foreground/90 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="my-3 inline-flex items-center justify-center rounded-xl bg-destructive px-5 py-3 text-sm font-bold uppercase tracking-wide text-destructive-foreground"
            >
              Pedir Agora 🍕
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
