import { ColumnDef } from '@tanstack/react-table'

import { Person } from '~/schemas'

export const columns: ColumnDef<Person>[] = [
  {
    header: 'ID',
    footer: (props) => props.column.id,
    accessorKey: 'id',
    cell: (props) => props.getValue()
  },
  {
    header: 'First Name',
    accessorKey: 'firstName',
    cell: (props) => props.getValue()
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    cell: (props) => props.getValue()
  },
  {
    header: 'Age',
    accessorKey: 'age',
    cell: (props) => props.getValue()
  },
  {
    header: 'Visits',
    accessorKey: 'visits',
    cell: (props) => props.getValue()
  },
  {
    header: 'Progress',
    accessorKey: 'progress',
    cell: (props) => props.getValue()
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: (props) => props.getValue()
  }
]
