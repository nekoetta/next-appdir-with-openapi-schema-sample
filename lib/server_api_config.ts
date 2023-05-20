import { cookies } from 'next/headers'
import { Configuration } from './openapi'
import { my_fetch } from './my_fetch'

export const getServerApiConfig = () => {
  return new Configuration({
    basePath: process.env.SERVER_API_BASE_PATH || 'http://api:8080',
    accessToken: cookies().get('session')?.value || '',
    fetchApi: my_fetch,
  })
}
