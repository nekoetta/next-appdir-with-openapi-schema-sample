import { UsersApi } from '@/lib/openapi'
import React from 'react'
import { getServerApiConfig } from '@/lib/server_api_config'
import { handleFetchError } from '@/lib/handle_fetch_error_server'

export default async function UserIndex() {
  const usersApi = new UsersApi(getServerApiConfig())
  const users = await usersApi.index().catch((err) => {
    handleFetchError(err)
    return undefined
  })

  return (
    <div>
      <table className="min-w-full table-auto text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              ID
            </th>
            <th scope="col" className="px-6 py-4">
              LOGIN_ID
            </th>
            <th scope="col" className="px-6 py-4">
              FIRST_NAME
            </th>
            <th scope="col" className="px-6 py-4">
              LAST_NAME
            </th>
            <th scope="col" className="px-6 py-4">
              EMPLOYEE_NUMBER
            </th>
            <th scope="col" className="px-6 py-4">
              EMAIL
            </th>
            <th scope="col" className="px-6 py-4">
              GECOS
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {user.id}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{user.loginId}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.firstName}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.lastName}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {user.employeeNumber}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.gecos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
