import { MetaFunction } from '@remix-run/react'

import { PaginationProvider } from '~/contexts'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { Content } from './content'

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
    <PaginationProvider>
      <PageTitle title="Basic Table" />
      <PageContainer className="space-y-4">
        <Content />
      </PageContainer>
    </PaginationProvider>
  )
}

export default BlankPage
