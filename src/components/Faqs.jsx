import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'I starred my course, how do I log back in?',
      answer:
        'To log back into your course please click this link: https://becomeacalifornianotary.com/school/?view=login and you will be redirected to our login page. You can access your course with either your username (which was provided by us and looks like smith7827567165 ) or with the email address you signed up with.',
    },
    {
      question: 'After completing our Online Notary Council Course, how do I register for and take the California State Exam?',
      answer:
        'You may go to the CPS HR Website (https://exam-registration.cpshr.us/notary/notary)  for exam dates and testing sites nearest you.  You may register for a notary public exam either online or by phone up to 15 business days prior to the exam.  To register by phone, please contact CPS at (916) 263-3520, M-F, 8 am – 5 pm. A confirmation scheduling letter will be sent to you via email or USPS, depending on how you registered. Also at the website, you may print the Notary Public Application (or have mailed to you if you registered by phone), which you will need to complete and bring with you to the testing site.',
    },
    {
      question: 'When is the Next State Exam?',
      answer:
        'You can find the next State Exam in your area here: https://exam-registration.cpshr.us/notary/notary',
    },
  ],
  [
    {
      question: 'Where are the State Exams?',
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
  ],
  [
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
      question: 'I though Everyone Had to Go Through NNA?',
      answer:
        'No, everyone does not need to go through NNA (Nation Notary Association) as both our courses are approved by the Secretary of State for the training courses.',
    },
    {
      question: 'I though Everyone Had to Go Through NNA?',
      answer:
        'No, everyone does not need to go through NNA (Nation Notary Association) as both our courses are approved by the Secretary of State for the training courses.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 bg-white"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-4xl font-semibold tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
