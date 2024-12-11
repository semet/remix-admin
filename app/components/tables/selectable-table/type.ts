import {
  ColumnDef,
  PaginationState,
  RowSelectionState,
  SortingState
} from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'

export type SelectableTableProps<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  state: {
    pagination?: PaginationState
    sorting?: SortingState
    rowSelection: RowSelectionState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  setSorting: Dispatch<SetStateAction<SortingState>>
  setRowSelection: Dispatch<SetStateAction<RowSelectionState>>
}
