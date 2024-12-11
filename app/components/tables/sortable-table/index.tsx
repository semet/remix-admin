/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiSortDown, BiSortUp } from 'react-icons/bi'
import { CgSpinner } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

import { RowPerPage, TableSearch, Pagination } from '~/components/tables'

import { SortableTableProps } from './type'

export const SortableTable = <T,>(props: SortableTableProps<T>) => {
  const {
    columns,
    data = [],
    state,
    isLoading,
    pageCount,
    totalData,
    setSorting,
    setPagination
  } = props
  const [globalFilter, setGlobalFilter] = useState<string>('')
  const table = useReactTable({
    columns,
    data,
    state: {
      pagination: state?.pagination,
      sorting: state?.sorting,
      globalFilter
    },
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    manualPagination: true,
    manualSorting: true
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
                      className="p-2"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={
                            header.column.getCanSort()
                              ? 'flex cursor-pointer select-none items-center'
                              : ''
                          }
                          onClick={header.column.getToggleSortingHandler()}
                          title={
                            header.column.getCanSort()
                              ? (() => {
                                  const nextOrder =
                                    header.column.getNextSortingOrder()
                                  if (nextOrder === 'asc')
                                    return 'Sort ascending'
                                  if (nextOrder === 'desc')
                                    return 'Sort descending'
                                  return 'Clear sort'
                                })()
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getIsSorted() === 'desc' && (
                            <BiSortUp className="ml-1" />
                          )}
                          {header.column.getIsSorted() === 'asc' && (
                            <BiSortDown className="ml-1" />
                          )}
                          {!header.column.getIsSorted() &&
                            header.column.getCanSort() && (
                              <BiSortDown className="ml-1 text-[#D1D5DB]" />
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
                {table.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    className={twMerge([
                      'border-b border-gray-200 text-sm text-slate-500 hover:bg-gray-100',
                      state?.pagination ? 'last:border-b' : 'last:border-b-0'
                    ])}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="p-4"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
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
