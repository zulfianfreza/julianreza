'use client'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className=" h-10 w-10 dark:hover:ring-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-100 active:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 flex justify-center items-center"
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
    >
      <Sun className=" h-4 w-4 text-gray-600 dark:text-gray-400 rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className=" h-4 w-4 text-gray-600 dark:text-gray-400 rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100 absolute" />
    </button>
  )
}
