import Image from 'next/future/image'
import { motion, useInView, useMotionValue } from 'framer-motion'
import Link from 'next/link'

import { Container } from '@/components/Container'
import Pop from '@/images/pop.svg'
import Swirl from '@/images/swirl.svg'
import Notary from '@/images/notary-placeholder.png'

export function Hero() {
  return (
    <div className="overflow-hidden pt-8 md:pt-16 pb-20 items-center">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2">
          <motion.div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6 md:mt-20 text-center md:text-left" 
          initial={{ opacity: 0, y: '25px' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900">
            The <span className="underlined-two relative italic">fastest</span> way to become a notary.
            </h1>
            <p className="mt-6 text-lg text-gray-600 lg:pr-24">
              With our easy online course, you’re <span className="font-bold text-gray-700 italic">guaranteed</span> to pass in the fastest time that is allowed by law.
            </p>
            <div className="mt-8 w-auto inline-grid gap-4">
              <Link href="/start" className="border-4 border-black rounded-full px-8 py-3 text-lg text-primary font-semibold bg-white hover:bg-yellow-400 duration-300 inline-flex">
              Start Your Class, Today!
              </Link>
              <div className="block text-center">
                <span className="text-sm text-gray-600 font-medium">Over 50,000 Satisfied Customers</span>
                <div className="flex gap-1 text-yellow-400 justify-center mt-2">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
  
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative lg:col-span-5 lg:row-span-2 mt-12 lg:mt-0 xl:col-span-6 justify-center flex">
            <img width="425px" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotary-placeholder.0bd053b5.png&w=3840&q=75" alt="" className="hero-image w-3/4 object-cover rounded-tl-full rounded-tr-full border-8 border-black" />
            <div className="absolute left-20 top-8">
              <Image className="w-12" src={Pop} />
            </div>
            <div className="absolute left-12 -bottom-16">
              <Image className="w-48" src={Swirl} />
            </div>
            <div className="absolute right-0 left-0 md:left-auto md:-right-12 bottom-10 md:bottom-20">
              <motion.div className="message bg-white bg-opacity-80 rounded-lg py-4 pl-4 pr-7 shadow-md backdrop-blur-md"
              initial={{ opacity: 0, y: '25px' }}
              animate={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="flex gap-3 items-center">
                  <div>
                    <div className="bg-primary rounded-full w-16 h-16 border-2 border-white shadow text-white flex justify-center items-center inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-lg tracking-tight -mb-1 font-semibold text-gray-900 block">Congratulations!</span>
                    <span className="text-sm text-gray-700">You completed your online course.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
