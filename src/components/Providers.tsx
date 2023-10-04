'use client'

import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
