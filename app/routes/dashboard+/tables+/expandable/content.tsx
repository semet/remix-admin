import { Row } from '@tanstack/react-table'
import { useMemo } from 'react'

import { Card } from '~/components/base-ui'
import { ExpandableTable } from '~/components/tables'
import { usePagination } from '~/contexts'
import { usePersonQuery } from '~/queries'
import { Person } from '~/schemas'

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
      <ExpandableTable
        columns={memoizedColumns}
        data={data?.rows ?? []}
        totalData={data?.rowCount ?? 0}
        pageCount={data?.pageCount ?? 0}
        state={{ pagination }}
        isLoading={isLoading || isRefetching}
        setPagination={setPagination}
        renderSubComponent={renderSubComponent}
        getRowCanExpand={() => true}
        hovered
      />
    </Card>
  )
}

const renderSubComponent = ({ row }: { row: Row<Person> }) => {
  return (
    <div className="flex w-full gap-4 bg-slate-100 py-4 pl-6 text-slate-600">
      <div>{row.original.firstName}</div>
      <div>{row.original.lastName}</div>
      <div>{row.original.email}</div>
      <div>{row.original.age} Years old</div>
    </div>
  )
}
