import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'

export default function GetStudyGuideTwo() {
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
          title="Does your commission expire in next 90 days, or has it expired?" 
          eyebrow="Purchase State Exam Study Guide." />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://miro.medium.com/max/1190/0*ibTAfdeF9GlSKH9s"
              title="No, it hasn't"
              description = "Okay great, just checking."
              linkId = "/school/?view=signup&registration=discount&validation_code=9"
              linkName ="Purchase Study Guide"
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="Yes, it has."
              description = "6 Hour Online Class with State Exam Study Guide"
              linkId = "/school/?view=signup&registration=discount&validation_code=5"
              linkName ="Get Started now"
              recommended
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
} 