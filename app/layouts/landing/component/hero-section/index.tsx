import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'

export const HeroSection = () => {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-primary/5 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/bg-pattern.png)'
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
          <span className="block">
            A clean and responsive Admin Dashboard template{' '}
          </span>
          <span className="block">
            Crafted with{' '}
            <motion.span
              animate={{
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              style={{
                display: 'inline-block'
              }}
            >
              ❤️
            </motion.span>{' '}
            for FREE{' '}
          </span>
        </h1>
        <p className="mt-4 text-lg text-primary/50">
          A Plug and Play Admin Dashboard for your React application.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="rounded-full bg-info px-6 py-3 text-white"
          >
            Look into Dashboard
          </Link>
          <Link
            to=""
            className="rounded-full bg-slate-400 px-6 py-3"
          >
            <FaGithub className="inline-block text-lg" />
            <span className="ml-2">Source Code</span>
          </Link>
        </div>
      </div>
      <motion.div className="absolute -bottom-52 w-1/2 rounded-md bg-white p-4 shadow">
        <img
          src="/images/showcase/7.png"
          alt="hero"
          className="hidden md:block"
        />
      </motion.div>
    </section>
  )
}
