import { ColumnDef } from '@tanstack/react-table'
import { MdArrowForward, MdArrowDownward } from 'react-icons/md'

import { Person } from '~/schemas'

export const columns: ColumnDef<Person>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' }
          }}
        >
          {row.getIsExpanded() ? (
            <MdArrowDownward className="text-lg" />
          ) : (
            <MdArrowForward className="text-lg" />
          )}
        </button>
      ) : null
    }
  },
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
    header: 'Email',
    accessorKey: 'email',
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
