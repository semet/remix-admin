import { MetaFunction } from '@remix-run/react'

import { PageContainer, PageTitle } from '~/layouts/dashboard'

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
      <PageContainer>
        <StatsSection />
      </PageContainer>
    </>
  )
}

export default Dashboard
