import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Infinite Scroll Table',
      description: 'Infinite Scroll Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <>
      <PageTitle title="Infinite Scroll Table" />
      <PageContainer className="space-y-4">
        <></>
      </PageContainer>
    </>
  )
}

export default BlankPage
