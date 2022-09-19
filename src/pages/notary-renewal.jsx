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

export default function NotaryRenewal() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Renew Your Notary Online</title>
      </Head>
      <Header />
      <InternalHero 
      title="Renew Your California Notary."
      description="Need to renew your notary license? Take our quick and easy 3 hour renewal course." />
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