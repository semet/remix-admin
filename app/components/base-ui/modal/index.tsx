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
  onClose?: () => void
  setIsOpen: Dispatch<SetStateAction<boolean>>
  button?: ReactNode
  dialogClassName?: string
  panelClassName?: string
  contentClassName?: string
  size?: Size
  title?: ReactNode
  scrollable?: boolean
}>

export const Modal: FC<Props> = (props) => {
  const {
    isOpen,
    setIsOpen,
    onClose,
    children,
    button,
    dialogClassName,
    panelClassName,
    contentClassName,
    size = 'sm',
    title,
    scrollable = false
  } = props
  return (
    <>
      {button && button}
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => {
              setIsOpen(false)
              return onClose && onClose()
            }}
            className={twMerge(['relative z-[9999]', dialogClassName])}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40"
            />
            <div className="fixed inset-0 top-20 flex w-screen justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, type: 'spring', bounce: 0 }
                }}
                exit={{
                  opacity: 0,
                  y: -100,
                  transition: { duration: 0.5, type: 'spring', bounce: 0 }
                }}
                className={twMerge([
                  'relative w-full overflow-hidden rounded bg-white shadow',
                  size === 'sm' && 'w-96',
                  size === 'md' && 'w-[640px]',
                  size === 'lg' && 'w-[640px] lg:w-[900px]',
                  scrollable ? 'h-auto pb-6' : 'h-fit',
                  panelClassName
                ])}
              >
                {title && (
                  <DialogTitle
                    as="h4"
                    className={twMerge([
                      'border-b bg-white p-4 text-lg font-bold text-slate-700',
                      scrollable && 'sticky top-0 z-10'
                    ])}
                  >
                    {title}
                    <button
                      onClick={() => {
                        setIsOpen(false)
                        return onClose && onClose()
                      }}
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
