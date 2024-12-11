import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BiPlus } from 'react-icons/bi'

import { Button, SidePanel } from '~/components/base-ui'
import { Input, Select } from '~/components/forms'

import { CreatePersonForm, createPersonSchema } from './schema'

export const CreatePerson = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const formMethods = useForm<CreatePersonForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: 18,
      status: 'single'
    },
    resolver: zodResolver(createPersonSchema)
  })
  const { handleSubmit, reset } = formMethods
  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <SidePanel
      position="right"
      size="sm"
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={
        <Button
          variant="primary"
          onClick={() => setIsOpen(!isOpen)}
          className="capitalize"
          icon={BiPlus}
        >
          Create
        </Button>
      }
      title="Create Person"
    >
      <FormProvider {...formMethods}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          <Input<CreatePersonForm>
            name="firstName"
            label="First Name"
          />
          <Input<CreatePersonForm>
            name="lastName"
            label="Last Name"
          />
          <Input<CreatePersonForm>
            name="email"
            label="Email"
          />
          <Input<CreatePersonForm>
            name="age"
            label="Age"
            type="number"
          />
          <Select<CreatePersonForm>
            name="status"
            label="Status"
            options={[
              { label: 'Single', value: 'single' },
              { label: 'Relationship', value: 'relationship' },
              { label: 'Complicated', value: 'complicated' }
            ]}
          />
          <div className="flex justify-center gap-4">
            <Button type="submit">Create</Button>
            <Button
              type="reset"
              variant="info"
              onClick={() => {
                reset()
                setIsOpen(false)
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </FormProvider>
    </SidePanel>
  )
}
