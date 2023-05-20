'use client'
import { Sidebar } from 'flowbite-react'
import { FC, useState } from 'react'
import { Sample } from '@/components/icons/sample'
import { usePathname } from 'next/navigation'

export const AppSidebar: FC = () => {
  const pathname = usePathname()
  const masterUrls = {
    customerCategory: '/customers/categories',
    user: '/users',
  }

  const [masterCollapse, setMasterCollapse] = useState(
    Object.values(masterUrls).filter((url) => pathname.startsWith(url)).length >
      0
  )

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={Sample}
            label="マスタ管理"
            onClick={() => setMasterCollapse(!masterCollapse)}
            open={masterCollapse}
          >
            <Sidebar.Item
              href={masterUrls.user}
              active={pathname.startsWith(masterUrls.user)}
            >
              ユーザー
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
