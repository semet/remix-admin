import { AnimatePresence, motion } from 'framer-motion'
import { CgMenuLeft, CgChevronDoubleRight } from 'react-icons/cg'

import { useLayout } from '~/contexts'

export const ToggleSidebar = () => {
  const { toggleSidebar, sidebarExpanded } = useLayout()

  return (
    <motion.button
      onClick={toggleSidebar}
      className="text-slate-500 hover:text-slate-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence>
        {sidebarExpanded ? (
          <motion.div
            key="chevron-right"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0 }}
          >
            <CgMenuLeft size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="menu-left"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0 }}
          >
            <CgChevronDoubleRight size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
