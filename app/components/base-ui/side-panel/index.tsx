import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction
} from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

import { Size } from '~/types'

type Props = PropsWithChildren<{
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  button: ReactNode
  dialogClassName?: string
  panelClassName?: string
  contentClassName?: string
  title?: ReactNode
  position?: 'left' | 'right'
  size?: Size
}>

export const SidePanel: FC<Props> = (props) => {
  const {
    isOpen,
    setIsOpen,
    children,
    button,
    dialogClassName,
    panelClassName,
    contentClassName,
    title,
    position = 'right',
    size = 'md'
  } = props
  return (
    <>
      {button}
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className={twMerge(['relative z-[9999]', dialogClassName])}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40"
            />
            <div
              className={twMerge([
                'fixed top-0 flex justify-center',
                position === 'right' ? 'right-0' : 'left-0',
                size === 'sm' ? 'w-1/3' : size === 'md' ? 'w-1/2' : 'w-2/3'
              ])}
            >
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0.9, x: position === 'right' ? 200 : -200 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, type: 'spring', bounce: 0 }
                }}
                exit={{
                  opacity: 0,
                  x: position === 'right' ? 200 : -200,
                  transition: { duration: 0.5, type: 'spring', bounce: 0 }
                }}
                className={twMerge([
                  'relative h-screen overflow-hidden bg-white',
                  panelClassName
                ])}
              >
                {title && (
                  <DialogTitle
                    as="h4"
                    className={twMerge([
                      'border-b bg-white p-4 text-lg font-bold text-slate-700'
                    ])}
                  >
                    {title}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute right-3 top-3 rounded-full p-2 transition-all duration-300 hover:bg-slate-200"
                    >
                      <MdOutlineClose className="text-xl text-slate-500" />
                    </button>
                  </DialogTitle>
                )}
                <Description
                  as={'div'}
                  className={twMerge([
                    'max-h-[92%] space-y-2 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black/15',
                    contentClassName
                  ])}
                >
                  {children}
                </Description>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
