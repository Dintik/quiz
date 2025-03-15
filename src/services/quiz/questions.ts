import { Question } from '@/types/quiz'
import quizData from '@/data/quiz.json'

export async function getQuizQuestion(page: number): Promise<Question | null> {
  if (process.env.NEXT_PUBLIC_DATA_SOURCE === 'rest') {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/questions/${page}`
      )
      if (!response.ok) return null
      return response.json()
    } catch {
      return null
    }
  }

  // Default to local JSON
  return quizData.questions[page - 1] as Question
}

export async function getQuizQuestionsCount(): Promise<number> {
  if (process.env.NEXT_PUBLIC_DATA_SOURCE === 'rest') {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/questions/count`
      )
      if (!response.ok) return 0
      const data = await response.json()
      return data.count
    } catch {
      return 0
    }
  }

  // Default to local JSON
  return quizData.questions.length
}
