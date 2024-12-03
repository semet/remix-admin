import { Link, useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'
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
  const { desktopSidebarExpanded } = useLayout()
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
    <motion.div
      initial={{
        width: desktopSidebarExpanded ? 250 : 70,
        transformOrigin: 'left'
      }}
      animate={{
        width: desktopSidebarExpanded ? 250 : 70,
        transformOrigin: 'left'
      }}
      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
      ref={ref}
      className={twMerge([
        'max-h-screen overflow-y-auto px-4 pb-20 pt-4 scrollbar-thin scrollbar-track-primary scrollbar-thumb-black/15',
        desktopSidebarExpanded ? 'w-[250px]' : 'w-auto'
      ])}
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
                      desktopSidebarExpanded
                        ? 'justify-start'
                        : 'justify-center',
                      pathname === href && 'text-white'
                    ])}
                  >
                    <Icon className="text-lg" />
                    <span
                      className={twMerge([
                        'text-sm',
                        desktopSidebarExpanded ? 'inline-block' : 'hidden'
                      ])}
                    >
                      {name}
                    </span>
                  </Link>
                ) : (
                  <>
                    {desktopSidebarExpanded ? (
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
    </motion.div>
  )
}
