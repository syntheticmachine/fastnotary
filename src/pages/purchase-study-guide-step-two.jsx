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
          title="Are You and Active Notary?" 
          eyebrow="Purchase State Exam Study Guide." />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://miro.medium.com/max/1190/0*ibTAfdeF9GlSKH9s"
              title="No, I'm not."
              description = "Bundle With State Required 6 Hour Course"
              linkId = "/school/?view=signup&registration=discount&validation_code=5"
              linkName ="View 6 Hour Class"
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="Yes, I am."
              description = "Okay, you're currently a notary."
              linkId = "/purchase-study-guide-step-three"
              linkName ="Get Started now"
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
} 