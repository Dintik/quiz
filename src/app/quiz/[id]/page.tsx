import { notFound } from 'next/navigation'
import { QuizContent } from '@/components/QuizContent'
import {
  getQuizQuestion,
  getQuizQuestionsCount
} from '@/services/quiz/questions'

interface QuizPageProps {
  params: Promise<{ id?: string }>
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params
  const currentPage = id ? parseInt(id) : 0

  // Get question and total pages count
  const [question, totalPages] = await Promise.all([
    getQuizQuestion(currentPage),
    getQuizQuestionsCount()
  ])

  if (!question) {
    notFound()
  }

  return (
    <QuizContent
      question={question}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  )
}
