import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Sortable Table',
      description: 'Sortable Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Sortable Table" />
      <PageContainer className="space-y-4">
        <></>
      </PageContainer>
    </>
  )
}

export default BlankPage
