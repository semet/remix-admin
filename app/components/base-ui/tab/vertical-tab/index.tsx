import {
  Tab as HeadlessTab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

import { TabProps } from '~/types'

export const VerticalTab = <Key extends string | number>(
  props: TabProps<Key>
) => {
  const { data } = props
  return (
    <TabGroup className="flex">
      <TabList
        as={motion.div}
        className="flex w-[20%] flex-col gap-2 overflow-hidden rounded-l border-l bg-primary"
      >
        {data.map(({ head }) => (
          <HeadlessTab
            as={Fragment}
            key={head.key}
          >
            {({ selected }) => (
              <div
                className={twMerge([
                  'relative cursor-pointer overflow-hidden px-4 py-1 font-semibold text-white transition-all duration-300 focus:border-none focus:outline-none focus:ring-0',
                  selected && 'bg-primary-500 text-slate-100'
                ])}
              >
                <span>{head.label}</span>
              </div>
            )}
          </HeadlessTab>
        ))}
      </TabList>
      <TabPanels className="w-full flex-grow rounded-r border-y border-r">
        {data.map(({ panel }) => (
          <TabPanel
            key={panel.key}
            as={motion.div}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="px-4 py-2"
          >
            {panel.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
