import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'

export function InternalHero(props) {
  return (
    <motion.section className="pt-16 md:pt-20 pb-0 md:pb-8" initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}>
      <Container>
        <div className="mx-auto max-w-4xl text-center text-gray-900">
        <h1
          id="pricing-title"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 underlined-four relative"
        >
          {props.title}
        </h1>
        <p className="mt-6 leading-8 text-lg md:text-xl text-gray-600">
          {props.description}
        </p>
      </div>
      </Container>
    </motion.section>
  )
}