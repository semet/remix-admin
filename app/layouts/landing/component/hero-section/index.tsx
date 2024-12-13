import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'

export const HeroSection = () => {
  return (
    <section className="relative">
      <div
        className="flex h-screen items-center justify-center bg-primary/5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/bg-pattern.png)'
        }}
      >
        <div className="container mx-auto max-w-[70%] space-y-4 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            <span className="block">
              A clean and responsive Admin Template{' '}
            </span>
          </h1>
          <h2 className="text-xl font-bold text-primary md:text-2xl lg:text-4xl">
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
          </h2>
          <p className="text-lg text-primary/50">
            A Plug and Play Admin Dashboard for your React application.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/dashboard"
              className="rounded-full bg-info px-6 py-3 text-white"
            >
              Look into Dashboard
            </Link>
            <Link
              to="https://github.com/semet/remix-admin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-400 px-6 py-3"
            >
              <FaGithub className="inline-block text-lg" />
              <span className="ml-2">Source Code</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full rotate-180 transform overflow-hidden leading-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[157px] w-[calc(152%+1.3px)]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-100"
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute left-1/2 mx-auto -mt-20 w-[80%] -translate-x-1/2 transform sm:-mt-28 md:-mt-32 md:w-[70%] lg:w-1/2 xl:-mt-48">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="absolute -inset-1 -z-10 rounded-lg"
            style={{
              backgroundSize: '100% 100%',
              backgroundPosition: '0px 0px',
              backgroundImage:
                'conic-gradient(from 90deg at 50% 50%, #A100FFFF 0%, #71C4FFFF 29%, #71C4FFFF 50%, #9E8DC2FF 71%, #883767FF 88%, #A100FFFF 97%)'
            }}
          />
          <img
            src="/images/showcase/1.png"
            alt="Showcase 1"
            className="z-10"
          />
        </div>
        <div className="absolute -bottom-10 left-1/4 w-1/3">
          <img
            src="/images/showcase/mobile.png"
            alt=""
            className="w-1/2"
          />
        </div>
      </div>
    </section>
  )
}
