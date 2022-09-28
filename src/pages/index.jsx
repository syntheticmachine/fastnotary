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

      <style jsx global>{`
        h1, h2, h3, h4, h5, .text-primary {
          font-family: 'Fraunces', serif !important;
        }
      `}</style>

      
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Reviews />
        <section className="border-t border-gray-200 py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
            <h2
              id="pricing-title"
              className="text-4xl font-semibold tracking-tight text-gray-900"
            >
              We Make Notary Training <span className="relative underlined-three">Quick &amp; Easy.</span>
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-600">
              Get started and in a few hours you will be on your way to becoming a licensed notary or renewing your commission.
            </p>
          </div>
          </Container>
          <div id="pricing">
            <Pricing />
          </div>
        </section>
        {/* <section className="bg-gray-50 border-t border-gray-100">
          <Faqs />
        </section> */}
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
