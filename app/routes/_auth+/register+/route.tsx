import { zodResolver } from '@hookform/resolvers/zod'
import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '~/components/base-ui'
import { Input } from '~/components/forms'

import { RegisterInput, registerSchema } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Register',
      description: 'Register page'
    }
  ]
}

const RegisterPage = () => {
  const formMethods = useForm<RegisterInput>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    resolver: zodResolver(registerSchema)
  })
  const { handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <FormProvider {...formMethods}>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-lg font-semibold text-slate-600">
          Register
        </h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          <Input<RegisterInput>
            name="email"
            label="Email"
            required
          />
          <Input<RegisterInput>
            name="password"
            label="Password"
            required
            type="password"
          />
          <Input<RegisterInput>
            name="confirmPassword"
            label="Confirm Password"
            required
            type="password"
          />
          <Button
            type="submit"
            className="mt-2"
          >
            Register
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}

export default RegisterPage
