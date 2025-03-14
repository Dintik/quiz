import Link from 'next/link'
import { notFound } from 'next/navigation'
import quizData from '@/data/quiz.json'

export default function QuizPage({ params }: { params: { id: string } }) {
  const currentPage = parseInt(params.id)
  const totalPages = quizData.questions.length
  const question = quizData.questions[currentPage - 1]

  if (!question) {
    notFound()
  }

  //   const showNextButton =
  //     question.type === 'bubble' || question.type === 'multiple'
  const isLastPage = currentPage === totalPages

  return (
    <div>
      <header>
        {currentPage > 1 && (
          <Link href={`/quiz/${currentPage - 1}`}>Previous</Link>
        )}
        <p>
          {currentPage}/{totalPages}
        </p>
        <div>TODO: progressbar</div>
      </header>

      <h1>{question.question}</h1>

      <p>{question.description}</p>
      <div>TODO: Options</div>

      {/* {showNextButton && ( */}
      <Link href={isLastPage ? '/email' : `/quiz/${currentPage + 1}`}>
        Next
      </Link>
      {/* )} */}
    </div>
  )
}
