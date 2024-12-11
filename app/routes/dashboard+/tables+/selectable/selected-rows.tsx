import { RowSelectionState } from '@tanstack/react-table'
import { FC, useState } from 'react'

import { Alert, Button, Modal } from '~/components/base-ui'

type Props = {
  rowSelection: RowSelectionState
}

export const SelectedRows: FC<Props> = ({ rowSelection }) => {
  const rows = Object.keys(rowSelection).map(Number)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Modal
      scrollable
      isOpen={isOpen}
      setIsOpen={() => setIsOpen((prev) => !prev)}
      button={
        <Button
          size="sm"
          variant="info"
          onClick={() => setIsOpen((prev) => !prev)}
          className="capitalize"
        >
          Show selected Rows
        </Button>
      }
      title={<p className="capitalize">Selected Rows</p>}
    >
      <div className="space-y-4">
        <Alert
          variant="info"
          title="NOTE"
          message="The row selection start from the index 0 of the actual item ID"
        />
        <pre className="text-sm text-gray-500">
          {JSON.stringify(rows, null, 2)}
        </pre>
      </div>
    </Modal>
  )
}
