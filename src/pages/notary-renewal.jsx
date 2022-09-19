import { CallToAction } from '@/components/CallToAction'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { Reviews } from '@/components/Reviews'
import RenewalContent from '@/components/RenewalContent'
import Steps from '@/components/Steps'
import { InternalHero } from '@/components/InternalHero'
import RenewalSteps from '@/components/RenewalSteps'

export default function NotaryRenewal() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Renew Your Notary Online</title>
      </Head>
      <Header />
      <InternalHero 
      title="Renew Your Notary License."
      description="Need to renew your notary license? Take our quick and easy 3 hour renewal course." />
      <RenewalContent />
      <div className="pb-16">
        <Pricing />
      </div>
      <RenewalSteps />
      <Reviews />
      <CallToAction />
      <Footer />

    </>
  )
}