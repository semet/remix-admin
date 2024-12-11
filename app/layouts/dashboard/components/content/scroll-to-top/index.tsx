import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { useState } from 'react'
import { IoMdArrowUp } from 'react-icons/io'

export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 200) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  })
  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{
            y: 50
          }}
          animate={{
            y: 0,
            transition: {
              duration: 0.3,
              bounce: 0
            }
          }}
          exit={{
            y: 50
          }}
          className="fixed bottom-4 right-4 rounded-full bg-primary p-2 text-white hover:bg-primary-100"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        >
          <IoMdArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
