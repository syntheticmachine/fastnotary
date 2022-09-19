import Image from 'next/future/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import Logo from '@/images/logo.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="text-gray-900">
              <Image src={Logo} className="h-12 w-auto mb-6 block" />
            </div>
            <nav className="mt-11 grid md:flex gap-8">
              <NavLinks />
            </nav>
          </div>
            <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <Link href="/start" className="border-4 border-black rounded-full px-8 py-3 text-lg text-primary font-semibold bg-white hover:bg-yellow-400 duration-300 inline-flex">
                Only $29 <span className="px-2 opacity-20">|</span> Start Your Course
              </Link>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-6 md:flex-row-reverse md:justify-center md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
