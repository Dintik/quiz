import Link from 'next/link'
import styles from './styles.module.scss'

export const QuizHeader = ({
  currentPage,
  totalPages
}: {
  currentPage: number
  totalPages: number
}) => {
  return (
    <header className={styles.header}>
      {currentPage > 1 && (
        <Link href={`/quiz/${currentPage - 1}`}>Previous</Link>
      )}
      <p className={styles.header__counter}>
        {currentPage}/{totalPages}
      </p>
      <div>TODO: progressbar</div>
    </header>
  )
}
