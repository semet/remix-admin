import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Draggable Table',
      description: 'Draggable Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Draggable Table" />
      <PageContainer className="space-y-4">
        <></>
      </PageContainer>
    </>
  )
}

export default BlankPage
