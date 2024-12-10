import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Selectable Table',
      description: 'Selectable Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Selectable Table" />
      <PageContainer className="space-y-4">
        <></>
      </PageContainer>
    </>
  )
}

export default BlankPage
