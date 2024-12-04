import { MetaFunction } from '@remix-run/react'

import { Card, HorizontalTab, VerticalTab } from '~/components/base-ui'
import { dummyTabData } from '~/data'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Tabs',
      description: 'Tabs page'
    }
  ]
}

const TabsPage = () => {
  return (
    <>
      <PageTitle title="Tabs" />
      <PageContainer className="space-y-4">
        <Card title="Horizontal Tab">
          <HorizontalTab data={dummyTabData} />
        </Card>
        <Card title="Vertical Tab">
          <VerticalTab data={dummyTabData} />
        </Card>
      </PageContainer>
    </>
  )
}

export default TabsPage
