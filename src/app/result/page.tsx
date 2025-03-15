'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Download from '@/assets/images/Download.png'
import Checkmark from '@/assets/images/Checkmark.png'
import styles from './styles.module.scss'

export default function ResultPage() {
  const t = useTranslations()

  return (
    <div className={styles.result}>
      <div className={styles.result__content}>
        <div className={styles.result__header}>
          <h1 className={styles.result__title}>{t('result.title')}</h1>
          <p className={styles.result__desc}>{t('result.description')}</p>
        </div>

        <div>
          <Image
            src={Checkmark}
            alt='success checkmark'
            width={118}
            height={118}
          />
        </div>
      </div>
      <div className={styles.result__buttons}>
        <button className={styles.result__download} onClick={() => null}>
          <Image src={Download} alt='download icon' width={42} height={42} />
          {t('result.download')}
        </button>
        {/* <Link href={'/quiz/1'}>{t('result.retake')}</Link> */}
        <Button onClick={() => null}>{t('result.retake')}</Button>
      </div>
    </div>
  )
}
