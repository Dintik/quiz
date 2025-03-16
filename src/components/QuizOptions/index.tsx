'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useQuizStore } from '@/hooks/useQuizStore'
import { useLocale } from '@/hooks/useLocale'
import { Question } from '@/types/quiz'
import { QuizOption } from './QuizOption'
import { Button } from '../ui/Button'
import { Spinner } from '../ui/Spinner'
import styles from './styles.module.scss'

interface QuizOptionsProps {
  question: Question
  currentPage: number
  isLastPage: boolean
  onLastQuestionComplete?: () => void
}

export const QuizOptions = ({
  question,
  currentPage,
  isLastPage,
  onLastQuestionComplete
}: QuizOptionsProps) => {
  const { options, title, type, optionsByAge } = question
  const { saveAnswer, answers } = useQuizStore()
  const { handleLanguageChange } = useLocale()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const t = useTranslations()
  const router = useRouter()

  const handleNext = () => {
    if (isLastPage) {
      if (onLastQuestionComplete) {
        onLastQuestionComplete()
      } else {
        router.push('/email')
      }
    } else {
      router.push(`/quiz/${currentPage + 1}`)
    }
  }

  const isMultiSelect = type === 'multiple-select' || type === 'bubble'

  const handleOptionSelect = (optionText: string) => {
    const newSelectedOptions = isMultiSelect
      ? selectedOptions.includes(optionText)
        ? selectedOptions.filter((option) => option !== optionText)
        : [...selectedOptions, optionText]
      : [optionText]

    setSelectedOptions(newSelectedOptions)

    saveAnswer(
      currentPage,
      t(title).replace(/###/g, ''),
      type,
      isMultiSelect
        ? newSelectedOptions.map((opt) => (currentPage === 1 ? opt : t(opt)))
        : currentPage === 1
          ? optionText
          : t(optionText)
    )

    // If this is the language selection question (first question)
    // handle the language change after saving the answer
    if (currentPage === 1) {
      handleLanguageChange(
        optionText as 'English' | 'French' | 'German' | 'Spanish',
        '/quiz/2'
      )
    } else if (!isMultiSelect) {
      handleNext()
    }
  }

  if (!options && !optionsByAge) return null

  let optionsToRender = options
  if (optionsByAge) {
    // Get age answer if exists (question 3)
    const ageAnswer = answers.find((answer) => answer.order === 3)
      ?.answer as string
    if (ageAnswer) {
      // Find matching age key by comparing translated values
      const ageKey = Object.keys(optionsByAge).find(
        (key) => t(key) === ageAnswer
      )
      optionsToRender = ageKey ? optionsByAge[ageKey] : options
    }
  }

  return (
    <>
      <div className={styles.options}>
        {optionsToRender?.map((option, index) => (
          <QuizOption
            key={index}
            option={{
              ...option,
              text: currentPage === 1 ? option.text : t(option.text)
            }}
            type={type}
            selectedOption={selectedOptions.includes(option.text)}
            onClick={() => handleOptionSelect(option.text)}
          />
        ))}
        {!optionsToRender && <Spinner />}
      </div>

      {isMultiSelect && (
        <Button onClick={handleNext} disabled={selectedOptions.length === 0}>
          {t('common.next')}
        </Button>
      )}
    </>
  )
}
