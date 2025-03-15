const QUIZ_STORE_KEY = 'quiz_answers'
const IS_REST_API = process.env.NEXT_PUBLIC_DATA_SOURCE === 'rest'

export interface QuizAnswer {
  order: number
  title: string
  type: string
  answer: string | string[]
}

export async function saveQuizAnswer(answer: QuizAnswer): Promise<void> {
  if (IS_REST_API) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answer)
      })
    } catch {
      // Fallback to local storage if API fails
      saveToLocalStorage(answer)
    }
  } else {
    saveToLocalStorage(answer)
  }
}

export async function getQuizAnswers(): Promise<QuizAnswer[]> {
  if (IS_REST_API) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/answers`)
      if (!response.ok) return []
      return response.json()
    } catch {
      // Fallback to local storage if API fails
      return getFromLocalStorage()
    }
  }
  return getFromLocalStorage()
}

export async function clearQuizAnswers(): Promise<void> {
  if (IS_REST_API) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/answers`, {
        method: 'DELETE'
      })
    } catch {
      // Fallback to local storage if API fails
      clearLocalStorage()
    }
  } else {
    clearLocalStorage()
  }
}
// Local storage helpers
function saveToLocalStorage(answer: QuizAnswer): void {
  const answers = getFromLocalStorage()
  const existingIndex = answers.findIndex((a) => a.order === answer.order)

  if (existingIndex !== -1) {
    answers[existingIndex] = answer
  } else {
    answers.push(answer)
  }

  localStorage.setItem(QUIZ_STORE_KEY, JSON.stringify(answers))
}

function getFromLocalStorage(): QuizAnswer[] {
  const data = localStorage.getItem(QUIZ_STORE_KEY)
  return data ? JSON.parse(data) : []
}

function clearLocalStorage(): void {
  localStorage.removeItem(QUIZ_STORE_KEY)
}
