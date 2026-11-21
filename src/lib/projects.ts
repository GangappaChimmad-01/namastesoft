/**
 * Portfolio — selected live projects from NAMASTESOFT_PROFILE.docx.
 * Drives the /portfolio page, its JSON-LD and the AI-readable /llms.txt.
 * Only list projects (and client names) the client has agreed can be shown publicly.
 */
export type Project = {
  id: string; // anchor on /portfolio, e.g. /portfolio#namastebill
  name: string;
  client?: string;
  summary: string; // one line for cards, llms.txt and schema
  type: string;
  platform: string;
  status: string;
  url?: string; // live website, when there is one
  overview: string;
  features: string[];
  stack: { label: string; value: string }[];
  services: string[]; // landing-page slugs this project is proof for
};

export const projects: Project[] = [
  {
    id: 'namastebill',
    name: 'NamasteBill',
    summary: 'POS billing and retail management software for supermarkets and retail shops, on web, mobile and Windows (works offline).',
    type: 'POS & billing software',
    platform: 'Web, mobile & Windows',
    status: 'Live product',
    url: 'https://mart.namastesoft.com/',
    overview:
      'NamasteBill is Namaste Soft’s own POS billing software for supermarkets and retail shops. It covers billing, stock, customer credit and daily reports, and runs in a web browser, on phones and tablets, and as a Windows desktop app that keeps billing when the internet is down. It is built for supermarkets, kirana stores, bakeries, pharmacies, textile shops, hardware stores, restaurants and other retailers.',
    features: [
      'POS billing with barcode scanning, product search and cash, UPI and credit payments',
      'Voice billing in English and Kannada, with GST-ready receipts',
      'Orders and returns, customer credit (khata) and a cash denomination counter',
      'Product management with GST slabs and barcodes, plus barcode label printing',
      'Inventory with low-stock alerts, reorder suggestions and purchase management',
      'Dashboard, reports, profit & loss and daily collections, with discounts and coupons',
      'Staff roles (Admin, Manager, Cashier), shop settings and data backup',
      'Thermal and A4/A5 receipt and label printing',
      'Windows app with local data storage, background sync, offline sign-in and silent printing'
    ],
    stack: [
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'Go (Golang)' },
      { label: 'Database', value: 'MySQL' }
    ],
    services: ['software-development-company', 'mobile-app-development-company']
  },
  {
    id: 'rm-bright-tech',
    name: 'RM Bright Tech',
    client: 'RM Bright Tech',
    summary: 'E-commerce website with product catalogue, cart, checkout, customer accounts and store administration.',
    type: 'E-commerce website',
    platform: 'Web application',
    status: 'Live project',
    url: 'https://rmbrighttech.com/',
    overview:
      'Namaste Soft developed the RM Bright Tech e-commerce website to give customers an online platform to browse products and shop through a web-based experience. The project focuses on presenting product information clearly and supporting the core activities of online shopping and store administration.',
    features: [
      'Responsive interface for desktop, tablet and mobile',
      'Product catalogue with product information and images',
      'Product categories, search and discovery',
      'Shopping cart with quantity updates and item removal',
      'Customer registration, login and profile management',
      'Order placement and order detail management',
      'Checkout with billing and shipping information',
      'Admin management of products, categories and customer orders'
    ],
    stack: [
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'PHP' },
      { label: 'Database', value: 'MySQL' }
    ],
    services: ['ecommerce-development-company', 'website-development-company']
  },
  {
    id: 'energy-data',
    name: 'Energy Data Management System',
    summary: 'Energy monitoring web application: modems send readings over a REST API to dashboards, reports and subscription billing.',
    type: 'Energy monitoring web application',
    platform: 'Web application',
    status: 'Live project',
    url: 'https://energy-data.in/',
    overview:
      'A web-based platform for energy monitoring. Modems send their readings to the platform through a REST API, and the data is presented through a dashboard and reports covering power generation, battery, solar, voltage and other energy values. Access is subscription based with online payments, and administrators have full control over the website.',
    features: [
      'Accepts data from modems through a REST API',
      'Dashboard showing power generation, battery, solar, voltage and other values',
      'Full history of previous power generation data for each modem',
      'Report generation for the monitored energy data',
      'Per-modem passwords that can be set dynamically',
      'Multiple modems managed from a single account',
      'Subscription-based modem activation with online payment',
      'Administrator and Modem User logins, sign-in by username or Modem ID',
      'Full admin control of users, modems and subscriptions'
    ],
    stack: [
      { label: 'Frontend', value: 'PHP' },
      { label: 'Backend', value: 'PHP' },
      { label: 'Data integration', value: 'REST API for modem data' }
    ],
    services: ['software-development-company', 'payment-gateway-integration']
  },
  {
    id: 'mh-stride',
    name: 'mH+STRIDE',
    client: 'Division of Nutrition, St. John’s Research Institute, Bengaluru',
    summary: 'Android app supporting a health research study on reducing sedentary time among desk-job employees.',
    type: 'Mobile application',
    platform: 'Android',
    status: 'Live on Google Play',
    overview:
      'An Android application for the Division of Nutrition at St. John’s Research Institute, Bengaluru. The app supports the STRIDE Study, a pilot study on sedentary time reduction in desk-job employees, which looks at how hourly walk breaks during work hours affect physical health, mental well-being and job performance.',
    features: [
      'Published and live on the Google Play Store',
      'Supports a health research study on reducing prolonged sitting',
      'Data encrypted in transit',
      'Users can request deletion of their data',
      'Published privacy policy for study participants'
    ],
    stack: [
      { label: 'Platform', value: 'Android' },
      { label: 'Distribution', value: 'Google Play Store' }
    ],
    services: ['mobile-app-development-company']
  },
  {
    id: 'playable',
    name: 'PlayAble',
    client: 'PlayAble India',
    summary: 'Android community app connecting para-athletes and fitness enthusiasts; 5,000+ downloads on Google Play.',
    type: 'Mobile application',
    platform: 'Android',
    status: 'Live on Google Play',
    overview:
      'An Android application for PlayAble India that connects para-athletes and fitness enthusiasts. Users create a profile, find other athletes and join a community to train together. The app is live on Google Play with more than 5,000 downloads.',
    features: [
      'Sign-in with mobile number OTP or Google Sign-In',
      'Account creation with guided onboarding',
      'Sport selection and athlete type: para-athlete or fitness enthusiast',
      'Impairment category selection for para-athletes',
      'Availability with preferred days and times',
      'Browse and review other athletes’ profiles',
      'Fitness training videos',
      'Data encrypted in transit, with deletion on request'
    ],
    stack: [
      { label: 'Platform', value: 'Android' },
      { label: 'Authentication', value: 'Mobile OTP & Google Sign-In' },
      { label: 'Distribution', value: 'Google Play Store' }
    ],
    services: ['mobile-app-development-company']
  }
];

export const projectsForService = (slug: string) => projects.filter((p) => p.services.includes(slug));
