import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Card } from '~/components/base-ui'
import { Radio } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Radio Buttons',
      description: 'Radio Button Example'
    }
  ]
}

const RadioButtonsPage = () => {
  const variants = ['success', 'error', 'warning', 'info', 'primary'] as const
  const sizes = ['sm', 'md', 'lg'] as const

  const formMethods = useForm()
  return (
    <>
      <PageTitle title="Radio Buttons" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Radio Button Example"
        >
          <FormProvider {...formMethods}>
            <form className="flex gap-6">
              <div className="space-y-4">
                <span className="font-semibold text-slate-600">
                  Different variant
                </span>
                {variants.map((variant) => (
                  <Radio
                    key={variant}
                    name={variant}
                    variant={variant}
                    label={`Radio ${variant}`}
                  />
                ))}
              </div>
              <div className="space-y-4">
                <span className="font-semibold text-slate-600">
                  Different Sizes
                </span>
                {sizes.map((size) => (
                  <Radio
                    key={size}
                    name={size}
                    size={size}
                    label={`Radio ${size}`}
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

export default RadioButtonsPage
