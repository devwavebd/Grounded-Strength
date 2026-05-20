import { Trainer, Program } from './types';

export const BUSINESS_INFO = {
  name: 'Grounded Strength',
  phone: '512-289-1382',
  textPhone: '512-289-1382',
  address: '211 Walter Seaholm Dr., Ste. UG100 Austin, Texas, 78701',
  scheduleDisclaimer: 'By Appointment Only',
  tagline: 'PERSONAL TRAINING FROM PAIN TO PERFORMANCE',
  heroBannerQuote: 'Using Cutting Edge Technology To Help People To TRUST Their Body And Create STRENGTH In A Safe And Systematic Way.',
  whyUsTitle: 'WHY US',
  whyUsSubtitle: 'WE USE TECHNOLOGY, PROPER ALIGNMENT, AND EXERCISE SELECTION TO ACHIEVE BETTER RESULTS',
  whyUsDescription: 'We have spent extensive amounts of our time and effort seeking the best methods and technology to enhance the function of the human body. We have the unique ability to take someone in pain and move their mindset to one that is improving their daily performance.',
};

export const TRAINERS: Trainer[] = [
  {
    id: 'bert',
    name: 'Bert Massey',
    role: 'Founder & Head Coach',
    bioSummary: 'Grounded Strength is a small personal training gym that is focused on optimizing the nervous system to alleviate pain. We use technology, proper alignment, and exercise selection to achieve better results than most gyms or physical therapists.',
    fullBio: [
      'I began working as a personal trainer about 10 years ago. Prior to that I had the intention of becoming an attorney, but hated the desk work and always loved working out as well as playing sports and being active.',
      'I also had a desire to change lives for the better. One of the jobs I took was with a company called "Efficient Exercise" - their goal was to create great workouts in 30 mins for busy people. They used the HIT (High Intensity Training) Method and created some technology called ARX (Adaptive Resistance Exercise).',
      'Over the next 10 years I met more companies with technologies that advanced human potential like NeuFit, and I also learned that there is an asymmetry that exists in each of our bodies that is predictable. We use these technologies and exercise selection to correct the natural asymmetry of the human body.'
    ],
    educationAndCredentials: [
      '10+ Years Personal Training Expertise',
      'HIT (High Intensity Training) Specialist',
      'ARX Adaptive Resistance Expert',
      'Advanced NeuFit Method Practitioner',
      'Postural Alignment & Pain Management Expert'
    ],
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Neurological pain-to-performance recovery expert',
      'Extensive technology-backed conditioning history',
      'Optimizes symmetrical alignment of musculature'
    ]
  },
  {
    id: 'chris',
    name: 'Chris Cerda',
    role: 'Elite Coach & NeuFit Practitioner',
    bioSummary: 'Whether clients are beginners or professional athletes, Chris\' approach is tailored to their needs, focusing on sustainable results and building confidence through health and fitness. His B.S. in Exercise and Sports Science and Certified NeuFit practitioner qualifications show why our clients love working with him!',
    fullBio: [
      'Chris was born and raised here in south central Texas. His appetite for athletics and human performance started at a young age with track and field, baseball, football, and countless early morning strength and conditioning sessions.',
      'Whether clients are beginners or professional athletes, Chris\' approach is tailored to their needs, focusing on sustainable results and building confidence through health and fitness.',
      'Ready to take the steps towards a healthier, stronger you? I\'d recommend contacting Chris today to start your journey!'
    ],
    educationAndCredentials: [
      'B.S. in Exercise and Sports Science from Texas State University',
      'Licensed NeuFit Practitioner',
      '5+ Years Elite Strength & Conditioning Experience',
      'Athletic Human Performance Specialist',
      'Confidence & Movement Mechanics Strategy Design'
    ],
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Certified Sports Scientist & NeuFit practitioner',
      'Deep roots in South Texas track and conditioning',
      'Tailored plans for beginners to professional athletes'
    ]
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'long-term',
    number: '1',
    title: 'LONG TERM TRAINING',
    subtitle: 'Weekly Training Membership',
    description: 'Our most sought-after signature program design. Perfect for individuals seeking continuous structure, custom neuromuscular tuning, and consistent physical progress under dedicated visual coaching supervision.',
    features: [
      'Weekly Scheduled Memberships',
      'Personalized technology alignment plan',
      'Direct one-on-one progress monitoring',
      'Integrated NeuFit nervous-system optimization'
    ],
    price: 'Custom Membership',
    tagline: 'Achieve reliable, permanent pain-free athletic progression.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'punchcard',
    number: '2',
    title: 'TRAINING PUNCHCARD',
    subtitle: 'Session Punchcard to Fit Your Needs',
    description: 'High-flexibility package created specifically to fit busy lifestyles and dynamic professional calendars. Gain unrestricted high-tech gym access on credit increments designed with you in control.',
    features: [
      'Pre-Paid Flexible Package options',
      'Valid for expert supervised high-performance sessions',
      'Full access to advanced muscle-loading ARX machinery',
      'Perfect for supplemental athletic conditioning'
    ],
    price: 'Multi-Session Packs',
    tagline: 'Professional supervision that fits your personal calendar.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'single',
    number: '3',
    title: 'SINGLE SESSIONS',
    subtitle: '30 Minutes or 1 Hour',
    description: 'Targeted single personal coaching appointments built to address sudden symptoms, tune physical performance aspects, run diagnostic asymmetry evaluations, or enjoy short intense muscle stimulus sessions.',
    features: [
      '30-minute high intensity focus or 1-hour comprehensive session',
      'Predictable visual mechanics alignment check-ups',
      'In-session therapeutic pain relief treatment with NeuFit',
      'Zero ongoing membership commitments required'
    ],
    price: 'Rapid 30m / 1hr Sessions',
    tagline: 'Immediate, highly focused neurological pain mapping and load adjustment.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
  }
];

export const KEY_PILLARS = [
  {
    title: 'WE ARE VERY UNIQUE IN THIS INDUSTRY',
    description: 'We don\'t follow standard cookie-cutter fitness models. We target the nervous system directly to bypass limitations and treat pain at its root source.'
  },
  {
    title: 'WE SEEK OUT QUALITY TECHNOLOGY AND STAY ON THE CUTTING EDGE',
    description: 'Utilizing sophisticated tools like ARX adaptive resistance and NeuFit electrical stimulation represents a tectonic shift in athletic capability.'
  },
  {
    title: 'WE HAVE AN ESTABLISHED PROVEN PROCESS THAT SOMEONE CAN FOLLOW',
    description: 'Our scientific methodology leaves zero guesswork. We map exact physical inputs, verify asymmetry metrics, and plot systematic improvement pathways.'
  },
  {
    title: 'OUR TECHNIQUES AND USE OF TECHNOLOGY LEADS TO PAIN RELIEF',
    description: 'By isolating and reprogramming error signals traveling from the nervous system to major joints and muscle cells, we unlock rapid, secure pain-free range.'
  },
  {
    title: 'ANYONE CAN GET STRONGER AND ACHIEVE THEIR GOALS',
    description: 'Regardless of current condition, biological age, or history of athletic trauma, our precise bio-feedback equipment adapts safely to everyone.'
  }
];

export const AVAILABLE_HOURS = [
  '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
];
