import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Editable Table',
      description: 'Editable Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Editable Table" />
      <PageContainer className="space-y-4">
        <></>
      </PageContainer>
    </>
  )
}

export default BlankPage
