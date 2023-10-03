import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/layout/navbar/Navbar'
import Footer from '@/components/layout/footer/Footer'
import { Analytics } from '@vercel/analytics/react'

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Julian Reza',
  icons: '/images/logo-black.png',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <div className=" bg-white w-full flex flex-col dark:bg-gray-950 transition duration-300 min-h-screen relative tracking-tighter font-normal">
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
