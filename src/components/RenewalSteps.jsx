import { Container } from "./Container"

const steps = [
  {
    step: '01',
    title: 'Complete Approved Education',
    description: 'If you are a renewing notary and your current license is valid your will only need to take our 3-hour notary course. However, if your commission has expired or will expire prior to taking your state exam, you will be required by the state to take our 6-hour renewal course (its the same course as our Become A Notary 6-Hour Course).'
  },
  {
    step: '02',
    title: 'Purchase Your State-Required Supplies',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be.'
  },
  {
    step: '03',
    title: 'Fulfill Your Notary Application Requirements with the state',
    description: 'At the end of our course you will be provide an easy to follow California Commissioning Checklist for renewing your notary license.'
  },
]

export default function RenewalSteps() {
  return (
    <section class="py-20 bg-white border-b border-gray-200">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Steps to renew your <span className="underlined-three relative">Notary Public Commission.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              In just three fast and easy steps you can renew your notary license.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-16 mt-12 md:mt-20">
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