import { motion } from 'framer-motion'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
  error: FieldError
}

export const FormError: FC<Props> = ({ error }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: -5 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: 'tween', duration: 0.2 }
      }}
      exit={{ opacity: 0, y: -5 }}
      className="absolute -bottom-4 text-xs text-danger"
    >
      {error?.message?.toString()}
    </motion.span>
  )
}
