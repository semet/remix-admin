import { PaginationState } from '@tanstack/react-table'
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
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
)

const PaginationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })
  const resetPagination = () => setPagination({ ...pagination, pageIndex: 0 })

  const value = {
    pagination,
    setPagination,
    resetPagination
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
