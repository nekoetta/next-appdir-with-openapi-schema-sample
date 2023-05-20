'use client'
import { Table } from 'flowbite-react'
import { EditIcon } from './icons/edit'
import { ShowIcon } from './icons/show'
import { DeleteIcon } from './icons/delete'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { FieldValues } from 'react-hook-form'

type Action = 'show' | 'edit'

interface Props<T> {
  data: T[]
  uniqueKey: keyof T
  columns: Array<keyof T>
  actions?: Action[]
  DeleteForm?: ({
    id,
    children,
    onFinish,
  }: {
    id: number
    children: JSX.Element
    onFinish: () => void
  }) => JSX.Element
}

export function DataTable<T extends FieldValues>({
  data,
  uniqueKey,
  columns,
  actions,
  DeleteForm,
}: Props<T>) {
  const pathname = usePathname()
  const router = useRouter()

  const keys = columns as string[]
  const headerCells = keys.map((key) => (
    <Table.HeadCell key={key}>{key}</Table.HeadCell>
  ))

  const bodyRows = data.map((row) => {
    const cells = keys.map((key) => (
      <Table.Cell key={key}>{row[key]}</Table.Cell>
    ))

    const actionsCell = actions && (
      <Table.Cell className="flex">
        {actions.includes('show') && (
          <Link className="pr-3" href={`${pathname}/${row[uniqueKey]}`}>
            <ShowIcon />
          </Link>
        )}
        {actions.includes('edit') && (
          <Link className="pr-3" href={`${pathname}/${row[uniqueKey]}/edit`}>
            <EditIcon />
          </Link>
        )}
        {DeleteForm?.({
          id: row[uniqueKey],
          onFinish: () => {
            router.refresh()
          },
          children: DeleteIcon(),
        })}
      </Table.Cell>
    )

    return (
      <Table.Row key={row[uniqueKey]}>
        {cells}
        {actions && actionsCell}
      </Table.Row>
    )
  })

  return (
    <>
      <Table hoverable={true}>
        <Table.Head>
          {headerCells}
          {actions && <Table.HeadCell className="w-1" />}
        </Table.Head>
        <Table.Body className="divide-y">{bodyRows}</Table.Body>
      </Table>
      {data.length <= 0 && <p>データがありません</p>}
    </>
  )
}
