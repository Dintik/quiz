'use client'
import { Button } from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function ResultPage() {
  const t = useTranslations()

  return (
    <div>
      <div>
        <div>
          <h1>{t('result.title')}</h1>
          <p>{t('result.description')}</p>
        </div>

        {/* TODO: check-icon */}
      </div>

      <button onClick={() => null}>{t('result.download')}</button>
      <Link href={'/quiz/1'}>{t('result.retake')}</Link>
      <Button onClick={() => null}>{t('result.retake')}</Button>
      <Button isLoading onClick={() => null}>
        {t('result.retake')}
      </Button>
    </div>
  )
}
