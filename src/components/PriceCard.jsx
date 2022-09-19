const pricingPlans = [
  {
    id: '1',
    name: '6 Hour - Become A Notary',
    price: 'Only $29',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab aspernatur iure nisi modi dicta expedita sed esse corrupti aperiam inventore eveniet officiis ipsum voluptatum, maiores tempora incidunt molestiae! Nostrum.',
    button: {
      label: 'Start Your Course',
      href: '/start',
    },
    features: [
      'Money-Back Guarantee To Pass State Exam',
      'Self Paced Course',
      'Instant Proof of Completion',
      'State Licensed #605172',
      'Best For New Notaries'
    ],
  },
  {
    id: '2',
    name: '3 Hour - Notary Renewal',
    price: 'Only $19',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab aspernatur iure nisi modi dicta expedita sed esse corrupti aperiam inventore eveniet officiis ipsum voluptatum, maiores tempora incidunt molestiae! Nostrum.',
    button: {
      label: 'Start Your Course',
      href: '/start',
    },
    features: [
      'Money-Back Guarantee To Pass State Exam',
      'Self Paced Course',
      'Instant Proof of Completion',
      'State Licensed #605172',
      'Best For New Notaries'
    ],
  },
]

export function PriceCard(props) {
  return(
    <div>
      {pricingPlans.map((plan) => (

        <h2 key={plan.id}>
          {plan.name}
        </h2>

      ))}
    </div>
  )
}