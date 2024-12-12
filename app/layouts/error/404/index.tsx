import { Link } from '@remix-run/react'

export const Error404 = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-4 sm:w-1/2">
        <img
          src="/images/error400-cover.png"
          alt="404"
          className="object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-center text-lg font-semibold uppercase text-slate-600">
            Sorry, Page not found
          </span>
          <span className="text-center text-sm text-gray-600">
            The page you are looking for cannot be found
          </span>
          <Link
            className="rounded bg-primary px-4 py-2 text-white"
            to="/dashboard"
            replace
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
