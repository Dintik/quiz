import { useRouter } from 'next/navigation'

const LANGUAGE_MAP = {
  English: 'en',
  French: 'fr',
  German: 'de',
  Spanish: 'es'
} as const

export const useLocale = () => {
  const router = useRouter()
  const handleLanguageChange = (
    language: keyof typeof LANGUAGE_MAP,
    redirectURL?: string
  ) => {
    const locale = LANGUAGE_MAP[language]

    // Set cookie that will be readable by the server
    // max-age is set to 1 month (30 days * 24 hours * 60 minutes * 60 seconds)
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=2592000`

    // Force reload the page to apply new translations
    if (redirectURL) {
      window.location.href = redirectURL
    } else {
      router.refresh()
    }
  }

  return {
    handleLanguageChange
  }
}
