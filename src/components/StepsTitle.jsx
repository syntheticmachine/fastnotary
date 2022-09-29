import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { PriceCard } from './PriceCard'

export function StepsTitle(props) {
  return (
    <motion.section className="pt-16 md:pt-20 pb-0 md:pb-8" initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}>
      <Container>
        <div className="mx-auto max-w-4xl text-center text-gray-900">
        <span className="font-semibold mb-4 block text-indigo-500 text-base text-primary">
          Let's get started.
        </span>
        <h1
          id="pricing-title"
          className="text-4xl font-semibold tracking-tight text-gray-900 relative leading-tight"
        >
          {props.title}
        </h1>
        <h3 className="text-4xl font-semibold tracking-tight text-gray-900 relative leading-tight mt-1">
          {props.secondaryTitle}
        </h3>
        <p className="mt-8 md:leading-8 text-lg md:text-xl text-gray-900">
          {props.description}
        </p>
      </div>
      </Container>
    </motion.section>
  )
}