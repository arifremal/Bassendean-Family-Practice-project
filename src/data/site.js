export const IMG = {
  logo: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/logo-1.svg',
  gp: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/gp.jpg',
  podiatry: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/gp-copy.jpg',
  exercise: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/s3.jpg',
  counselling: 'https://www.bassprac.com.au/wp-content/uploads/2020/12/1.jpg',
  clinic: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/clinic.png',
  golda: 'https://www.bassprac.com.au/wp-content/uploads/2021/07/Golda-Newland-scaled-700x860.jpg',
  julian: 'https://www.bassprac.com.au/wp-content/uploads/2019/08/Background-700x860.png',
  agpal: 'https://www.bassprac.com.au/wp-content/uploads/2020/12/agpal-accredited-email-signature.png',
  pageAbout: 'https://www.bassprac.com.au/wp-content/uploads/2019/08/page-title-1.jpg',
  pageServices: 'https://www.bassprac.com.au/wp-content/uploads/2019/08/page-title-2.jpg',
  pageTeam: 'https://www.bassprac.com.au/wp-content/uploads/2019/08/team_page-title.jpg',
  pageFaq: 'https://www.bassprac.com.au/wp-content/uploads/2019/08/page-title__faq.jpg',
  sectionBg: 'https://www.bassprac.com.au/wp-content/uploads/2019/08/section-bg-24.jpg',
  iconGp: 'https://www.bassprac.com.au/wp-content/uploads/2025/08/Gp-Bag.svg',
  iconPodiatry: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/003-podiatrist.svg',
  iconCounselling: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/001-conversations.svg',
  iconExercise: 'https://www.bassprac.com.au/wp-content/uploads/2020/10/002-physiotherapist.svg',
  iconAid: 'https://www.bassprac.com.au/wp-content/uploads/2020/12/002-first-aid-kit.svg',
  iconMassage: 'https://www.bassprac.com.au/wp-content/uploads/2020/12/001-massage.svg',
}

export const site = {
  name: 'Bassendean Family Practice',
  tagline: 'Your Local Medical Centre | GP | Doctors | Allied Health',
  address: '39 Old Perth Road, BASSENDEAN, WA, 6054',
  addressShort: '39 Old Perth Road, Bassendean',
  phone: '08 9279 9422',
  phoneTel: '0892799422',
  phoneAlt: '9279 9422',
  email: 'reception@bassprac.com.au',
  hoursShort: 'Mon – Thu: 9am – 6pm',
  hours: [
    { day: 'Monday', time: '9am – 6pm' },
    { day: 'Tuesday', time: '9am – 6pm' },
    { day: 'Wednesday', time: '9am – 6pm' },
    { day: 'Thursday', time: '9am – 6pm' },
  ],
  mapEmbed:
    'https://maps.google.com/maps?q=39%20Old%20Perth%20Road%20Bassendean%20WA%206054&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsUrl: 'https://maps.google.com/?q=39+Old+Perth+Road,+Bassendean+WA+6054',
}

export const slides = [
  {
    image: IMG.gp,
    kicker: 'Family medicine',
    title: 'Your Trusted Family Doctor In Bassendean',
    text: 'We are committed to providing patient-centered, high-quality care to patients of all ages.',
    cta: 'Book GP Appointment',
    to: '/appointments/gp',
  },
  {
    image: IMG.podiatry,
    kicker: 'Podiatry',
    title: 'Foot or Leg pain affecting your life?',
    text: 'Get better now, book an appointment with one of our experienced podiatrists today.',
    cta: 'Book Podiatrist Appointment',
    to: '/appointments/allied-health',
  },
  {
    image: IMG.exercise,
    kicker: 'Exercise physiology',
    title: 'Preventing and managing health risks through exercise',
    text: 'Our exercise physiologists can assist you to exercise safely and effectively to improve your overall health and function.',
    cta: 'Book an Appointment',
    to: '/appointments/allied-health',
  },
  {
    image: IMG.counselling,
    kicker: 'Counselling',
    title: 'Are you feeling Overwhelmed?',
    text: 'Our counselors are here to help you through the tough times.',
    cta: 'Book an Appointment',
    to: '/appointments/allied-health',
  },
]

export const services = [
  {
    slug: 'gp',
    title: 'GP',
    short: 'General practice for the whole family, with specialists involved only if necessary.',
    icon: IMG.iconGp,
    image: IMG.gp,
    path: '/services/gp',
  },
  {
    slug: 'podiatry',
    title: 'Podiatry',
    short: 'Patient-centred care for foot, heel and knee pain with experienced podiatrists.',
    icon: IMG.iconPodiatry,
    image: IMG.podiatry,
    path: '/services/podiatry',
  },
  {
    slug: 'counselling',
    title: 'Counselling',
    short: 'Compassionate support through anxiety, relationships, grief and life’s tougher seasons.',
    icon: IMG.iconCounselling,
    image: IMG.counselling,
    path: '/services/counselling',
  },
  {
    slug: 'exercise-physiotherapy',
    title: 'Exercise Physiotherapy',
    short: 'Safe, effective exercise to improve overall health, function and long-term wellbeing.',
    icon: IMG.iconExercise,
    image: IMG.exercise,
    path: '/services/exercise-physiotherapy',
  },
]

