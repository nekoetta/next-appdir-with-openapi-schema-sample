'use client'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export const LinkButton = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) => {
  return (
    <Link href={href} className="block w-fit">
      <Button>{children}</Button>
    </Link>
  )
}
