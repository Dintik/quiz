import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function EmailPage() {
  const t = useTranslations()

  return (
    <div>
      <div>
        <div>
          <h1>{t('email.title')}</h1>
          <p>{t('email.description')}</p>
        </div>

        <input type='email' placeholder={t('email.placeholder')} />

        <p>
          {t('email.privacy_notice')}{' '}
          <Link href={'#privacyPolicy'}>{t('email.privacy_policy')}</Link>{' '}
          {t('common.and')}{' '}
          <Link href={'#termsOfUse'}>{t('email.terms_of_use')}</Link>.
        </p>
      </div>

      <Link href={'/result'}>{t('common.next')}</Link>
    </div>
  )
}
