import { Options } from '@/components/Options'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { StartBox } from '@/components/StartBox'
import { Container } from '@/components/Container'
import { StepsTitle } from '@/components/StepsTitle'
import Router from 'next/router'

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
          title={["will your comission ", <span>expire</span>, " in the next ", <span>90 days</span>, "? Or has it expired?"]}
          description="3 Hour Online Training"
          eyebrow="Renew Your Notary Comission." />

        <div class="grid md:grid-cols-2 md:px-12">
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
        <div className="mb-12 text-center text-sm text-gray-700 font-semibold">
          
          <div onClick={() => Router.back()} className="flex gap-2 items-center content-center justify-center cursor-pointer">
            
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 -mt-0.5">
          <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z" clipRule="evenodd" />
          </svg>

          <span>Back</span>
          </div>
        </div>
      </motion.main>
    </>
)                                     
}