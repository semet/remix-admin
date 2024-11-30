import { Outlet } from '@remix-run/react'

const DashboardLayout = () => {
  return (
    <div>
      DashboardLayout
      <Outlet />
    </div>
  )
}

export default DashboardLayout
