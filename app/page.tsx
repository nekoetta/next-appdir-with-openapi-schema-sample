'use client'
import { AuthApi, LoginRequest, LoginInfo } from '@/lib/openapi'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { setCookie } from 'nookies'
import { ClientApiConfig } from '@/lib/client_api_config'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<LoginInfo>()
  const [info, setInfo] = useState<string>('未ログイン')

  const onSubmit: SubmitHandler<LoginInfo> = async (data) => {
    const authApi = new AuthApi(ClientApiConfig)
    const request: LoginRequest = {
      loginInfo: data,
    }

    try {
      const response = await authApi.loginRaw(request)
      setInfo(`token: ${response.raw.headers.get('authorization')}`)
      setCookie(
        null,
        'session',
        response.raw.headers.get('authorization') || '',
        {
          sameSite: 'lax',
          path: '/',
        }
      )
      router.push('/users')
    } catch (e) {
      console.error(e)
      setInfo('ログイン失敗')
    }
  }

  return (
    <div className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            {...register('username')}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            {...register('password')}
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            ログイン
          </button>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">{info}</p>
    </div>
  )
}
