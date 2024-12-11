import { MetaFunction } from '@remix-run/react'

import { PaginationProvider } from '~/contexts'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { Content } from './content'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Selectable Table',
      description: 'Selectable Table Example'
    }
  ]
}

const SelectableTablePage = () => {
  return (
    <PaginationProvider>
      <PageTitle title="Selectable Table" />
      <PageContainer className="space-y-4">
        <Content />
      </PageContainer>
    </PaginationProvider>
  )
}

export default SelectableTablePage
