import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

import { Pagination, RowPerPage, TableSearch } from '~/components/tables'

import { ExpandableTableProps } from './type'

export const ExpandableTable = <T,>(props: ExpandableTableProps<T>) => {
  const {
    columns,
    data = [],
    state,
    isLoading,
    pageCount,
    totalData,
    setPagination,
    getRowCanExpand,
    renderSubComponent
  } = props
  const [globalFilter, setGlobalFilter] = useState<string>('')
  const table = useReactTable({
    columns,
    data,
    state: {
      pagination: state?.pagination,
      globalFilter
    },
    pageCount,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    manualPagination: true
  })

  const hasData = data.length > 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <RowPerPage table={table} />
        <TableSearch table={table} />
      </div>
      <div className="max-w-screen mt-2 overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-200 text-left text-sm font-semibold text-slate-600"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="p-4"
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <AnimatePresence mode="wait">
            {hasData && !isLoading ? (
              <tbody>
                {table.getRowModel().rows.map((row) => {
                  return (
                    <Fragment key={row.id}>
                      <motion.tr
                        key={row.id}
                        className={twMerge([
                          'border-b border-gray-200 text-sm text-slate-500 hover:bg-gray-100',
                          state?.pagination
                            ? 'last:border-b'
                            : 'last:border-b-0'
                        ])}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td
                              key={cell.id}
                              className="p-4"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          )
                        })}
                      </motion.tr>
                      <AnimatePresence>
                        {row.getIsExpanded() && (
                          <motion.tr
                            initial={{ y: -10, opacity: 0 }}
                            animate={{
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.2, type: 'tween' }
                            }}
                            exit={{ y: -10, opacity: 0 }}
                          >
                            {/* 2nd row is a custom 1 cell row */}
                            <td colSpan={row.getVisibleCells().length}>
                              {renderSubComponent({ row })}
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </Fragment>
                  )
                })}
              </tbody>
            ) : (
              <>
                {isLoading ? (
                  <motion.tbody
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <tr>
                      <td
                        colSpan={table.getAllColumns().length}
                        className="py-12 text-center"
                      >
                        <CgSpinner className="mx-auto animate-spin text-5xl" />
                      </td>
                    </tr>
                  </motion.tbody>
                ) : (
                  <motion.tbody
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <tr>
                      <td
                        colSpan={table.getAllColumns().length}
                        className="pb-6 pt-2 text-center"
                      >
                        <img
                          src="/images/no-data.webp"
                          alt="Empty"
                          width={200}
                          height={200}
                          className="mx-auto"
                        />
                        <p className="mb-2 font-bold text-gray-700">
                          Showing 0 Data
                        </p>
                        <p className="text-sm font-medium text-gray-500">
                          Please use filter to see specific data
                        </p>
                      </td>
                    </tr>
                  </motion.tbody>
                )}
              </>
            )}
          </AnimatePresence>
        </table>
      </div>
      {hasData && state?.pagination && (
        <Pagination
          table={table}
          totalData={totalData}
          pageCount={pageCount}
        />
      )}
    </div>
  )
}
