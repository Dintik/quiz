'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useQuizStore } from '@/hooks/useQuizStore'
import { useLocale } from '@/hooks/useLocale'
import { Question } from '@/types/quiz'
import { QuizOption } from './QuizOption'
import styles from './styles.module.scss'

interface QuizOptionsProps {
  question: Question
  currentPage: number
  isLastPage: boolean
}

export const QuizOptions = ({ question, currentPage }: QuizOptionsProps) => {
  const { options, title, type, optionsByAge } = question
  const { saveAnswer } = useQuizStore()
  const { handleLanguageChange } = useLocale()
  const [selectedOption, setSelectedOption] = useState('')
  const t = useTranslations()

  const handleOptionSelect = (optionText: string) => {
    setSelectedOption(optionText)

    // First save the answer
    saveAnswer(currentPage, title, type, optionText)

    // If this is the language selection question (first question)
    // handle the language change after saving the answer
    if (currentPage === 1) {
      handleLanguageChange(
        optionText as 'English' | 'French' | 'German' | 'Spanish'
      )
    }
  }

  if (!options && !optionsByAge) return null

  // TODO: add optionsByAge

  return (
    <div className={styles.options}>
      {options &&
        options.map((option, index) => (
          <QuizOption
            key={index}
            option={{
              ...option,
              text: currentPage === 1 ? option.text : t(option.text)
            }}
            type={type}
            selectedOption={selectedOption === option.text}
            onClick={() => handleOptionSelect(option.text)}
          />
        ))}
    </div>
  )
}
