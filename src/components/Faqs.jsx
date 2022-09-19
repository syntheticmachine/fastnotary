import Link from 'next/link'
import { Container } from '@/components/Container'
import { motion, useInView, useMotionValue } from 'framer-motion'

const faqs = [
  [
    {
      question: 'I started my course, how do I log back in?',
      answer:
        'To log back into your course please click this link: https://becomeacalifornianotary.com/school/?view=login and you will be redirected to our login page. You can access your course with either your username (which was provided by us and looks like smith7827567165 ) or with the email address you signed up with.',
    },
    {
      question: 'When is the next state exam?',
      answer:
        'You can find the next State Exam in your area here: https://exam-registration.cpshr.us/notary/notary',
    },
    {
      question: 'Where are the state exams?',
      answer:
        'State exams are all up and down California, to find the next one in your area click here',
    },
    {
      question: 'I purchased your course via Groupon, how do I activate it?',
      answer:
        'To activate your course please first section the appropriate course and add it to your cart. During checkout process enter your Groupon Code in the Promo Code box and your shopping cart balance will be set to $0. At this time please finish the signup process.',
    },
    {
      question: 'How do I prove I have completed your online course?',
      answer:
        'Once you have successfully completed our online state accepted notary course, you will be given a certificate of completion. You will need to print this certificate and take it with you to your Notary Public Exam.',
    },
    {
      question: 'I have misplaced my completion certificate?',
      answer:
        'Don’t worry, you can always log back into your account on our site and reprint your certificate of completion letter.',
    },
    {
      question: 'How much does the Notary Public Exam cost?',
      answer:
        'You will need to bring a $40.00 separate check or money order, payable to the Secretary of State,  to the testing site for ALL new applicants. You will need to bring a $20.00 separate check or money order, payable to the Secretary of State, to the testing site for applicants that have previously taken the exam and failed.',
    },
    {
      question: 'I thought everyone had to go through NNA?',
      answer:
        'No, everyone does not need to go through NNA (Nation Notary Association) as both our courses are approved by the Secretary of State for the training courses.',
    },
  ],
]

export function Faqs() {
  return (
    <motion.section className="py-16" initial={{ opacity: 0, y: '25px' }} animate={{ opacity: 1, y: '0' }} transition={{ duration: 0.5, delay: 0.1 }}>
      <Container>
          {faqs.map((column, columnIndex) => (
            <ul role="list" className="mx-auto grid max-w-2xl md:max-w-none grid-cols-1 gap-6 lg:grid-cols-1 divide-y divide-gray-100">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex} className="px-8 py-8 md:py-10 md:py-12 bg-white rounded-lg shadow grid md:flex gap-6">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-400 md:mt-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold leading-8 text-gray-900 pr-6 border-b border-gray-100 mb-6 pb-6">
                        {faq.question}
                      </h3>
                      <p className="text-base md:text-lg text-gray-500 leading-8 md:pr-16">{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
          ))}
      </Container>
    </motion.section>
  )
}
