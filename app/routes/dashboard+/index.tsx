import { MetaFunction } from '@remix-run/react'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

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
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="mb-4 bg-white p-4 shadow"
          >
            <h2 className="text-lg font-semibold">Post {i + 1}</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              quidem.
            </p>
          </div>
        ))}
      </PageContainer>
    </>
  )
}

export default Dashboard
