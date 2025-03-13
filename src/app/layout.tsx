import type { Metadata } from 'next'
import { Albert_Sans, Nunito_Sans } from 'next/font/google'
import '@/assets/styles/globals.css'

const geistSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin']
})

const geistMono = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'This app is a test job for a frontend developer position'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
