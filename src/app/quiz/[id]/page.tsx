import { notFound } from 'next/navigation'
import quizData from '@/data/quiz.json'
import { QuizContent } from '@/components/QuizContent'
import { Question } from '@/types/quiz'

interface QuizPageProps {
  params: Promise<{ id?: string }>
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params

  const currentPage = id ? parseInt(id) : 0
  const totalPages = quizData.questions.length
  const question = quizData.questions[currentPage - 1] as Question

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
