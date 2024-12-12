import { Outlet } from '@remix-run/react'

const AuthLayout = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-100">
      {/* Background */}
      <div
        className="absolute -top-1/4 z-0 h-full w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/auth-one-bg.jpg")'
        }}
      >
        <div className="h-full w-full bg-primary/80" />
        <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[377px] w-[calc(283%+1.3px)]"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="fill-slate-100"
            ></path>
          </svg>
        </div>
      </div>

      <div className="absolute left-1/2 top-[45%] z-10 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-6 px-6 sm:w-[500px]">
        <img
          src="/images/logo-lg.png"
          alt="Logo"
        />
        <div className="w-full rounded bg-white p-4 shadow sm:px-8 sm:py-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
