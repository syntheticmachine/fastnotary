import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Fast Notary Course - Get Started</title>
      </Head>
      <motion.main 
        initial={{ opacity: 0, y: '25px' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Container className="py-12">

        <StepsTitle 
          title="Are you a new notary or renewing your commission?" 
          eyebrow="Tell us a little aout yourself." />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://miro.medium.com/max/1190/0*ibTAfdeF9GlSKH9s"
              title="I'm a brand new notary."
              description = "You'll need to take our 6 hour starter course."
              linkId = "/become-a-notary-class"
              linkName ="View New Notary Packages"
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="I'm renewing my comission."
              description = "Great! You can take our 3 hour renewal course."
              linkId = "/notary-renewal-class"
              linkName ="View Renewal Packages"
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
} 