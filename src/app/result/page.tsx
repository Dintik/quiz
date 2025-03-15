'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useQuizStore } from '@/hooks/useQuizStore'
import Download from '@/assets/images/Download.png'
import Checkmark from '@/assets/images/Checkmark.png'
import styles from './styles.module.scss'

export default function ResultPage() {
  const t = useTranslations()
  const { clearAnswers, answers } = useQuizStore()
  const [isLoading, setIsLoading] = useState(false)

  const handleRetake = () => {
    setIsLoading(true)
    clearAnswers()
    document.cookie = 'NEXT_LOCALE=;path=/'
    window.location.href = '/quiz/1'
  }

  const handleDownload = () => {
    // Prepare CSV headers
    const headers = ['order,title,type,answer']

    // Prepare data rows
    const rows = answers.map(
      ({ order, title, type, answer }) =>
        `${order},"${title}","${type}","${Array.isArray(answer) ? answer.join(', ') : answer}"`
    )

    // Join all rows with line breaks
    const csvContent = headers.concat(rows).join('\n')

    // Create Blob with proper encoding
    const blob = new Blob(['\ufeff' + csvContent], {
      type: 'text/csv;charset=utf-8'
    })

    // Create download link
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'quiz_answers.csv'

    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={styles.result}>
      <div className={styles.result__content}>
        <div className={styles.result__header}>
          <h1 className={styles.result__title}>{t('result.title')}</h1>
          <p className={styles.result__desc}>{t('result.description')}</p>
        </div>

        <div>
          <Image
            src={Checkmark}
            alt='success checkmark'
            width={118}
            height={118}
          />
        </div>
      </div>
      <div className={styles.result__buttons}>
        <button className={styles.result__download} onClick={handleDownload}>
          <Image src={Download} alt='download icon' width={42} height={42} />
          {t('result.download')}
        </button>
        <Button onClick={handleRetake} isLoading={isLoading}>
          {t('result.retake')}
        </Button>
      </div>
    </div>
  )
}
