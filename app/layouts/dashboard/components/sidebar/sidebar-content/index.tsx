import { Link, useLocation } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useResizeObserver } from 'usehooks-ts'

import { useLayout } from '~/contexts'
import {
  DesktopSidebarLarge,
  DesktopSidebarSmall,
  menus,
  SidebarSkeleton
} from '~/layouts/dashboard'

export const SidebarContent = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const { pathname } = useLocation()
  const { sidebarExpanded } = useLayout()
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useResizeObserver({
    ref
  })

  useEffect(() => {
    for (const { id, children } of menus) {
      if (children?.some((child) => child.href === pathname)) {
        setActiveTab(id)
        break
      }
    }
  }, [pathname])
  return (
    <div
      ref={ref}
      className="scrollbar-thin scrollbar-thumb-black/15 scrollbar-track-primary max-h-screen overflow-y-auto px-4 pb-20 pt-4"
    >
      <ul className="mt-4 flex flex-col gap-2">
        {!width ? (
          <SidebarSkeleton />
        ) : (
          <>
            {menus.map(({ id, href, icon: Icon, name, children }) => (
              <li
                key={name}
                className="py-2"
              >
                {!children && href ? (
                  <Link
                    to={href}
                    onClick={() => setActiveTab(null)}
                    className={twMerge([
                      'flex items-start gap-2 text-slate-300 hover:text-white',
                      sidebarExpanded ? 'justify-start' : 'justify-center',
                      pathname === href && 'text-white'
                    ])}
                  >
                    <Icon className="text-lg" />
                    <span
                      className={twMerge([
                        'text-sm',
                        sidebarExpanded ? 'inline-block' : 'hidden'
                      ])}
                    >
                      {name}
                    </span>
                  </Link>
                ) : (
                  <>
                    {sidebarExpanded ? (
                      <DesktopSidebarLarge
                        activeTab={activeTab}
                        icon={Icon}
                        id={id}
                        name={name}
                        setActiveTab={setActiveTab}
                        subs={children}
                      />
                    ) : (
                      <DesktopSidebarSmall
                        activeTab={activeTab}
                        icon={Icon}
                        id={id}
                        name={name}
                        setActiveTab={setActiveTab}
                        subs={children}
                      />
                    )}
                  </>
                )}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  )
}
