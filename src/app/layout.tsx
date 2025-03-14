import type { Metadata } from 'next'
import { Albert_Sans, Nunito_Sans, Niconne } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Container } from '@/components/ui/Container'
import '@/assets/styles/globals.scss'

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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body
        className={`${albertSans.variable} ${nunitoSans.variable} ${niconne.variable}`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Container>{children}</Container>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
