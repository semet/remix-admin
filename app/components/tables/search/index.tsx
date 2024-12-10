import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Input } from '~/components/forms'
import { GlobalFilter, GlobalFilterProps } from '~/types'

export const TableSearch = <T,>({ table }: GlobalFilterProps<T>) => {
  const formMethods = useForm<GlobalFilter>({
    defaultValues: {
      keyword: ''
    }
  })
  const { watch } = formMethods
  const watchKeyword = watch('keyword')
  useEffect(() => {
    const timeout = setTimeout(() => {
      table.setGlobalFilter(String(watchKeyword))
    }, 300)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchKeyword])
  return (
    <FormProvider {...formMethods}>
      <form>
        <Input<GlobalFilter>
          name="keyword"
          type="search"
          size="sm"
          placeholder="Search..."
        />
      </form>
    </FormProvider>
  )
}
