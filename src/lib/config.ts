export const config = {
  // Canonical origin. The bare domain redirects here, so every canonical / OG URL must use www.
  siteUrl: 'https://www.namastesoft.com',

  company: {
    name: 'Namaste Soft',
    tagline: 'Software & website development company',
    // Both numbers take calls and WhatsApp. `wa` is the international format wa.me expects.
    phones: [
      { display: '+91 63613 37883', wa: '916361337883' },
      { display: '+91 81508 28833', wa: '918150828833' }
    ],
    email: 'contact@namastesoft.com',
    city: 'Bengaluru',
    region: 'Karnataka',
    country: 'IN',
    address: 'Bengaluru, Karnataka, India'
  },

  // Shown in the hero, About section and page copy; change here only.
  stats: {
    projects: '10+',
    years: '3+',
    yearsWord: 'three'
  },

  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', schema: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' } },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM', schema: { days: ['Saturday'], opens: '10:00', closes: '16:00' } },
    { day: 'Sunday', time: 'Closed', schema: null }
  ],

  social: {
    twitter: '@namaste_soft',
    linkedin: 'company/namastesoft',
    github: 'namastesoft'
  },

  whatsapp: {
    defaultMessage: 'Hi! I want to know more about your services.',
    supportNumber: '918150828833'
  }
};
