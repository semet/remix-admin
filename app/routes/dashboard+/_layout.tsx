import { Outlet } from '@remix-run/react'

import { useLayout } from '~/contexts'
import {
  ContentWrapper,
  Header,
  MobileSidebar,
  ScrollToTop,
  Sidebar
} from '~/layouts/dashboard'

const DashboardLayout = () => {
  const { containerWidth } = useLayout()
  return (
    <div className="flex min-h-screen">
      <div className="bg-primary">
        <Sidebar />
        <MobileSidebar />
      </div>
      <div
        className="flex flex-1 flex-col"
        style={{
          maxWidth: containerWidth
        }}
      >
        <Header />
        <ContentWrapper>
          <Outlet />
          <ScrollToTop />
        </ContentWrapper>
      </div>
    </div>
  )
}

export default DashboardLayout
