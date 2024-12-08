import { MetaFunction } from '@remix-run/react'
import { IconType } from 'react-icons'
import {
  MdErrorOutline,
  MdInfoOutline,
  MdOutlineCheck,
  MdOutlineWarningAmber,
  MdTagFaces
} from 'react-icons/md'

import { Button, Card } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'
import { Variant } from '~/types'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Button',
      description: 'Button page'
    }
  ]
}

type ButtonIcon = Record<Variant, IconType>

const buttonsWithIcon: ButtonIcon = {
  primary: MdTagFaces,
  success: MdOutlineCheck,
  error: MdErrorOutline,
  warning: MdOutlineWarningAmber,
  info: MdInfoOutline
}
const buttonSizes = ['sm', 'md', 'lg'] as const

const ButtonPage = () => {
  const variants = ['success', 'error', 'warning', 'info', 'primary'] as const
  return (
    <>
      <PageTitle title="Buttons" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-wrap gap-4"
          title="Basic Button"
        >
          {variants.map((variant) => (
            <Button
              key={variant}
              variant={variant}
            >
              {variant}
            </Button>
          ))}
        </Card>
        <Card
          className="flex flex-wrap gap-4"
          title="Button With Icon"
        >
          {variants.map((variant) => {
            const Icon = buttonsWithIcon[variant]
            return (
              <Button
                key={variant}
                variant={variant}
              >
                {<Icon className="mr-2" />}
                {variant}
              </Button>
            )
          })}
        </Card>
        <Card
          className="flex flex-wrap gap-4"
          title="Button Sizes"
        >
          {buttonSizes.map((size) => {
            return (
              <Button
                key={size}
                size={size}
              >
                button {size}
              </Button>
            )
          })}
        </Card>
      </PageContainer>
    </>
  )
}

export default ButtonPage
