import { zodResolver } from '@hookform/resolvers/zod'
import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Card } from '~/components/base-ui'
import { AdvanceSelect, Select } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import {
  countryOptions,
  groceryOptions,
  statusOptions,
  tagsOptions
} from './options'
import { inputSchema, SelectInput } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Select Input',
      description: 'Select Input Page page'
    }
  ]
}

const SelectInputPage = () => {
  const formMethods = useForm<SelectInput>({
    resolver: zodResolver(inputSchema)
  })

  const { handleSubmit, clearErrors } = formMethods
  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <>
      <PageTitle title="Select Input" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Select Input Example"
        >
          <FormProvider {...formMethods}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Select<SelectInput>
                  name="status"
                  label="Status"
                  options={statusOptions}
                  containerClassName="col-span-2 md:col-span-1"
                />
                <AdvanceSelect<SelectInput>
                  name="country"
                  label="Select (React Select)"
                  options={countryOptions}
                  placeholder="Select Country"
                  containerClassName="col-span-2 md:col-span-1"
                />
                <AdvanceSelect<SelectInput>
                  name="grocery"
                  label="Searchable"
                  isSearchable
                  options={groceryOptions}
                  placeholder="Select Grocery"
                  containerClassName="col-span-2 md:col-span-1"
                />
                <AdvanceSelect<SelectInput>
                  containerClassName="col-span-2 md:col-span-1"
                  name="tags"
                  label="Tags Input"
                  isSearchable
                  isMulti={true}
                  options={tagsOptions}
                  placeholder="Select Tags"
                />
              </div>
              <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
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

export default SelectInputPage
