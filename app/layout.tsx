import './globals.css'
import { Inter, Montserrat, Space_Grotesk } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import Providers from './providers'
import { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata = {
  title: 'Nexus Digital - Premium Digital Marketing Agency',
  description: 'Transform your brand with cutting-edge digital marketing strategies that drive real results. From concept to conversion, we craft experiences that matter.',
  openGraph: {
    title: 'Nexus Digital - Premium Digital Marketing Agency',
    description: 'Transform your brand with cutting-edge digital marketing strategies that drive real results. From concept to conversion, we craft experiences that matter.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter antialiased bg-background text-foreground">
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}