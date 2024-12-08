import { useLocation } from '@remix-run/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

export const Breadcrumb = () => {
  const { pathname } = useLocation()
  const paths = pathname.split('/').filter(Boolean)

  return (
    <div className="hidden sm:flex">
      {paths.map((path, index) => (
        <div
          key={path}
          className="flex items-center"
        >
          <span
            className={twMerge([
              'text-sm capitalize text-slate-500',
              index === paths.length - 1 ? 'text-slate-400' : ''
            ])}
          >
            {path}
          </span>
          {index < paths.length - 1 && (
            <MdKeyboardArrowRight className="text-slate-500" />
          )}
        </div>
      ))}
    </div>
  )
}