export const alliedList = [
  'Consultations with our Allied Health Team',
  'ECG, echocardiography',
  'Ultrasound examination',
  'A wide range of laboratory studies',
  'Detailed medical history, physical examination methods',
]

export const team = [
  {
    slug: 'dr-julian-charles',
    name: 'Dr Julian Charles',
    role: 'General Practitioner',
    image: IMG.julian,
    path: '/team/dr-julian-charles',
    newPatients: false,
  },
  {
    slug: 'golda-newland',
    name: 'Golda Newland',
    role: 'Counsellor',
    image: IMG.golda,
    path: '/team/golda-newland',
    newPatients: true,
  },
]

export const scriptRules = [
  'Only current patients of Bassendean Family Practice may request a prescription renewal without a doctor’s consultation.',
  'Only medications that have previously been prescribed by a doctor at Bassendean Family Practice can be renewed without a doctor’s consultation.',
  'If your prescription is overdue for renewal or you are requesting a renewal in advance of the scheduled date, you may be asked to make an appointment with one of our doctors in order to renew your prescription.',
  'Our doctors are not able to renew some prescriptions without seeing you first. This may be for a number of reasons – to evaluate for any side-effects, to check on your progress because it’s been too long between physical visits to allow a repeat or to see if other medications may be more appropriate. If you are unsure why your doctor is unable to renew your prescription without a consultation, please ask your doctor at your next visit.',
  'All prescription renewals will incur a fee regardless of the number of medications requested. Payment is taken on our website at the time of request.',
  'You must complete all fields of our online form. This includes your full name, date-of-birth, address, medication, dose and frequency as well as a contact telephone number. These details must match the contact details that we have for you in our records.',
  'You will receive an email when your script is ready for collection or due to be posted to your pharmacy.',
  'Non-Consult Script Renewals will not generally be made for drugs of dependence such as narcotics, benzodiazepines and other sedatives. Examples include: Panadeine Forte, Endone, Oxycodone, Targin, MS Contin, Diazepam/Valium, Oxazepam/Serepax, Temazepam, Stilnox.',
  'If your repeat script request is NOT accepted by your Doctor you will typically receive an email (within 4 of YOUR DOCTOR’S BUSINESS hours) and the money deposited will be credited to your account to be used at your next visit or refunded.',
  'If you change your mind AFTER your request – please call reception ASAP on 9279 9422.',
  'No refunds will be provided for change of mind once a script has been written because the doctors time has already been used to complete your request.',
  'If you have any outstanding accounts you CANNOT obtain a repeat script without first settling the account IN FULL. Any online payments will go towards outstanding debts if not already fully settled.',
]

export const scriptFees = [
  { label: 'Within 4 of YOUR DOCTOR’S BUSINESS Hours', note: 'Collection ONLY', price: '$90' },
  { label: 'Posted Within 4 of YOUR DOCTOR’S BUSINESS Hours', note: 'Postage included', price: '$100' },
  { label: 'Within 24 of YOUR DOCTOR’S BUSINESS Hours', note: 'Collection ONLY', price: '$55' },
  { label: 'Posted Within 24 of YOUR DOCTOR’S BUSINESS Hours', note: 'Postage included', price: '$65' },
]

export const faqs = [
  {
    q: 'Who cares for patients at Bassendean Family Practice?',
    a: 'The family practitioner handles the majority of medical requests, with specialists involved only if necessary. Our team includes Dr Julian Charles, General Practitioner, and Golda Newland, Counsellor, together with allied health practitioners in podiatry and exercise physiology.',
  },
  {
    q: 'Are you taking new patients?',
    a: 'Unfortunately we are not taking any new patients at this time. If you would like to be added to Dr Julian Charles’ waitlist, select that option on the GP appointment form and you will be the first to know when books re-open.',
  },
  {
    q: 'How do I request a repeat prescription?',
    a: 'As an existing patient you may request repeat prescriptions in writing via our online request form. Only current patients may request a non-urgent script renewal for $55. Prescriptions can be mailed for $10 extra. Urgent (within 4hrs from receipt during your doctor’s business hours) script requests are $90.',
  },
  {
    q: 'What are your opening hours?',
    a: 'Monday to Thursday, 9am – 6pm. For medical emergencies please call 000.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Book online for a GP visit, allied health, or a repeat script — or call us on 08 9279 9422. Please provide details so we can better prepare and allocate the doctor’s time to ensure minimum wait time.',
  },
]
