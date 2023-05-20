import nookies from 'nookies'
import { Configuration } from './openapi'
import { my_fetch, my_middleware } from './my_fetch'

export const ClientApiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_PATH || 'http://localhost:8080',
  accessToken: nookies.get().session || '',
  fetchApi: my_fetch,
  middleware: [my_middleware],
})
