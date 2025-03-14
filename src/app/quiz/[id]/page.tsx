import Link from 'next/link'
import { notFound } from 'next/navigation'
import quizData from '@/data/quiz.json'
import { QuizHeader } from '@/components/QuizHeader'
import { QuizOptions } from '@/components/QuizOptions'
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

  //   const showNextButton =
  //     question.type === 'bubble' || question.type === 'multiple-select'
  const isLastPage = currentPage === totalPages

  return (
    <div>
      <QuizHeader currentPage={currentPage} totalPages={totalPages} />

      <h1>{question.title}</h1>

      <p>{question.description}</p>

      <QuizOptions
        question={question}
        currentPage={currentPage}
        isLastPage={isLastPage}
      />

      {/* {showNextButton && ( */}
      <Link href={isLastPage ? '/email' : `/quiz/${currentPage + 1}`}>
        Next
      </Link>
      {/* )} */}
    </div>
  )
}
