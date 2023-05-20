import { ResponseError } from './openapi'
import { redirect } from 'next/navigation'

export const handleFetchError = (error: ResponseError) => {
  if (error?.response?.status === 401) {
    redirect('/')
  }
  throw error
}
