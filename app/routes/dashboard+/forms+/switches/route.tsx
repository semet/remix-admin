import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Card } from '~/components/base-ui'
import { Switch } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Switch Page',
      description: 'Switch Page Example'
    }
  ]
}

const ToggleSwitchPage = () => {
  const variants = ['success', 'error', 'warning', 'info', 'primary'] as const
  const sizes = ['sm', 'md', 'lg'] as const

  const formMethods = useForm({
    defaultValues: {
      success: true,
      error: true,
      warning: true,
      info: true,
      primary: true,
      sm: true,
      md: true,
      lg: true
    }
  })
  const { handleSubmit, reset } = formMethods

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log('variable data:', data)
  })
  return (
    <>
      <PageTitle title="Toggle Switch" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Switch Example"
        >
          <FormProvider {...formMethods}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="space-y-4">
                  <span className="font-semibold text-slate-600">
                    Different variant
                  </span>
                  {variants.map((variant) => (
                    <Switch
                      key={variant}
                      name={variant}
                      variant={variant}
                      label={`Switch ${variant}`}
                    />
                  ))}
                </div>
                <div className="space-y-4">
                  <span className="font-semibold text-slate-600">
                    Different Sizes
                  </span>
                  {sizes.map((size) => (
                    <Switch
                      key={size}
                      name={size}
                      size={size}
                      label={`Radio ${size}`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-2">
                <Button
                  type="reset"
                  variant="error"
                  onClick={() => reset()}
                >
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </FormProvider>
        </Card>
      </PageContainer>
    </>
  )
}

export default ToggleSwitchPage
