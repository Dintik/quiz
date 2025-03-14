'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { QuizHeader } from '@/components/QuizHeader'
import { QuizOptions } from '@/components/QuizOptions'
import { Question } from '@/types/quiz'
import styles from './styles.module.scss'

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
  const isLastPage = currentPage === totalPages

  return (
    <div className={styles.quizContent}>
      <QuizHeader currentPage={currentPage} totalPages={totalPages} />

      <div className={styles.quizContent__header}>
        <h1
          className={`${styles.quizContent__title} ${t(question.description) && styles.quizContent__titleGrey}`}
        >
          {t(question.title)}
        </h1>
        {t(question.description) && (
          <p className={styles.quizContent__desc}>{t(question.description)}</p>
        )}

        <QuizOptions
          question={question}
          currentPage={currentPage}
          isLastPage={isLastPage}
        />
      </div>

      {/* {showNextButton && ( */}
      <Link href={isLastPage ? '/email' : `/quiz/${currentPage + 1}`}>
        {t('common.next')}
      </Link>
      {/* )} */}
    </div>
  )
}
