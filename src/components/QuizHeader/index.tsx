import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BackIcon from '@/assets/images/Back.png'
import GitHubIcon from '@/assets/images/GitHub.svg'
import styles from './styles.module.scss'

export const QuizHeader = ({
  currentPage,
  totalPages
}: {
  currentPage: number
  totalPages: number
}) => {
  // totalPages + 1 - it is necessary for the last step not to be 100% filled and the first step not to be empty
  const progress = (currentPage / (totalPages + 1)) * 100

  return (
    <header className={styles.header}>
      {currentPage > 1 && (
        <Link
          href={`/quiz/${currentPage - 1}`}
          className={styles.header__leftNav}
        >
          <Image src={BackIcon} alt='Back' width={24} height={24} />
        </Link>
      )}
      <p className={styles.header__counter}>
        <span>{currentPage}</span>/{totalPages}
      </p>
      <Link
        href='https://github.com/Dintik/quiz'
        className={styles.header__rightNav}
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon />
      </Link>
      <div className={styles.header__progressbar}>
        <motion.div
          layoutId='progress-bar'
          className={styles.header__progress}
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </header>
  )
}
