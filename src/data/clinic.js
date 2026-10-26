// Everything here is made up for the demo: the clinic, doctors, fees and
// reviews. A real build swaps this file for the client's own details.

export const STUDIO = 'Our Studio';

export const clinic = {
  name: 'Neelam Dental & Family Clinic',
  shortName: 'Neelam Clinic',
  urduName: 'نیلم کلینک',
  area: 'Gulberg III, Lahore',
  address: ['Plot 14, Kashi Lane', 'off Main Boulevard, Gulberg III', 'Lahore'],
  landmark: 'Liberty Chowk',
  walk: '450 m, about 6 minutes on foot',
};

// Clinic days use Pakistan time. 1 = Monday ... 6 = Saturday, 0 = Sunday (closed).
export const hours = [
  { day: 1, name: 'Monday', morning: '10 am to 1 pm', evening: '5 pm to 10 pm' },
  { day: 2, name: 'Tuesday', morning: '10 am to 1 pm', evening: '5 pm to 10 pm' },
  { day: 3, name: 'Wednesday', morning: '10 am to 1 pm', evening: '5 pm to 10 pm' },
  { day: 4, name: 'Thursday', morning: '10 am to 1 pm', evening: '5 pm to 10 pm' },
  { day: 5, name: 'Friday', morning: '10 am to 12:30 pm', evening: '5 pm to 10 pm' },
  { day: 6, name: 'Saturday', morning: '10 am to 1 pm', evening: '5 pm to 10 pm' },
  { day: 0, name: 'Sunday', morning: null, evening: null },
];

// Opening windows in minutes after midnight, used for "Open now".
export const openWindows = {
  1: [[600, 780], [1020, 1320]],
  2: [[600, 780], [1020, 1320]],
  3: [[600, 780], [1020, 1320]],
  4: [[600, 780], [1020, 1320]],
  5: [[600, 750], [1020, 1320]],
  6: [[600, 780], [1020, 1320]],
  0: [],
};

export const doctors = [
  {
    id: 'bilal',
    name: 'Dr. Bilal Ahmad',
    short: 'Dr. Bilal',
    initials: 'BA',
    degrees: 'BDS',
    role: 'General dentist',
    tag: 'General',
    kind: 'dentist',
    sees: 'Checkups, fillings, scaling and root canals, for adults and children over 4.',
    days: 'Monday to Saturday',
    time: '5 pm to 10 pm',
    fee: 2000,
    schedule: { days: [1, 2, 3, 4, 5, 6], from: 1020, to: 1320 },
  },
  {
    id: 'hira',
    name: 'Dr. Hira Saeed',
    short: 'Dr. Hira',
    initials: 'HS',
    degrees: 'BDS, FCPS (Orthodontics)',
    role: 'Braces and aligners',
    tag: 'Braces',
    kind: 'dentist',
    sees: 'Crooked or gapped teeth, braces, clear aligners and retainers.',
    days: 'Monday, Wednesday, Friday',
    time: '5 pm to 9 pm',
    fee: 2500,
    schedule: { days: [1, 3, 5], from: 1020, to: 1260 },
  },
  {
    id: 'usman',
    name: 'Dr. Usman Tariq',
    short: 'Dr. Usman',
    initials: 'UT',
    degrees: 'BDS, MDS (Oral Surgery)',
    role: 'Oral surgeon',
    tag: 'Surgery',
    kind: 'dentist',
    sees: 'Tooth removal, wisdom teeth and implant consultations.',
    days: 'Tuesday, Thursday, Saturday',
    time: '6 pm to 10 pm',
    fee: 3000,
    schedule: { days: [2, 4, 6], from: 1080, to: 1320 },
  },
  {
    id: 'farah',
    name: 'Dr. Farah Javed',
    short: 'Dr. Farah',
    initials: 'FJ',
    degrees: 'MBBS, FCPS (Family Medicine)',
    role: 'Family doctor',
    tag: 'Family doctor',
    kind: 'family',
    sees: 'Fever, cough, blood pressure and sugar checks, for the whole family.',
    days: 'Monday to Saturday',
    time: '10 am to 1 pm',
    fee: 1500,
    schedule: { days: [1, 2, 3, 4, 5, 6], from: 600, to: 780, fridayTo: 740 },
  },
];

export const services = {
  teeth: [
    { name: 'Dental checkup', fee: 'Rs 2,000' },
    { name: 'Scaling and polishing', fee: 'Rs 5,000' },
    { name: 'Tooth filling', fee: 'from Rs 4,500', note: 'per tooth' },
    { name: 'Root canal', fee: 'from Rs 18,000', note: 'front teeth cost less' },
    { name: 'Tooth removal', fee: 'from Rs 3,500' },
    { name: 'Wisdom tooth removal', fee: 'from Rs 15,000' },
    { name: 'Teeth whitening', fee: 'Rs 25,000' },
    { name: 'Braces consultation', fee: 'Rs 2,500', note: 'braces quoted after the visit' },
    { name: 'Implant consultation', fee: 'Rs 3,000' },
  ],
  family: [
    { name: 'Family doctor visit', fee: 'Rs 1,500' },
    { name: 'Child visit', fee: 'Rs 1,500', note: 'under 12' },
    { name: 'Blood pressure check', fee: 'Rs 300' },
    { name: 'Sugar check (glucometer)', fee: 'Rs 300' },
    { name: 'Wound dressing', fee: 'from Rs 800' },
  ],
};

export const reviews = [
  {
    text: 'Booked a filling from my phone on the way home from office. Came at 7:20, went in at 7:20.',
    who: 'A. R., Model Town',
    about: 'Dr. Bilal',
  },
  {
    text: 'Dr. Farah checked my mother’s sugar and BP and explained everything to her in Urdu, slowly. My mother liked her.',
    who: 'S. K., Gulberg',
    about: 'Dr. Farah',
  },
  {
    text: 'My son’s braces visits run on time, and the full cost was told to us before anything started.',
    who: 'M. I., Johar Town',
    about: 'Dr. Hira',
  },
];

export const faqs = [
  {
    q: 'Can I come without booking?',
    a: 'Yes. Booked patients are seen first, so walk ins may wait. Booking takes a minute and keeps your place.',
  },
  {
    q: 'How can I pay?',
    a: 'Cash, debit or credit card, JazzCash or Easypaisa at the front desk.',
  },
  {
    q: 'Do you see children?',
    a: 'Yes. Dr. Bilal sees children from age 4 for checkups and fillings, and Dr. Farah sees children for fever, cough and checkups.',
  },
  {
    q: 'Is there parking?',
    a: 'There is street parking on Kashi Lane in the evening, and the Liberty Market parking is a 6 minute walk away.',
  },
  {
    q: 'How do I change or cancel a booking?',
    a: 'On the real site, your WhatsApp confirmation has a link to change or cancel. You can also message the front desk.',
  },
  {
    q: 'Is Neelam Clinic real?',
    a: 'No. It is a demo website, made to show what a clinic website can do. The clinic, doctors, fees and reviews are made up, and nothing you type is sent anywhere.',
  },
];
