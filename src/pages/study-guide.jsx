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

export default function StudyGuide() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - California Exam Study Guide</title>
      </Head>
      <Header />
      <InternalHero 
      title="Prepare for your state exam."
      description="The guide is jam-packed with must-know information and sample questions & answers you are likely to find on the state exam." />
      <section className="pt-16 pb-10">
        <Container>

        <motion.div className="grid md:grid-cols-2 gap-6 md:gap-12" initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}>

          <div>
            <img src="https://becomeacalifornianotary.com/wp-content/uploads/2020/01/california-notary-exam-study-guide.jpeg" className="rounded-lg shadow" />
          </div>
          
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                It's really that easy to renew your notary license.
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique
                eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae.<br /><br />

                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              </div>
            </div>
            
          </motion.div>
        </Container>
      </section>
      <section className="pb-16">
        <Pricing />
      </section>
      <Reviews />
      <CallToAction />
      <Footer />

    </>
  )
}