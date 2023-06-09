import { ReactNode } from 'react'

// Tailwind
import 'tailwindcss/tailwind.css'

export const metadata = { title: 'Create Next App' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-black text-white w-full flex flex-col items-center'>
        {children}
      </body>
    </html>
  )
}
