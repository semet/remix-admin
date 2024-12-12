import { useMemo } from 'react'

import { Card } from '~/components/base-ui'
import { SortableTable } from '~/components/tables'
import { usePagination } from '~/contexts'
import { usePersonQuery } from '~/queries'

import { columns } from './columns'

export const Content = () => {
  const { pagination, setPagination, sorting, setSorting } = usePagination()
  const { data, isLoading, isRefetching } = usePersonQuery({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    sorting
  })

  const memoizedColumns = useMemo(() => columns, [])
  return (
    <Card>
      <SortableTable
        columns={memoizedColumns}
        data={data?.rows ?? []}
        totalData={data?.rowCount ?? 0}
        pageCount={data?.pageCount ?? 0}
        state={{ pagination, sorting }}
        isLoading={isLoading || isRefetching}
        setPagination={setPagination}
        setSorting={setSorting}
        stripped
      />
    </Card>
  )
}
