'use client'

import { useTranslations } from 'next-intl'
import { QuizHeader } from '@/components/QuizHeader'
import { QuizOptions } from '@/components/QuizOptions'
import { Question } from '@/types/quiz'
import styles from './styles.module.scss'

const parseTextWithTags = (text: string) => {
  const parts = text.split(/(###.*?###)/)
  return parts.map((part, index) => {
    if (part.startsWith('###') && part.endsWith('###')) {
      return <span key={index}>{part.slice(3, -3)}</span>
    }
    return part
  })
}

interface QuizContentProps {
  question: Question
  currentPage: number
  totalPages: number
}

export function QuizContent({
  question,
  currentPage,
  totalPages
}: QuizContentProps) {
  const t = useTranslations()

  return (
    <div className={styles.quizContent}>
      <QuizHeader currentPage={currentPage} totalPages={totalPages} />

      <div className={styles.quizContent__header}>
        <h1
          className={`${styles.quizContent__title} ${t(question.description) && styles.quizContent__titleGrey}`}
        >
          {parseTextWithTags(t(question.title))}
        </h1>
        {t(question.description) && (
          <p className={styles.quizContent__desc}>{t(question.description)}</p>
        )}
      </div>

      <QuizOptions
        question={question}
        currentPage={currentPage}
        isLastPage={currentPage === totalPages}
      />
    </div>
  )
}
