import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'

export default function Start() {
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
          title="Will your commission expire in next 90 Days?"
          secondaryTitle="Or has it already expired?" />

         <div class="grid grid-cols-2 px-12">
            <StartBox
              image="https://miro.medium.com/max/1190/0*ibTAfdeF9GlSKH9s"
              title="Yes, it has."
              description = "We Recommend you take the 6 Hour Online Class."
              linkId = "666"
              linkName ="Okay, Let's Get Started"
            />
            <StartBox
              image="https://miro.medium.com/max/1400/1*XX2X4OtFiQTdYV3OtIlAIg.png"
              title="No, it hasn't."
              description = "Great, this is the course for you."
              linkId = "666"
              linkName ="Select Our Starter Course"
            />
          </div>

        </Container>
      </motion.main>
    </>
)                                     
} 