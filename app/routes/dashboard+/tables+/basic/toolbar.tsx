import dayjs from 'dayjs'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, ToolbarContainer } from '~/components/base-ui'
import { DatePicker, Select } from '~/components/forms'

import { CreatePerson } from './create-person'
import { FilterForm } from './schema'

export const Toolbar = () => {
  const formMethods = useForm<FilterForm>({
    defaultValues: {
      startDate: dayjs(String(new Date())).format('YYYY-MM-DD'),
      endDate: dayjs(String(new Date())).format('YYYY-MM-DD')
    }
  })
  const { handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <ToolbarContainer className="flex items-end justify-between">
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <div className="flex items-end gap-4">
            <div className="flex gap-1">
              <DatePicker<FilterForm>
                name="startDate"
                label="Date Range"
              />
              <span className="mt-5 self-center text-sm text-slate-500">
                to
              </span>
              <DatePicker<FilterForm>
                name="endDate"
                containerClassName="self-end"
              />
            </div>
            <div>
              <Select<FilterForm>
                name="status"
                label="Status"
                options={[
                  { label: 'Single', value: 'single' },
                  { label: 'Relationship', value: 'relationship' },
                  { label: 'Complicated', value: 'complicated' }
                ]}
              />
            </div>
            <Button type="submit">Filter</Button>
            <Button
              type="reset"
              variant="info"
            >
              Rest
            </Button>
          </div>
        </form>
      </FormProvider>
      <CreatePerson />
    </ToolbarContainer>
  )
}
