'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Joi from 'joi'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.scss'

const emailSchema = Joi.string().email({ tlds: false }).required().messages({
  'string.empty': 'Email is required',
  'string.email': 'Invalid email'
})

export default function EmailPage() {
  const t = useTranslations()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = () => {
    const { error } = emailSchema.validate(email)
    if (error) {
      setError(error.message)
      return false
    }
    setError('')
    return true
  }

  const handleNext = () => {
    if (validateEmail()) {
      router.push('/result')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError('')
  }

  const isButtonDisabled = !email || !!error

  return (
    <div className={styles.email}>
      <div className={styles.email__content}>
        <div className={styles.email__header}>
          <h1 className={styles.email__title}>{t('email.title')}</h1>
          <p className={styles.email__desc}>{t('email.description')}</p>
        </div>

        <div className={styles.email__inputGroup}>
          <input
            className={styles.email__input}
            type='email'
            placeholder={t('email.placeholder')}
            value={email}
            onChange={handleEmailChange}
          />
          {error && <p className={styles.email__error}>{error}</p>}
        </div>

        <p className={styles.email__terms}>
          {t('email.privacy_notice')}{' '}
          <Link href={'#privacyPolicy'}>{t('email.privacy_policy')}</Link>{' '}
          {t('common.and')}{' '}
          <Link href={'#termsOfUse'}>{t('email.terms_of_use')}</Link>.
        </p>
      </div>

      <Button onClick={handleNext} disabled={isButtonDisabled}>
        {t('common.next')}
      </Button>
    </div>
  )
}
