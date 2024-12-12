import { useEffect, useMemo } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

import { Card } from '~/components/base-ui'
import { InfiniteScrollTable } from '~/components/tables'
import { usePagination } from '~/contexts'
import { useInfinitePersonQuery } from '~/queries'

import { columns } from './columns'

export const Content = () => {
  const { pagination, setPagination, sorting, setSorting } = usePagination()
  const { ref, isIntersecting } = useIntersectionObserver({
    rootMargin: '0px 0px -10px 0px'
  })
  const {
    data,
    isPending,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useInfinitePersonQuery({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    sorting
  })

  const memoizedColumns = useMemo(() => columns, [])
  const refinedData = useMemo(
    () => data?.pages.map((page) => page.rows).flat(),
    [data]
  )
  const pageCount = data?.pages.length
  const totalData = data?.pages[0]?.rowCount ?? 0
  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting, hasNextPage])
  return (
    <Card>
      <InfiniteScrollTable
        columns={memoizedColumns}
        data={refinedData ?? []}
        totalData={totalData ?? 0}
        pageCount={pageCount ?? 0}
        state={{ pagination, sorting }}
        isLoading={isPending || isLoading}
        isFetchingNextPage={isFetchingNextPage}
        setPagination={setPagination}
        setSorting={setSorting}
      />
      <div ref={ref} />
    </Card>
  )
}
