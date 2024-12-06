import { zodResolver } from '@hookform/resolvers/zod'
import { MetaFunction } from '@remix-run/react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  IoMailOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoCallOutline
} from 'react-icons/io5'

import { Button, Card } from '~/components/base-ui'
import { Input } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { BasicForm, inputSchema } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'basic Inputs',
      description: 'basic Inputs page'
    }
  ]
}

const BasicInputsPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const formMethods = useForm<BasicForm>({
    resolver: zodResolver(inputSchema)
  })
  const { handleSubmit, clearErrors } = formMethods
  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <>
      <PageTitle title="Basic Input" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Input Example"
        >
          <FormProvider {...formMethods}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <Input<BasicForm>
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
                <Input<BasicForm>
                  label="Email"
                  name="email"
                  type="text"
                  required
                  leftNode={
                    <span className="flex items-center bg-slate-100 px-4 text-sm text-slate-600">
                      <IoMailOutline className="text-xl" />
                    </span>
                  }
                />
                <Input<BasicForm>
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  rightNode={
                    <button
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                      className="flex items-center bg-slate-100 px-4 text-sm text-slate-600"
                    >
                      {showPassword ? (
                        <IoEyeOffOutline className="text-xl" />
                      ) : (
                        <IoEyeOutline className="text-xl" />
                      )}
                    </button>
                  }
                />
                <Input<BasicForm>
                  label="Phone Number"
                  name="phoneNumber"
                  type="number"
                  required
                  leftNode={
                    <span className="flex items-center bg-slate-100 px-4 text-sm text-slate-600">
                      <IoCallOutline className="text-xl" />
                    </span>
                  }
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

export default BasicInputsPage
