'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useQuizStore } from '@/hooks/useQuizStore'
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
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    saveAnswer(currentPage, title, type, option)
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
                  alt={option.text}
                  className={styles.options__image}
                  width={48}
                  height={48}
                />
              </div>
            )}
            <span>{option.text}</span>
          </button>
        ))}
    </div>
  )
}
