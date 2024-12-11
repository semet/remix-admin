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

const SortableTablePage = () => {
  return (
    <PaginationProvider>
      <PageTitle title="Sortable Table" />
      <PageContainer className="space-y-4">
        <Content />
      </PageContainer>
    </PaginationProvider>
  )
}

export default SortableTablePage
