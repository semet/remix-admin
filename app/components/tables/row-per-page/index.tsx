import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Select } from '~/components/forms'
import { PageSizeFilter, PageSizeProps } from '~/types'

export const RowPerPage = <T,>({ table }: PageSizeProps<T>) => {
  const formMethods = useForm({
    defaultValues: {
      pageSize: table.getState().pagination.pageSize
    }
  })

  const { watch } = formMethods
  const watchPageSize = watch('pageSize')
  useEffect(() => {
    table.setPagination({
      pageIndex: 0,
      pageSize: watchPageSize
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchPageSize])
  return (
    <FormProvider {...formMethods}>
      <form className="flex items-center gap-2">
        <span className="hidden text-sm text-slate-500 sm:inline">showing</span>
        <Select<PageSizeFilter>
          name="pageSize"
          size="sm"
          options={[
            { label: '10', value: 10 },
            { label: '25', value: 25 },
            { label: '50', value: 50 },
            { label: '100', value: 100 }
          ]}
        />
        <span className="hidden text-sm text-slate-500 sm:inline">entries</span>
      </form>
    </FormProvider>
  )
}
