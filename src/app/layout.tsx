import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Julian Reza',
  icons: '/logo-black.png',
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
          <div className=" bg-white w-full dark:bg-gray-950 transition duration-300 min-h-screen relative">
            <Navbar />
            <div className=" ">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
