import React, { ReactNode } from 'react'

export const Title = ({
  title,
  actions,
}: {
  title: string
  actions?: ReactNode
}) => {
  return (
    <div className="mb-5 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h1>
      </div>
      {actions && <div className="flex lg:ml-4 lg:mt-0">{actions}</div>}
    </div>
  )
}
