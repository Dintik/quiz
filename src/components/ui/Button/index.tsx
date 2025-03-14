import { ReactNode } from 'react'
import { Spinner } from '@/components/ui/Spinner'
import styles from './styles.module.scss'

export interface ButtonProps {
  children?: ReactNode
  className?: string
  onClick: () => void
  isLoading?: boolean
  disabled?: boolean
}

export const Button = ({
  children,
  className,
  onClick,
  isLoading,
  disabled
}: ButtonProps) => (
  <button
    className={`${styles.button} 
      ${disabled ? styles.button__disabled : ''} ${className}`}
    onClick={onClick}
    disabled={isLoading || disabled}
  >
    {isLoading ? <Spinner /> : children}
  </button>
)
