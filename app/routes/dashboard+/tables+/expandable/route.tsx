import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Expandable Table',
      description: 'Expandable Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Expandable Table" />
      <PageContainer className="space-y-4">
        <></>
      </PageContainer>
    </>
  )
}

export default BlankPage
