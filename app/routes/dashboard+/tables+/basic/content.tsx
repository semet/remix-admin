import { useMemo } from 'react'

import { Card } from '~/components/base-ui'
import { BasicTable } from '~/components/tables'
import { usePagination } from '~/contexts'
import { usePersonQuery } from '~/queries'

import { columns } from './columns'

export const Content = () => {
  const { pagination, setPagination } = usePagination()
  const { data, isLoading, isRefetching } = usePersonQuery({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize
  })

  const memoizedColumns = useMemo(() => columns, [])
  return (
    <Card>
      <BasicTable
        columns={memoizedColumns}
        data={data?.rows ?? []}
        totalData={data?.rowCount ?? 0}
        pageCount={data?.pageCount ?? 0}
        state={{ pagination }}
        isLoading={isLoading || isRefetching}
        setPagination={setPagination}
      />
    </Card>
  )
}
