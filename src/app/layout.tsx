import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/layout/navbar/Navbar'
import Footer from '@/components/layout/footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'

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
              {/* <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-700 opacity-[15%] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              /> */}
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
