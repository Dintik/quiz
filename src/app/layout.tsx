import type { Metadata } from 'next'
import { Albert_Sans, Nunito_Sans, Niconne } from 'next/font/google'
import '@/assets/styles/globals.css'

const albertSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin']
})

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin']
})

const niconne = Niconne({
  weight: '400',
  variable: '--font-niconne',
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
      <body
        className={`${albertSans.variable} ${nunitoSans.variable} ${niconne.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
