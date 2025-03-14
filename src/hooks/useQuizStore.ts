import { useState, useEffect } from 'react'

const QUIZ_STORE_KEY = 'quiz_answers'

interface QuizAnswer {
  order: number
  title: string
  type: string
  answer: string | string[]
}

export const useQuizStore = () => {
  const [answers, setAnswers] = useState<QuizAnswer[]>([])

  useEffect(() => {
    // Load saved answers on mount
    const savedAnswers = localStorage.getItem(QUIZ_STORE_KEY)
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
    }
  }, [])

  const saveAnswer = (
    order: number,
    title: string,
    type: string,
    answer: string | string[]
  ) => {
    const newAnswers = [...answers]
    const existingAnswerIndex = newAnswers.findIndex((a) => a.order === order)

    if (existingAnswerIndex !== -1) {
      // Update existing answer
      newAnswers[existingAnswerIndex] = { order, title, type, answer }
    } else {
      // Add new answer
      newAnswers.push({ order, title, type, answer })
    }

    localStorage.setItem(QUIZ_STORE_KEY, JSON.stringify(newAnswers))
    setAnswers(newAnswers)
  }

  return {
    answers,
    saveAnswer
  }
}
