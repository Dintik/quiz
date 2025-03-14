import LoaderWheelIcon from '@/assets/images/LoaderWheel.svg'
import styles from './styles.module.scss'

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <LoaderWheelIcon className={styles.spinner__icon} />
    </div>
  )
}
