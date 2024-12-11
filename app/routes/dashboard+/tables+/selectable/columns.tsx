import { ColumnDef } from '@tanstack/react-table'

import { IndeterminateCheckbox } from '~/components/tables'
import { Person } from '~/schemas'

export const columns: ColumnDef<Person>[] = [
  {
    id: 'selection',
    enableSorting: false,
    header: ({ table }) => (
      <div className="text-center">
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: (e) => {
              const isSomeRowsSelected = table.getIsSomeRowsSelected()

              if (isSomeRowsSelected) {
                table.resetRowSelection()

                return
              }

              table.getToggleAllRowsSelectedHandler()(e)
            }
          }}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }}
        />
      </div>
    )
  },
  {
    header: 'ID',
    footer: (props) => props.column.id,
    accessorKey: 'id',
    enableSorting: false,
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
