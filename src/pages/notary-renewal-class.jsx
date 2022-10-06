import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'

export default function ThreeHourCourse() {
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
          title="Will Your Commission Expire in next 90 days? Or has it already expired?"
          description="3 Hour Online Training"
          eyebrow="Renew Your Notary Comission." />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://becomeacalifornianotary.com/wp-content/uploads/2020/01/california-notary-exam-study-guide.jpeg"
              title="Yes, it has."
              description = "We Recommend you take the 6 Hour Online Class."
              linkId = "/become-a-notary-class"
              linkName = "View 6-Hour Class"
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="No, it hasn't."
              description = "Great, this is the course for you"
              linkId = "/notary-renewal-class-selection"
              linkName ="Get Started Now"
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
}