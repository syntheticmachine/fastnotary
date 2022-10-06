import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'

export default function SixHourClass() {
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
          title="Become A Notary Online Class"
          description="6 Hour Online Training" 
          eyebrow="Your first step to becoming a notary." />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://becomeacalifornianotary.com/wp-content/uploads/2020/01/california-notary-exam-study-guide.jpeg"
              title="6 Hour Class with State Exam Study Guide."
              description = "Our six hour class with our state exam study guide."
              linkId = "/school/?view=signup&registration=discount&validation_code=5"
              linkName = "Okay, Let's Get Started"
              recommended
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="6 Hour Course Only."
              description = "Our six hour notary course without help."
              linkId = "/school/?view=signup&registration=discount&validation_code=6"
              linkName ="Select Our Starter Course"
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
} 