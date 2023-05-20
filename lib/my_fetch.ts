import { Middleware } from './openapi'

export const my_fetch: (
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<Response> = (input, init?) => {
  return fetch(input, { cache: 'no-store', ...init })
}

export const my_middleware: Middleware = {
  post: async ({ response }) => {
    if (response.status === 400) {
      throw new ValidationError(await response.json(), 'api bad request')
    }
    return response
  },
}

export class ValidationError extends Error {
  override name = 'ValidationError'
  constructor(public response: unknown, msg?: string) {
    super(msg)
  }
}
