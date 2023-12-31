'use client'

import { useTheme } from 'next-themes'
import { LuCloudMoon, LuCloudSun, LuMoon, LuSun } from 'react-icons/lu'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      aria-label="theme-toggle"
      className=" h-10 w-10 dark:hover:ring-gray- 700 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-100 active:outline-none flex justify-center items-center rounded-lg"
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
    >
      <LuCloudMoon
        size={20}
        className="text-gray-950 dark:text-gray-50 rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0 absolute"
      />
      <LuCloudSun
        size={20}
        className=" text-gray-950 dark:text-gray-50 rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100 absolute"
      />
    </button>
  )
}
