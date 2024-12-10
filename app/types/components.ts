import { Table } from '@tanstack/react-table'
import { ReactNode } from 'react'

export type Variant = 'primary' | 'success' | 'error' | 'warning' | 'info'

export type Size = 'sm' | 'md' | 'lg'

export type Position = 'top' | 'right' | 'bottom' | 'left'

export type TabData<Key extends string | number> = {
  head: {
    key: Key
    label: ReactNode
  }
  panel: {
    key: Key
    content: ReactNode
  }
}

export type TabProps<Key extends string | number> = {
  data: Array<TabData<Key>>
}

export type PageSizeProps<T> = {
  table: Table<T>
}

export type GlobalFilterProps<T> = PageSizeProps<T>

export type PageSizeFilter = {
  pageSize: {
    label: string
    value: number
  }
}

export type GlobalFilter = {
  keyword: string
}

export type PaginationProps<T> = {
  table: Table<T>
  totalData?: number
  pageCount?: number
}
