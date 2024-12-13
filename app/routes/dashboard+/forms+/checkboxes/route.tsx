import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Card } from '~/components/base-ui'
import { Checkbox } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Checkbox Page',
      description: 'Checkbox Page Example'
    }
  ]
}

const CheckboxPage = () => {
  const variants = ['success', 'error', 'warning', 'info', 'primary'] as const
  const sizes = ['sm', 'md', 'lg'] as const
  const formMethods = useForm()
  return (
    <>
      <PageTitle title="Checkboxes" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Checkbox Example"
        >
          <FormProvider {...formMethods}>
            <form className="flex flex-col gap-6 sm:flex-row">
              <div className="space-y-4">
                <span className="font-semibold text-slate-600">
                  Different variant
                </span>
                {variants.map((variant) => (
                  <Checkbox
                    key={variant}
                    name={variant}
                    variant={variant}
                    label={`Checkbox ${variant}`}
                  />
                ))}
              </div>
              <div className="space-y-4">
                <span className="font-semibold text-slate-600">
                  Different Sizes
                </span>
                {sizes.map((size) => (
                  <Checkbox
                    key={size}
                    name={size}
                    size={size}
                    label={`Checkbox ${size}`}
                  />
                ))}
              </div>
            </form>
          </FormProvider>
        </Card>
      </PageContainer>
    </>
  )
}

export default CheckboxPage
