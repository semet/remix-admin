import { ColumnDef } from '@tanstack/react-table'

import { Person } from '~/schemas'

export const columns: ColumnDef<Person>[] = [
  {
    header: 'ID',
    footer: 'ID',
    accessorKey: 'id',
    cell: (props) => props.getValue()
  },
  {
    header: 'First Name',
    footer: 'First Name',
    accessorKey: 'firstName',
    cell: (props) => props.getValue()
  },
  {
    header: 'Last Name',
    footer: 'Last Name',
    accessorKey: 'lastName',
    cell: (props) => props.getValue()
  },
  {
    header: 'Email',
    footer: 'Email',
    accessorKey: 'email',
    cell: (props) => props.getValue()
  },
  {
    header: 'Age',
    footer: (props) => props.column.id,
    accessorKey: 'age',
    cell: (props) => props.getValue()
  },
  {
    header: 'Visits',
    footer: 'Visits',
    accessorKey: 'visits',
    cell: (props) => props.getValue()
  },
  {
    header: 'Progress',
    footer: 'Progress',
    accessorKey: 'progress',
    cell: (props) => props.getValue()
  },
  {
    header: 'Status',
    footer: 'Status',
    accessorKey: 'status',
    cell: (props) => props.getValue()
  }
]
