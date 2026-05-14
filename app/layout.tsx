import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akara Ogbe — Breakfast & Local Dishes, Enugu',
  description: 'Authentic Nigerian breakfast spot in Enugu. Famous for thick pap, crispy akara, eggs, toasted bread & more. Located inside Thrillz and Groove, Independence Layout.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
