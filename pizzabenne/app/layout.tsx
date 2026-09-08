import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Pizza Express Benne | Pizza feita com muito amor 🍕',
  description:
    'Pizza artesanal, quentinha e cheia de sabor. Delivery em São Bento do Sul, Rio Negrinho, Mafra/Rio Negro e Jaraguá do Sul. Peça agora pelo WhatsApp!',
  generator: 'v0.app',
  openGraph: {
    title: 'Pizza Express Benne | Pizza feita com muito amor 🍕',
    description:
      'Pizza artesanal, quentinha e cheia de sabor. Peça agora pelo WhatsApp!',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0b08',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark bg-background ${poppins.variable} ${bebas.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
