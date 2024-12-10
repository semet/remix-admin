import { motion } from 'framer-motion'
import { FormProvider, useForm } from 'react-hook-form'
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight
} from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

import { Input } from '~/components/forms'
import { PaginationProps } from '~/types'

export const Pagination = <T,>(props: PaginationProps<T>) => {
  const { table, totalData, pageCount } = props

  const currentPage = table.getState().pagination.pageIndex + 1

  const formMethods = useForm({
    defaultValues: {
      page: table.getState().pagination.pageIndex + 1
    }
  })

  const {
    setValue,
    handleSubmit,
    formState: { touchedFields }
  } = formMethods

  const onSubmit = handleSubmit((data) => {
    if (!data.page || !pageCount) return

    if (data.page > pageCount || data.page < 1) {
      return
    }
    table.setPageIndex(data.page - 1)
  })
  const handleFirstPageClick = () => {
    table.setPageIndex(0)
    if (touchedFields.page) {
      setValue('page', 1)
    }
  }
  const handlePrevPageClick = () => {
    table.previousPage()
    if (touchedFields.page) {
      setValue('page', table.getState().pagination.pageIndex)
    }
  }
  const handleLastPageClick = () => {
    table.setPageIndex(table.getPageCount() - 1)
    if (touchedFields.page) {
      setValue('page', table.getPageCount())
    }
  }
  const handleNextPageClick = () => {
    table.nextPage()
    if (touchedFields.page) {
      setValue('page', table.getState().pagination.pageIndex + 2)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 gap-y-3 p-4 md:flex-row">
      <ul className="flex items-center gap-2">
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFirstPageClick}
            disabled={!table.getCanPreviousPage()}
            className={twMerge([
              'flex items-center rounded-full bg-primary/10 p-2 text-slate-500 hover:bg-primary hover:text-white disabled:cursor-not-allowed',
              !table.getCanPreviousPage() &&
                'hover:bg-primary/10 hover:text-slate-500'
            ])}
          >
            <MdKeyboardDoubleArrowLeft className="text-lg" />
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevPageClick}
            disabled={!table.getCanPreviousPage()}
            className={twMerge([
              'flex items-center rounded-full bg-primary/10 p-2 text-slate-500 hover:bg-primary hover:text-white disabled:cursor-not-allowed',
              !table.getCanPreviousPage() &&
                'hover:bg-primary/10 hover:text-slate-500'
            ])}
          >
            <MdKeyboardArrowLeft className="text-lg" />
          </motion.button>
        </li>
        <li>
          <span className="text-sm text-slate-500">{currentPage}</span>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextPageClick}
            disabled={!table.getCanNextPage()}
            className={twMerge([
              'flex items-center rounded-full bg-primary/10 p-2 text-slate-500 hover:bg-primary hover:text-white disabled:cursor-not-allowed',
              !table.getCanNextPage() &&
                'hover:bg-primary/10 hover:text-slate-500'
            ])}
          >
            <MdKeyboardArrowRight className="text-lg" />
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLastPageClick}
            disabled={!table.getCanNextPage()}
            className={twMerge([
              'flex items-center rounded-full bg-primary/10 p-2 text-slate-500 hover:bg-primary hover:text-white disabled:cursor-not-allowed',
              !table.getCanNextPage() &&
                'hover:bg-primary/10 hover:text-slate-500'
            ])}
          >
            <MdKeyboardDoubleArrowRight className="text-lg" />
          </motion.button>
        </li>
      </ul>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <Input
            name="page"
            type="number"
            size="sm"
            className="w-16 text-center md:w-24 md:text-left"
            placeholder="Go to page"
            rules={{
              onChange(event) {
                const value = Number(event.target.value)
                if (
                  isNaN(value) ||
                  value < 1 ||
                  !pageCount ||
                  value > pageCount
                ) {
                  event.target.value = ''
                }
              }
            }}
          />
        </form>
      </FormProvider>
      <div className="text-sm tracking-wide text-slate-500">
        Showing {table.getRowModel().rows.length.toString()} of {totalData} data
      </div>
    </div>
  )
}
