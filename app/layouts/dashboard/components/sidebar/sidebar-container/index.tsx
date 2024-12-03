import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import { useLayout } from '~/contexts'
import { Logo, SidebarContent } from '~/layouts/dashboard'

export const Sidebar = () => {
  const { desktopSidebarExpanded } = useLayout()
  return (
    <motion.aside
      style={{ zIndex: 1000, width: desktopSidebarExpanded ? 250 : 70 }}
      initial={{
        width: desktopSidebarExpanded ? 250 : 70,
        transformOrigin: 'left'
      }}
      animate={{
        width: desktopSidebarExpanded ? 250 : 70,
        transformOrigin: 'left'
      }}
      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
      className={twMerge([
        'sticky bottom-10 top-0 hidden bg-primary text-white md:block'
      ])}
    >
      <Logo />
      <SidebarContent />
    </motion.aside>
  )
}
