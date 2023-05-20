'use client'
import { ResponseError } from '@/lib/openapi'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export const MyErrorBoundary = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const onUnhandledRejection = (event: PromiseRejectionEvent) => {
    event.promise.catch((error) => {
      if (error instanceof ResponseError) {
        if (error.response.status === 401) {
          router.push('/')
        } else {
          throw error
        }
      } else {
        throw error
      }
    })
  }

  useEffect(() => {
    window.addEventListener('unhandledrejection', onUnhandledRejection)
    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
    }
  }, [])
  return <>{children}</>
}
