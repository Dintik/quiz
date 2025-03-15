import { useState, useEffect } from 'react'
import {
  QuizAnswer,
  getQuizAnswers,
  saveQuizAnswer,
  clearQuizAnswers
} from '@/services/quiz/answers'

export const useQuizStore = () => {
  const [answers, setAnswers] = useState<QuizAnswer[]>([])

  useEffect(() => {
    // Load saved answers on mount
    async function loadAnswers() {
      const savedAnswers = await getQuizAnswers()
      setAnswers(savedAnswers)
    }

    loadAnswers()
  }, [])

  const saveAnswer = async (
    order: number,
    title: string,
    type: string,
    answer: string | string[]
  ) => {
    const newAnswer: QuizAnswer = { order, title, type, answer }
    await saveQuizAnswer(newAnswer)

    // Update local state directly
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers]
      const existingIndex = newAnswers.findIndex((a) => a.order === order)

      if (existingIndex !== -1) {
        newAnswers[existingIndex] = newAnswer
      } else {
        newAnswers.push(newAnswer)
      }

      return newAnswers
    })
  }

  const clearAnswers = async () => {
    await clearQuizAnswers()
    setAnswers([])
  }

  return {
    answers,
    saveAnswer,
    clearAnswers
  }
}
