import Providers from '@/components/Providers'
import Footer from '@/components/layout/footer/Footer'
import Navbar from '@/components/layout/navbar/Navbar'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Julian Reza - My Peronal Portfolio',
  icons: '/images/logo-black.png',
  description:
    'I am a software engineer who really interested in Frontend, Mobile, also Fullstack Development.',
  openGraph: {
    title: 'Julian Reza - My Personal Portfolio',
    description:
      'I am a software engineer who really interested in Frontend, Mobile, also Fullstack Development.',
    images: ['/images/og-image.png'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/og-image.png'] },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className)}>
        <Providers>
          <div className=" bg-white w-full isolate flex flex-col dark:bg-gray-950 transition duration-300 min-h-screen relative tracking-tighter font-normal">
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 leading-none -bottom-36 sm:-bottom-10 blur-3xl right-0 -z-10 transform-gpu overflow-hidden"
            >
              <p className=" text-[520px] text-transparent bg-gradient-to-r from-violet-500 to-violet-900 bg-clip-text opacity-50">
                JR
              </p>
            </div>
            <Navbar />
            <div className=" flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
