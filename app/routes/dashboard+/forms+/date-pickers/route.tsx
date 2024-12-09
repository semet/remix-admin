import { MetaFunction } from '@remix-run/react'
import dayjs from 'dayjs'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Card } from '~/components/base-ui'
import { DatePicker } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { DateFormInput } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Date Picker Page',
      description: 'Date Picker Example'
    }
  ]
}

const DatePickerPage = () => {
  const formMethods = useForm<DateFormInput>({
    defaultValues: {
      startDate: dayjs(String(new Date())).format('YYYY-MM-DD'),
      endDate: dayjs(String(new Date())).format('YYYY-MM-DD'),
      fromDate: dayjs(String(new Date())).format('YYYY-MM-DD'),
      toDate: dayjs(String(new Date())).add(5, 'day').format('YYYY-MM-DD')
    }
  })
  const { handleSubmit, clearErrors, watch } = formMethods
  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <>
      <PageTitle title="Date Picker" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Date Picker Example"
        >
          <FormProvider {...formMethods}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2"
            >
              <span className="font-semibold text-slate-600">
                Basic Example
              </span>
              <div className="mb-4 flex gap-2">
                <DatePicker<DateFormInput>
                  name="startDate"
                  label="Start Date"
                  required
                />
                <DatePicker<DateFormInput>
                  name="endDate"
                  label="End Date"
                  required
                />
              </div>
              <span className="font-semibold text-slate-600">Date Range</span>
              <div className="flex gap-2">
                <DatePicker<DateFormInput>
                  selected={new Date(watch('startDate'))}
                  name="fromDate"
                  label="From"
                  required
                  selectsStart
                  startDate={new Date(watch('fromDate'))}
                  endDate={new Date(watch('toDate'))}
                />
                <DatePicker<DateFormInput>
                  selected={new Date(watch('endDate'))}
                  name="toDate"
                  label="To"
                  required
                  selectsEnd
                  startDate={new Date(watch('fromDate'))}
                  endDate={new Date(watch('toDate'))}
                />
              </div>
              <div className="mt-6 flex justify-center gap-2">
                <Button
                  type="reset"
                  variant="error"
                >
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
                <Button
                  type="reset"
                  variant="warning"
                  onClick={() => clearErrors()}
                >
                  Clear Error
                </Button>
              </div>
            </form>
          </FormProvider>
        </Card>
      </PageContainer>
    </>
  )
}

export default DatePickerPage
