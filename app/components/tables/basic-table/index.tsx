import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

import { Pagination, RowPerPage, TableSearch } from '~/components/tables'

import { BasicTableProps } from './type'

export const BasicTable = <T,>(props: BasicTableProps<T>) => {
  const {
    columns,
    data = [],
    state,
    showFooter = false,
    stripped = false,
    hovered = false,
    isLoading,
    pageCount,
    totalData,
    setPagination
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
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
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
                className="border-b border-slate-200 text-left text-sm font-semibold text-slate-600"
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
              <>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <motion.tr
                      key={row.id}
                      className={twMerge([
                        'border-b border-slate-200 text-sm text-slate-500',
                        hovered && 'hover:bg-slate-100',
                        stripped && 'odd:bg-slate-100',
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
                {showFooter && (
                  <tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                      <tr
                        key={footerGroup.id}
                        className="border-b border-slate-200 text-left text-sm font-semibold text-slate-500"
                      >
                        {footerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="p-4"
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.footer,
                                  header.getContext()
                                )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </tfoot>
                )}
              </>
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
