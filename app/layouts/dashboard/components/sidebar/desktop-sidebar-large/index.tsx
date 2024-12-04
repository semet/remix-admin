import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { Link, useLocation } from '@remix-run/react'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction } from 'react'
import { BsDash } from 'react-icons/bs'
import { IoChevronDown } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

import { useLayout } from '~/contexts'
import { Menu, SidebarBadge } from '~/layouts/dashboard'

type Props = Menu & {
  activeTab: number | null
  setActiveTab: Dispatch<SetStateAction<number | null>>
}

export const DesktopSidebarLarge: FC<Props> = (props) => {
  const {
    activeTab,
    icon: Icon,
    id,
    name,
    setActiveTab,
    subs,
    badge,
    badgeVariant
  } = props
  const { pathname } = useLocation()
  const { toggleMobileSidebar, windowWidth } = useLayout()

  return (
    <Disclosure>
      <DisclosureButton
        as={'button'}
        onClick={() => setActiveTab((prev) => (prev === id ? null : id))}
        className={twMerge([
          'flex w-full items-start justify-start text-slate-300 hover:text-white focus:outline-none',
          activeTab === id && 'text-white'
        ])}
      >
        <div className="relative flex flex-1 justify-start gap-2">
          <Icon className="text-lg" />
          <span className="inline-block text-sm">{name}</span>
          {badge && (
            <SidebarBadge
              badge={badge}
              variant={badgeVariant}
            />
          )}
        </div>
        <IoChevronDown
          className={twMerge([
            'inline-block self-center transition-all duration-300',
            activeTab === id && 'rotate-180 transform'
          ])}
        />
      </DisclosureButton>
      <motion.div
        className="origin-top overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: activeTab === id ? 'auto' : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
      >
        <AnimatePresence>
          {activeTab === id && (
            <DisclosurePanel
              static
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className="mt-2 flex origin-top flex-col pl-4">
                {subs?.map(({ href, name, badge, badgeVariant }) => (
                  <motion.li
                    key={name}
                    className={twMerge([
                      'py-2 text-slate-300 hover:text-white',
                      pathname === href && 'text-white'
                    ])}
                    whileHover={{
                      marginLeft: 5
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                  >
                    <Link
                      to={href}
                      className="flex items-center gap-1"
                      onClick={() => {
                        if (windowWidth <= 767) {
                          toggleMobileSidebar()
                        }
                      }}
                    >
                      <BsDash className="inline-block" />
                      <span className="inline-block text-sm">{name}</span>
                      {badge && (
                        <SidebarBadge
                          badge={badge}
                          variant={badgeVariant}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </DisclosurePanel>
          )}
        </AnimatePresence>
      </motion.div>
    </Disclosure>
  )
}
