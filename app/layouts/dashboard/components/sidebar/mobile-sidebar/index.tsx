import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { useLayout } from '~/contexts'
import { MobileSidebarContent } from '~/layouts/dashboard'

export const MobileSidebar = () => {
  const { showMobileSidebar, toggleMobileSidebar } = useLayout()
  return (
    <AnimatePresence>
      {showMobileSidebar && (
        <Dialog
          static
          open={showMobileSidebar}
          onClose={toggleMobileSidebar}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-start justify-start p-0">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, x: '-100%' }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', bounce: 0, duration: 0.3 }
              }}
              exit={{ opacity: 0, x: '-100%', transition: { duration: 0.3 } }}
              className="w-[250px] space-y-4 border bg-primary"
            >
              <MobileSidebarContent />
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
