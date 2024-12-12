import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { BarChartExample } from './bar-chart'
import { ComposedChartExample } from './composed-chart'
import { LineChartExample } from './line-chart'
import { PieChartExample } from './pie-chart'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Chart Page',
      description: 'Chart Page Example'
    }
  ]
}

const ChartsPage = () => {
  return (
    <>
      <PageTitle title="Chart Page" />
      <PageContainer className="space-y-4">
        <LineChartExample />
        <BarChartExample />
        <ComposedChartExample />
        <PieChartExample />
      </PageContainer>
    </>
  )
}

export default ChartsPage
