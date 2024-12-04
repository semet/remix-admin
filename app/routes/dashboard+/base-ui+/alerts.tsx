import { MetaFunction } from '@remix-run/react'
import { Alert, Card } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Alert',
      description: 'Alert page'
    }
  ]
}

const AlertPage = () => {
  const variants = ['success', 'error', 'warning', 'info', 'primary'] as const
  return (
    <>
      <PageTitle title="Alerts" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Basic Alert"
        >
          {variants.map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              title={variant}
              message={`This is a ${variant} alert message`}
            />
          ))}
        </Card>
        <Card
          className="flex flex-col gap-4"
          title="Alert With Icon"
        >
          {variants.map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              title={variant}
              showIcon
              message={`This is a ${variant} alert message`}
            />
          ))}
        </Card>
      </PageContainer>
    </>
  )
}

export default AlertPage
