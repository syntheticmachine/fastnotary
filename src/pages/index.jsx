import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Online Notary Training</title>
        <meta
          name="description"
          content="Add Description Here..."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Reviews />
        <CallToAction />
        <Pricing />
        <PrimaryFeatures />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
