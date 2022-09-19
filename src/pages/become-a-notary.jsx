import { CallToAction } from '@/components/CallToAction'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { Reviews } from '@/components/Reviews'
import ContentBox from '@/components/ContentBox'
import Steps from '@/components/Steps'
import { InternalHero } from '@/components/InternalHero'

export default function BecomeANotary() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Become A Clifornia Notary Online</title>
      </Head>
      <Header />
      <InternalHero 
      title="Become a California Notary."
      description="The first step to become a California Notary, 6-hour required training." />
      <Container>
      <motion.main initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}></motion.main>
      </Container>
      <ContentBox />
      <div className="pb-16">
      <Pricing />
      </div>
      <Steps />
      <Reviews />
      <CallToAction />
      <Footer />

    </>
  )
}