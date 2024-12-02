import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import { useLayout } from '~/contexts'
import { Logo, SidebarContent } from '~/layouts/dashboard'

export const Sidebar = () => {
  const { sidebarExpanded } = useLayout()
  return (
    <motion.aside
      style={{ zIndex: 1000, width: sidebarExpanded ? 250 : 70 }}
      initial={{ width: sidebarExpanded ? 250 : 70, transformOrigin: 'left' }}
      animate={{ width: sidebarExpanded ? 250 : 70, transformOrigin: 'left' }}
      transition={{ type: 'spring', bounce: 0 }}
      className={twMerge([
        'sticky top-0 hidden h-screen w-full bg-primary text-white md:block'
      ])}
    >
      <Logo />
      <SidebarContent />
    </motion.aside>
  )
}
