import { motion } from "framer-motion"
import { Container } from "./Container"

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

export default function ContentBox() {
  return (
    <Container>
      <motion.div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8" initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}>

        <div className="relative mx-auto max-w-md sm:max-w-3xl order-2 md:order-1">

          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Our mission is to help California notaries succeed.
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
              Becoming a California Notary public is a great responsibility, and to ensure you are properly prepared for this duty the California secretary of state’s office requires applicants to take a Training Class.  This class covers the laws and procedures that all Californai notaries must adhere to. Upon completion of our online class you will be presented with a proof of completion certificate you will turn over to the Secretary of State along with your application.
              </p>
            </div>
          </div>

        </div>

        <div className="relative sm:py-16 lg:py-0 mt-8 md:mt-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-white opacity-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md sm:max-w-3xl lg:max-w-none md:px-6 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                alt=""
              />
              <div className="absolute inset-0 bg-yellow-400 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 via-yellow-400 opacity-90" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-base font-medium text-white md:flex-grow md:pr-8">
                    <p className="relative">
                      "This really was the fastest way for me to become a California notary. It was so quick and easy, and the study guide they created made this whole process so much easier. I highly recommend it!"
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-lg font-semibold text-white">Morgan H. - California Notary</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}
