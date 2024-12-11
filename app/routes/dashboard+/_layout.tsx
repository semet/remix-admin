import { Outlet } from '@remix-run/react'

import {
  ContentWrapper,
  Header,
  MobileSidebar,
  Sidebar
} from '~/layouts/dashboard'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="bg-primary">
        <Sidebar />
        <MobileSidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <Header />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </div>
    </div>
  )
}

export default DashboardLayout
