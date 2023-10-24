import type { Metadata } from 'next'
import { Orbitron, Red_Rose } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DK Portfolio',
  description: 'DK Frontend development portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
