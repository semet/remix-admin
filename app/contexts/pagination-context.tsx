import {
  PaginationState,
  RowSelectionState,
  SortingState
} from '@tanstack/react-table'
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react'

type PaginationContextType = {
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
  resetPagination: () => void
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
  rowSelection: RowSelectionState
  setRowSelection: Dispatch<SetStateAction<RowSelectionState>>
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
)

const PaginationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const resetPagination = () => setPagination({ ...pagination, pageIndex: 0 })

  const value = {
    pagination,
    setPagination,
    resetPagination,
    sorting,
    setSorting,
    rowSelection,
    setRowSelection
  }
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePagination = () => {
  const context = useContext(PaginationContext)
  if (context === undefined) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

export { PaginationProvider, PaginationContext, usePagination }
