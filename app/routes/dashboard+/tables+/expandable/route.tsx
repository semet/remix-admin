import { MetaFunction } from '@remix-run/react'

import { PaginationProvider } from '~/contexts'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { Content } from './content'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Expandable Table',
      description: 'Expandable Table Example'
    }
  ]
}

const ExpandableTablePage = () => {
  return (
    <PaginationProvider>
      <PageTitle title="Basic Table" />
      <PageContainer className="space-y-4">
        <Content />
      </PageContainer>
    </PaginationProvider>
  )
}

export default ExpandableTablePage
