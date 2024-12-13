import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { EventSection } from './event-section'
import { OverviewSection } from './overview-section'
import { StatsSection } from './stats-section'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Dashboard',
      description: 'Dashboard page'
    }
  ]
}

const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <PageContainer className="space-y-4">
        <StatsSection />
        <OverviewSection />
        <EventSection />
      </PageContainer>
    </>
  )
}

export default Dashboard
