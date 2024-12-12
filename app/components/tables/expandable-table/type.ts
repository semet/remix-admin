import { ColumnDef, PaginationState, Row } from '@tanstack/react-table'
import { Dispatch, ReactElement, SetStateAction } from 'react'

export type ExpandableTableProps<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  showFooter?: boolean
  stripped?: boolean
  hovered?: boolean
  state: {
    pagination: PaginationState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  getRowCanExpand: (row: Row<T>) => boolean
  renderSubComponent: (props: { row: Row<T> }) => ReactElement
}
