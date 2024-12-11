import { ColumnDef, PaginationState, SortingState } from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'

export type SortableTableProps<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  state: {
    pagination?: PaginationState
    sorting: SortingState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  setSorting: Dispatch<SetStateAction<SortingState>>
}
