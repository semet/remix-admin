import { MetaFunction } from '@remix-run/react'

import { Card } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Blank Page',
      description: 'Blank Page Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Blank Page" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Blank Page"
        ></Card>
      </PageContainer>
    </>
  )
}

export default BlankPage
