import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InternalHero } from '@/components/InternalHero'
import { Reviews } from '@/components/Reviews'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Support() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Quick Online Support</title>
      </Head>
      <Header />
      <InternalHero 
      title="We're here to help."
      description="See if we're able to answer any of your questions below. Still need help? Feel free to reach out to our professional US based staff below." />
      <Faqs />
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <Container>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Couldn't find what you we're looking for?</h2>
            <p className="text-gray-600 text-lg mt-2">No problem! Reach out and our staff will help assist you in any of your notary needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-8 mt-12">

          <div className="py-8 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex gap-2 items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <h3 className="font-semibold text-2xl">Mailing Address</h3>
            </div>
            <p className="text-gray-700 text-lg"><span class="font-semibold text-gray-800">Become A California Notary</span><br />PO Box 2406<br />Bakersfield, CA 93303</p>
          </div>

          <div className="py-8 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex gap-2 items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="font-semibold text-2xl">California HQ</h3>
            </div>
            <p className="text-gray-700 text-lg">1419 19th Street<br />Bakersfield, CA 93301</p>
          </div>

          <div className="py-8">
            <div className="flex gap-2 items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
              <h3 className="font-semibold text-2xl">Email Address</h3>
            </div>
            <a href="#" className="bg-gray-50 border-gray-200 border py-3 px-4 rounded-md text-gray-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-white hover:bg-gray-900 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              <div>Click To Email</div>
            </a>
          </div>

          </div>
        </Container>
      </section>
      <Reviews />
      <CallToAction />
      <Footer />

    </>
  )
}