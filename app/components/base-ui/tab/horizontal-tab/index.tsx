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

export const HorizontalTab = <Key extends string | number>(
  props: TabProps<Key>
) => {
  const { data } = props
  return (
    <TabGroup>
      <TabList
        as={motion.div}
        className="flex gap-2 rounded-t border-x border-t p-2"
      >
        {data.map(({ head }) => (
          <HeadlessTab
            as={Fragment}
            key={head.key}
          >
            {({ selected }) => (
              <div
                className={twMerge([
                  'relative cursor-pointer overflow-hidden rounded-t px-4 py-1 font-semibold text-slate-600 focus:outline-none'
                ])}
              >
                {selected && (
                  <motion.span
                    layoutId="horizontal-tab-indicator"
                    className="absolute inset-x-0 bottom-0 h-[1.5px] bg-slate-500"
                  />
                )}
                <span>{head.label}</span>
              </div>
            )}
          </HeadlessTab>
        ))}
      </TabList>
      <TabPanels>
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
            className="rounded-b border-x border-b px-4 py-2 transition-all duration-300"
          >
            {panel.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
