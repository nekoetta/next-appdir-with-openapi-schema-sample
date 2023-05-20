'use client'
import { Card, Label } from 'flowbite-react'
import Link from 'next/link'

interface Props<T> {
  data: T
  columns: Array<keyof T>
  indexPath?: string
}

export function Detail<T extends Record<string, string | number>>({
  data,
  columns,
  indexPath,
}: Props<T>) {
  return (
    <>
      <Card className="min-fit max-w-sm">
        {columns.map((column) => {
          return (
            <div key={column.toString()}>
              <Label>{column.toString()}</Label>
              <p>{data[column]}</p>
            </div>
          )
        })}
      </Card>
      {indexPath && (
        <Link
          className="inline-block pt-5"
          href={`${indexPath}?date=${Date.now()}`}
        >
          一覧に戻る
        </Link>
      )}
    </>
  )
}
