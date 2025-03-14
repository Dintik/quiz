'use client'
import Link from 'next/link'

export default function ResultPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Thank you</h1>
          <p>for supporting us and passing quiz</p>
        </div>

        {/* TODO: check-icon */}
      </div>

      <button onClick={() => null}>Download my answers</button>
      <Link href={'/quiz/1'}>Retake quiz</Link>
    </div>
  )
}
