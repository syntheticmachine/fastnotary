import { OptionsTwo } from '@/components/OptionsTwo'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function StepTwo() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Get Started</title>
      </Head>
      <motion.main 
      initial={{ opacity: 0, y: '25px' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.5, delay: 0.1 }}>
        <OptionsTwo />
      </motion.main>
    </>
  )
}