import { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'

export type Props<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  state: {
    pagination: PaginationState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
}
