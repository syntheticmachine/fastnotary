import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Container } from '@/components/Container'

// <PrimaryFeatures />

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
        <section className="border-t border-gray-200 py-20">
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
          </Container>
          <Pricing />
        </section>
        <section className="bg-white">
          <Faqs />
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
