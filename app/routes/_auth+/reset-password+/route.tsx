import { zodResolver } from '@hookform/resolvers/zod'
import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Alert, Button } from '~/components/base-ui'
import { Input } from '~/components/forms'

import { ResetPasswordInput, resetPasswordSchema } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Reset Password',
      description: 'Reset Password page'
    }
  ]
}

const ResetPasswordPage = () => {
  const formMethods = useForm<ResetPasswordInput>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(resetPasswordSchema)
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
          Reset Password
        </h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          <Alert
            message="Enter your email address and we'll send you a link to reset your password."
            variant="info"
            title="Forgot your password?"
          />
          <Input<ResetPasswordInput>
            name="email"
            label="Email"
            required
          />
          <Button
            type="submit"
            className="mt-2"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}

export default ResetPasswordPage
