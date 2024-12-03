import { twMerge } from 'tailwind-merge'

import { useLayout } from '~/contexts'

export const SidebarSkeleton = () => {
  const { desktopSidebarExpanded } = useLayout()
  return (
    <>
      {[...Array(12)].map((_, idx) => (
        <li
          key={idx}
          className="py-2"
        >
          <div
            className={twMerge([
              'lg: flex items-center justify-center gap-2',
              desktopSidebarExpanded ? 'justify-start' : 'justify-center'
            ])}
          >
            <div className="h-5 w-5 animate-pulse rounded bg-slate-700"></div>
            <div
              className={twMerge([
                'h-4 w-36 animate-pulse rounded bg-slate-700',
                desktopSidebarExpanded ? 'block' : 'hidden'
              ])}
            ></div>
          </div>
        </li>
      ))}
    </>
  )
}
