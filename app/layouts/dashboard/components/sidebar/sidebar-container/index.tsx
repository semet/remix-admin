import { motion } from 'framer-motion'

import { useLayout } from '~/contexts'
import { Logo, SidebarContent } from '~/layouts/dashboard'

export const SidebarContainer = () => {
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
      className="sticky bottom-10 top-0 hidden max-h-screen text-white md:block"
    >
      <Logo />
      <SidebarContent />
    </motion.aside>
  )
}
