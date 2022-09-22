import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import Image from 'next/future/image'
import MainLogo from '@/images/logo.svg'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <header className="bg-white bg-opacity-70 sticky top-0 z-20 backdrop-blur-lg">
      <nav>
        <Container className="relative z-50 flex px-4 md:px-0 py-4 md:py-8">
          <div className="relative z-10 flex items-center justify-between w-full gap-6 md:gap-16">
            <Link href="/" aria-label="Home">
              <Image src={MainLogo} alt="" className="h-10 md:h-14 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-7">
              <NavLinks />
            </div>

            <div className="flex items-center gap-6 lg:hidden">

            <div className="md:hidden w-32 ml-auto text-right">
              <Link href="/start" className="lg:block inline-flex justify-center rounded-full border py-2 px-4 text-sm border-2 border-black bg-white text-primary font-semibold hover:bg-yellow-400 duration-300">
                Sign Up
              </Link>
            </div>

            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-full stroke-gray-900 p-2 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none bg-white border-2 border-gray-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-6 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="mb-6 pb-6 text-center w-full border-b border-gray-200">
                            <Image src={MainLogo} alt="" className="h-12 mx-auto" />
                          </div>
                          <div className="space-y-4 grid">
                           <NavLinks />
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/login" variant="outline">
                              Log in
                            </Button>
                            <Button href="/start">Start Your Course</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <a href="/school/?view=login" className="hidden lg:block inline-flex justify-center rounded-full border-none bg-opacity-0 py-2 px-2 text-sm text-primary font-semibold">
              Login
            </a>
            <Link href="/start" className="hidden lg:block inline-flex justify-center rounded-full border py-2 px-5 text-sm border-2 border-black bg-white text-primary font-semibold hover:bg-yellow-400 duration-300">
              Get Started
            </Link>
          </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
