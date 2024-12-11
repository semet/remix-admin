import { SortingState } from '@tanstack/react-table'

export type Person = {
  id: number
  firstName: string
  lastName?: string
  email: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

export type PersonParams = {
  pageIndex: number
  pageSize: number
  sorting?: SortingState
}
