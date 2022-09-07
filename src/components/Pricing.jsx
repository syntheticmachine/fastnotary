import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import Link from 'next/link'

const plans = [
  {
    name: '6 Hour - Become A Notary',
    featured: false,
    price: { Monthly: 'Only $29', Annually: '$0' },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab aspernatur iure nisi modi dicta expedita sed esse corrupti aperiam inventore eveniet officiis ipsum voluptatum, maiores tempora incidunt molestiae! Nostrum.',
    button: {
      label: 'Start Your Course',
      href: '/register',
    },
    features: [
      'Money-Back Guarantee To Pass State Exam',
      'Self Paced Course',
      'Instant Proof of Completion',
      'State Licensed #605172',
      'Best For New Notaries'
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: '3 Hour - Notary Renewal',
    featured: false,
    price: { Monthly: 'Only $19', Annually: '$70' },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab aspernatur iure nisi modi dicta expedita sed esse corrupti aperiam inventore eveniet officiis ipsum voluptatum, maiores tempora incidunt molestiae! Nostrum.',
    button: {
      label: 'Start Your Course',
      href: '/register',
    },
    features: [
      'Money-Back Guarantee To Pass State Exam',
      'Self Paced Course',
      'Instant Proof of Completion',
      'State Licensed #605172',
      'Best For New Notaries'
    ],
    logomarkClassName: 'fill-gray-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
  logomarkClassName,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-8 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold pb-3 mb-2 relative underlined-three',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <span className="font-semibold text-3xl">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-2 mb-4 flex text-2xl tracking-tight italic text-primary',
          featured ? 'text-white' : 'text-gray-600'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-yellow-400'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/start"
        className="mt-6 mb-6 bg-white hover:bg-yellow-400 duration-300 text-primary font-semibold px-4 py-3 border-2 border-black text-center rounded-full"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Link>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 mx-auto max-w-6xl"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-4xl font-semibold tracking-tight text-gray-900"
          >
            Flat pricing, no hidden fees.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic fuga accusamus rem error beatae architecto pariatur suscipit velit eveniet.
          </p>
        </div>

        <div className=" flex justify-center">
          <div className="relative">

            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)]'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))]'
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Annually' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  )
}
