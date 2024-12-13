import { Link, NavLink } from '@remix-run/react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { landingMenu } from './menu'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 30) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })
  return (
    <header
      className={twMerge([
        'main-padding fixed top-0 z-50 flex w-full justify-between bg-red-50 bg-transparent py-4 transition-all duration-300',
        isScrolled ? 'bg-white/90 shadow-md' : ''
      ])}
    >
      <Link to="/#">
        <img
          src="/images/logo-black.png"
          alt="Logo"
          className="h-10 object-cover"
        />
      </Link>
      <nav className="content-center">
        <ul className="flex items-center justify-center">
          {landingMenu.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.href}
                className={twMerge([
                  'px-2 py-2 text-slate-700 hover:text-success sm:px-4'
                ])}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
