import { AnimatePresence, motion } from 'framer-motion'
import { useMemo } from 'react'

import { Card } from '~/components/base-ui'
import { SelectableTable } from '~/components/tables'
import { usePagination } from '~/contexts'
import { usePersonQuery } from '~/queries'

import { columns } from './columns'
import { SelectedRows } from './selected-rows'

export const Content = () => {
  const {
    pagination,
    setPagination,
    sorting,
    setSorting,
    rowSelection,
    setRowSelection
  } = usePagination()
  const { data, isLoading, isRefetching } = usePersonQuery({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    sorting
  })

  const memoizedColumns = useMemo(() => columns, [])
  return (
    <Card className="relative">
      <AnimatePresence>
        {Object.keys(rowSelection).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute right-1/2 top-4"
          >
            <SelectedRows rowSelection={rowSelection} />
          </motion.div>
        )}
      </AnimatePresence>
      <SelectableTable
        columns={memoizedColumns}
        data={data?.rows ?? []}
        totalData={data?.rowCount ?? 0}
        pageCount={data?.pageCount ?? 0}
        state={{ pagination, sorting, rowSelection }}
        isLoading={isLoading || isRefetching}
        setPagination={setPagination}
        setSorting={setSorting}
        setRowSelection={setRowSelection}
      />
    </Card>
  )
}
