import { useId } from 'react'

import { Container } from '@/components/Container'
import Link from 'next/link'

const features = [
  {
    name: 'Is this your first time becoming a notary?',
    description:
      'This your first time becoming a notary and need to take our 6-hour course.',
      link: '/step-two'
  },
  {
    name: 'Are you currently a notary looking to renew?',
    description:
      "You're currently a notary, and need to renew with our 3-hour course.",
    link: '/step-two'
  }
]

export function Options() {
  return (
    <section
      id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
      >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Let's get started.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Answer a few questions and you'll be on your way to becoming a notary.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-2"
        >
          {features.map((feature) => (
            <Link 
              href={feature.link}
              key={feature.name}
              className="rounded-2xl border border-gray-200 px-8 py-10 bg-white hover:cursor-pointer hover:bg-gray-100 duration-300"
            >
              <h3 className="font-semibold text-gray-900 text-2xl">
                {feature.name}
              </h3>
              <p className="mt-4 text-gray-700 text-base">{feature.description}</p>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  )
}