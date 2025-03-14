'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useQuizStore } from '@/hooks/useQuizStore'
import { useLocale } from '@/hooks/useLocale'
import { Question } from '@/types/quiz'
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
          <button
            key={index}
            className={`${styles.options__item} ${selectedOption === option.text ? styles.options__item_selected : ''}`}
            onClick={() => handleOptionSelect(option.text)}
          >
            {option.image && (
              <div className={styles.options__image_container}>
                <Image
                  src={option.image}
                  alt={currentPage === 1 ? option.text : t(option.text)}
                  className={styles.options__image}
                  width={48}
                  height={48}
                />
              </div>
            )}
            <span>{currentPage === 1 ? option.text : t(option.text)}</span>
          </button>
        ))}
    </div>
  )
}
