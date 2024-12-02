import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Link } from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaRegCircleUser, FaCircleUser } from 'react-icons/fa6'
import { IoMdLogOut } from 'react-icons/io'
import { LiaCogSolid } from 'react-icons/lia'

export const UserMenu = () => {
  return (
    <Popover className="group">
      {({ open }) => (
        <>
          <PopoverButton className="flex h-full cursor-pointer items-center gap-2 px-4 hover:bg-slate-200 focus:outline-none sm:w-32 sm:bg-slate-100">
            <FaRegCircleUser className="cursor-pointer text-2xl text-slate-600" />
            <div className="hidden items-start sm:flex sm:flex-col">
              <span className="text-sm text-slate-600">Hamdani</span>
              <span className="text-xxs text-slate-500">Staff</span>
            </div>
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                anchor="bottom"
                className="z-50 mt-1 flex w-32 origin-top flex-col rounded-sm bg-slate-50 p-4 shadow-md"
              >
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link
                      to="#"
                      className="flex gap-2 text-slate-500 hover:text-slate-700"
                    >
                      <FaCircleUser className="text-lg" />
                      <span className="text-sm">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="flex gap-2 text-slate-500 hover:text-slate-700"
                    >
                      <LiaCogSolid className="text-lg" />
                      <span className="text-sm">Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="flex gap-2 text-slate-500 hover:text-slate-700"
                    >
                      <IoMdLogOut className="text-lg" />
                      <span className="text-sm">Logout</span>
                    </Link>
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
