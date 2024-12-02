import { Outlet } from '@remix-run/react'

import { Content, Header, Sidebar } from '~/layouts/dashboard'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  )
}

export default DashboardLayout
