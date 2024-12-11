import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdCurrencyExchange } from 'react-icons/md'

export const CurrencySelector = () => {
  return (
    <Popover className="group">
      {({ open }) => (
        <>
          <PopoverButton className="hidden w-[90px] items-center gap-2 rounded bg-slate-100 px-4 py-1.5 hover:bg-slate-200 focus:outline-none sm:flex">
            <MdCurrencyExchange className="text-lg text-warning" />
            <span className="font-semibold text-slate-500">USD</span>
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                anchor="bottom end"
                className="z-50 mt-1.5 flex w-[90px] origin-top flex-col rounded bg-slate-50 p-4 shadow-md"
              >
                <ul>
                  <li className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1">
                    <span className="font-semibold text-slate-500 hover:text-slate-700">
                      USD
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1">
                    <span className="font-semibold text-slate-500 hover:text-slate-700">
                      EUR
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1">
                    <span className="font-semibold text-slate-500 hover:text-slate-700">
                      GBP
                    </span>
                  </li>
                </ul>
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}
