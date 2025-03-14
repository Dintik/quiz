'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { QuizHeader } from '@/components/QuizHeader'
import { QuizOptions } from '@/components/QuizOptions'
import { Question } from '@/types/quiz'

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
    <div>
      <QuizHeader currentPage={currentPage} totalPages={totalPages} />

      <h1>{t(question.title)}</h1>

      <p>{t(question.description)}</p>

      <QuizOptions
        question={question}
        currentPage={currentPage}
        isLastPage={isLastPage}
      />

      {/* {showNextButton && ( */}
      <Link href={isLastPage ? '/email' : `/quiz/${currentPage + 1}`}>
        {t('common.next')}
      </Link>
      {/* )} */}
    </div>
  )
}
