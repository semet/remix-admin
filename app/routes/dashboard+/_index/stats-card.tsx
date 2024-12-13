import { motion } from 'framer-motion'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { StatsType } from './data'

export const StatsCard: FC<StatsType> = (props) => {
  const { description, icon: Icon, id, label, percentage, value } = props
  return (
    <motion.div
      whileHover={{
        y: -5
      }}
      className="group flex items-center justify-between rounded bg-white p-4 hover:shadow"
    >
      <div
        className={twMerge([
          'flex items-center justify-center rounded-full p-2 shadow',
          id === 1 && 'bg-primary',
          id === 2 && 'bg-danger',
          id === 3 && 'bg-warning',
          id === 4 && 'bg-success'
        ])}
      >
        <Icon className="text-4xl text-white transition-all duration-300 group-hover:scale-110" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <span className="text-sm font-semibold text-slate-500">{label}</span>
        <span className="text-2xl font-bold text-slate-800">{value}</span>
        <span className="text-sm text-slate-400">{description}</span>
      </div>
      <div>
        <span
          className={twMerge([
            'whitespace-nowrap rounded p-1 text-xs font-semibold text-slate-600',
            id === 1 && 'bg-primary/50 text-slate-100',
            id === 2 && 'bg-danger/50',
            id === 3 && 'bg-warning/50',
            id === 4 && 'bg-success/50'
          ])}
        >
          {percentage} %
        </span>
      </div>
    </motion.div>
  )
}
