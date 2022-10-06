import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'

export default function GetStudyGuide() {
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
          title="Have you completed your state required training in the past 24 months?" 
          eyebrow="Purchase State Exam Study Guide." />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://miro.medium.com/max/1190/0*ibTAfdeF9GlSKH9s"
              title="Yes, I have."
              description = "Okay, just checking."
              linkId = "/school/?view=signup&registration=discount&validation_code=8"
              linkName ="Get Started"
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="No I haven't."
              description = "Lets bundle with your required training class."
              linkId = "/notary-renewal-class"
              linkName ="View Our Packages"
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
} 