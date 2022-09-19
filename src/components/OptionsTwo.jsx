import { useId } from 'react'

import { Container } from '@/components/Container'
import Link from 'next/link'

const features = [
  {
    name: 'Yes, add the CA Exam study guide to my course.',
    description:
      'It is a long established fact that a reader will be distracted by text.',
      link: 'https://becomeacalifornianotary.com/school/?view=signup'
  },
  {
    name: "No thanks, I'll take my risks and try it alone.",
    description:
      "It is a long established fact that a reader will be distracted by text.",
    link: 'https://becomeacalifornianotary.com/school/?view=signup'
  }
]

export function OptionsTwo() {
  return (
    <section
      id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
      >
      <Container>
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Great, would you like to add our study guide?
          </h2>
          <p className="mt-6 text-lg text-gray-600">
          This study guide will help you pass the California Notary State Exam. The guide is packed with must-know info and sample questions &amp; andswers you'll find on the state exam.
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

        <div class="mt-8 text-sm font-medium text-gray-600 w-full flex justify-center">
          <Link className="flex items-center gap-2" href="/start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
          <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z" clipRule="evenodd" />
          </svg>

          Back
          </Link>
        </div>
      </Container>
    </section>
  )
}