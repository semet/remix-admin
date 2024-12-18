import { MetaFunction } from '@remix-run/react'

import { Card } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { SortableX } from './sortable-x'
import { SortableY } from './sortable-y'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Sortable List',
      description: 'Sortable List Example'
    }
  ]
}

const SortableListPage = () => {
  return (
    <>
      <PageTitle title="Sortable List" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Sortable Y Axis"
        >
          <SortableY />
        </Card>
        <Card
          className="flex gap-4"
          title="Sortable X Axis"
        >
          <SortableX />
        </Card>
      </PageContainer>
    </>
  )
}

export default SortableListPage
