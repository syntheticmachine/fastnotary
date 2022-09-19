import { Container } from "./Container"

const steps = [
  {
    step: '01',
    title: 'Complete Approved Education',
    description: 'All persons seeking appointment as a Notary Public must satisfactorily complete a Secretary of State approved six-hour course of study prior to appointment. Our course fits these requirements.'
  },
  {
    step: '02',
    title: 'Register for the Exam',
    description: 'Applicants must register for an in-person state exam. Exams are held weekly around the state; you are welcome to take one in your area or drive to any upcoming test location.'
  },
  {
    step: '03',
    title: 'Complete Approved Education',
    description: 'All persons seeking appointment as a Notary Public must satisfactorily complete a Secretary of State approved six-hour course of study prior to appointment. Our course fits these requirements.'
  },
  {
    step: '04',
    title: 'Register for the Exam',
    description: 'Applicants must register for an in-person state exam. Exams are held weekly around the state; you are welcome to take one in your area or drive to any upcoming test location.'
  },
  {
    step: '05',
    title: 'Complete Approved Education',
    description: 'All persons seeking appointment as a Notary Public must satisfactorily complete a Secretary of State approved six-hour course of study prior to appointment. Our course fits these requirements.'
  },
  {
    step: '06',
    title: 'Register for the Exam',
    description: 'Applicants must register for an in-person state exam. Exams are held weekly around the state; you are welcome to take one in your area or drive to any upcoming test location.'
  },
]

export default function Steps() {
  return (
    <section class="py-20 bg-white border-b border-gray-200">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              How do I become a <span className="underlined-three relative">notary public?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The first step to become a California Notary, 6-hour required trainig.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-16 mt-12">
          {steps.map((step) => (
            <div key={step.title}>
              <div className="text-primary text-xl font-semibold mb-4 bg-yellow-400 inline-block pt-3 rounded-full w-16 h-16 text-center shadow border-4 border-white"><span className="mt-0.5 inline-block">{step.step}</span></div>
              <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-4 text-lg text-gray-600">{step.description}</p>
            </div>
          ))}
          </div>
      </Container>
    </section>
  )
}