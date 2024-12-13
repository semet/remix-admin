import { Link } from '@remix-run/react'
import { motion, useInView } from 'framer-motion'
import { FC, useRef } from 'react'

import { Stack } from './data'

export const StackItem: FC<Stack & { index: number }> = ({
  bgColor,
  link,
  index,
  name,
  textColor
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, {
    once: true
  })
  return (
    <Link to={link}>
      <motion.div
        ref={ref}
        key={index}
        className="rounded-md bg-white p-4 hover:shadow-[0px_0px_20px_0px_#f06548]"
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <h3 className="text-center text-2xl font-semibold sm:text-start">
          {name}
        </h3>
      </motion.div>
    </Link>
  )
}
