import { MetaFunction } from '@remix-run/react'

import { PaginationProvider } from '~/contexts'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { Content } from './content'
import { Toolbar } from './toolbar'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Basic Table',
      description: 'Basic Table Example'
    }
  ]
}

const BlankPage = () => {
  return (
    <PaginationProvider>
      <PageTitle title="Basic Table" />
      <PageContainer className="space-y-4">
        <Toolbar />
        <Content />
      </PageContainer>
    </PaginationProvider>
  )
}

export default BlankPage
