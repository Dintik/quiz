import Image from 'next/image'
import { Option, QuestionType } from '@/types/quiz'
import CheckboxIcon from '@/assets/images/Checkbox.svg'
import styles from './styles.module.scss'

export interface QuizOptionProps {
  option: Option
  type: QuestionType
  selectedOption?: boolean
  onClick: () => void
}

export const QuizOption = ({
  option,
  type,
  selectedOption,
  onClick
}: QuizOptionProps) => {
  const isMultiSelect = type === 'multiple-select'

  return (
    <button
      className={`${styles.option} ${styles[`option__${type}`]} ${selectedOption && styles.option__selected}`}
      onClick={onClick}
    >
      {option.image && (
        <div className={styles.option__image_container}>
          <Image
            src={option.image}
            alt={option.text}
            className={styles.option__image}
            width={type === 'bubble' ? 25 : 52}
            height={type === 'bubble' ? 25 : 52}
          />
        </div>
      )}
      <span>{option.text}</span>
      {isMultiSelect && (
        <div
          className={`${styles.option__checkbox} ${selectedOption && styles.option__checkbox_selected}`}
        >
          <CheckboxIcon />
        </div>
      )}
    </button>
  )
}
