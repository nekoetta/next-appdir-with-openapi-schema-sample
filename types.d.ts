interface ValidationErrorDetail {
  code: string
  message: string
  params: { [key: string]: string | number }
}
export type ValidationErrorResponse<T> = {
  [K in keyof T]: ValidationErrorDetail[]
}
