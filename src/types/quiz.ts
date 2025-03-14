interface Option {
  text: string
  image?: string
}

interface AgeOptions {
  [key: string]: Option[]
}

type QuestionType =
  | 'single-select'
  | 'single-select-image'
  | 'multiple-select'
  | 'bubble'

export interface Question {
  type: QuestionType
  title: string
  description: string
  options?: Option[]
  optionsByAge?: AgeOptions
}
