import { Link, useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

import { useLayout } from '~/contexts'
import { DesktopSidebarLarge, SidebarBadge } from '~/layouts/dashboard'
import { menus } from '~/layouts/dashboard/data'

export const MobileSidebarContent = () => {
  const { toggleMobileSidebar } = useLayout()
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const { pathname } = useLocation()
  useEffect(() => {
    for (const { id, subs } of menus) {
      if (subs?.some((child) => child.href === pathname)) {
        setActiveTab(id)
        break
      }
    }
  }, [pathname])
  return (
    <div className="flex flex-col">
      <div className="flex h-[70px] items-center justify-between bg-black/15 pr-4">
        <img
          src="/images/logo-lg.png"
          alt="Logo"
          className="h-[30px] w-[100px] object-contain"
        />
        <motion.button
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={toggleMobileSidebar}
        >
          <IoMdClose className="text-lg text-white" />
        </motion.button>
      </div>
      <div className="h-screen overflow-y-auto px-4 pb-20 pt-4 scrollbar-thin scrollbar-track-primary scrollbar-thumb-black/15">
        <ul className="mt-4 flex flex-col gap-2">
          {menus.map((menu) => {
            const {
              id,
              href,
              icon: Icon,
              name,
              badge,
              badgeVariant,
              subs
            } = menu
            return (
              <li
                key={name}
                className="py-2"
              >
                {!subs && href ? (
                  <Link
                    to={href}
                    onClick={() => {
                      setActiveTab(id)
                      toggleMobileSidebar()
                    }}
                    className={twMerge([
                      'flex items-start justify-start gap-2 text-slate-300 hover:text-white',

                      pathname === href && 'text-white'
                    ])}
                  >
                    <Icon className="text-lg" />
                    <span className={twMerge(['inline-block text-sm'])}>
                      {name}
                    </span>
                    {badge && (
                      <SidebarBadge
                        badge={badge}
                        variant={badgeVariant}
                      />
                    )}
                  </Link>
                ) : (
                  <DesktopSidebarLarge
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    {...menu}
                  />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
