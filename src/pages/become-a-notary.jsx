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
        <title>Fast Notary Course - Become A California Notary Online</title>
      </Head>
      <Header />
      <InternalHero 
      title="Become a California notary."
      description="Your first step to becoming a California notary starts with our fast, state licensed, required training class." />
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