import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { PriceCard } from './PriceCard'

export function StepsTitle(props) {
  return (
    <motion.section className="pt-4 md:pt-20 pb-12" initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}>
      <Container>
        <div className="mx-auto max-w-3xl text-center text-gray-900">
        <span className="font-semibold mb-6 block text-lg text-primary rounded-full text-main hidden">
          {props.eyebrow}
        </span>
        <h1
          id="pricing-title"
          className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 relative step-title"
        >
          {props.title}
        </h1>
        <p className="mt-2 md:leading-8 text-lg text-gray-500 font-medium mb-12 italic hidden">
          {props.description}
        </p>
      </div>
      </Container>
    </motion.section>
  )
}