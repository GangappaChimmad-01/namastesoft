/**
 * Landing pages, one per target keyword. Each page gets its own URL, title, H1 and FAQ.
 * Keep the copy factual: no prices, client names or tech we don't use.
 */
export type ServicePage = {
  slug: string;
  name: string; // short name for nav, cards and breadcrumbs
  serviceType: string;
  title: string; // <title>, aim for ~60 characters
  description: string; // meta description, ~150 characters
  h1: string;
  eyebrow: string;
  intro: string[];
  problems: { title: string; text: string }[]; // business problems the service solves
  offerings: { title: string; text: string }[];
  technologies: string[];
  forWho: string[];
  approach: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const commonApproach = [
  { title: 'Free consultation', text: 'We learn about your business, goals and budget, and tell you honestly what will and won’t help.' },
  { title: 'Fixed scope & quote', text: 'You get a clear list of deliverables, milestones and an itemised quote before any work starts.' },
  { title: 'Design & build', text: 'You see progress as we go, with regular demos, so feedback lands early, not at the end.' },
  { title: 'Launch & support', text: 'We test thoroughly, launch, and stay on for support, fixes and improvements.' }
];

export const servicePages: ServicePage[] = [
  {
    slug: 'website-development-company',
    name: 'Website development',
    serviceType: 'Website development',
    title: 'Website Development Company in India | Namaste Soft',
    description:
      'Build fast, responsive and SEO-friendly business websites with Namaste Soft in Bengaluru. Custom website design, development and ongoing support across India.',
    h1: 'Website design & development company',
    eyebrow: 'Website development services',
    intro: [
      'Your website is often the first conversation a customer has with your business. We design and develop websites that load fast, look great on every phone, and are built to be found on Google.',
      'Whether you need your first business website, a redesign of an old one, or an online store, our website developers handle everything from design and content structure to launch and ongoing support.'
    ],
    problems: [
      { title: 'Customers can’t find you on Google', text: 'Slow pages and weak structure rarely rank. We build with clean HTML, fast loading, metadata, schema and a sitemap from day one.' },
      { title: 'An outdated site that loses enquiries', text: 'Old designs that break on phones send visitors away. We design mobile-first, around one clear call to action.' },
      { title: 'Relying only on social media', text: 'Social reach depends on someone else’s algorithm. Your own website is an asset you control and customers can find.' }
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'PHP & Laravel', 'Vercel', 'Cloudflare'],
    offerings: [
      { title: 'Business websites', text: 'Professional company websites that explain what you do and turn visitors into enquiries.' },
      { title: 'E-commerce websites', text: 'Online stores with product catalogues, carts, payments and order management.' },
      { title: 'Landing pages', text: 'Focused pages for campaigns and ads, designed around a single call to action.' },
      { title: 'Website redesign', text: 'Modernise an outdated site without losing the search rankings you already have.' },
      { title: 'SEO-ready build', text: 'Clean structure, fast loading, schema markup and metadata built in from day one.' },
      { title: 'Maintenance & support', text: 'Updates, security fixes, backups and content changes after launch.' }
    ],
    forWho: ['Startups launching their first product', 'Local shops, clinics and service businesses', 'Growing companies replacing an old website', 'Businesses moving from social media to their own site'],
    approach: commonApproach,
    faqs: [
      {
        q: 'How much does website development cost?',
        a: 'It depends on the number of pages, whether the design is custom, and features such as e-commerce, booking or integrations. After a free consultation we give you a fixed, itemised quote, so you know the full cost before we start.'
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A simple business website is much quicker than an e-commerce store or a custom web app. We agree a schedule with clear milestones before starting and share progress with you throughout.'
      },
      {
        q: 'Will my website work well on mobile phones?',
        a: 'Yes. Every site we build is mobile-first and responsive, so it looks and works well on phones, tablets and desktops.'
      },
      {
        q: 'Is the website SEO-friendly?',
        a: 'Yes. We build with fast loading, clean HTML structure, page titles and descriptions, schema markup, a sitemap and mobile-friendliness, which are the technical foundations Google looks for.'
      },
      {
        q: 'Do you provide support after the website goes live?',
        a: 'Yes. We offer ongoing support and maintenance, including updates, bug fixes, security updates and content changes.'
      }
    ],
    related: ['software-development-company', 'mobile-app-development-company']
  },
  {
    slug: 'software-development-company',
    name: 'Software development',
    serviceType: 'Custom software development',
    title: 'Custom Software Development Company in India | Namaste Soft',
    description:
      'Namaste Soft develops custom business software, web applications, CRM, ERP, POS and scalable digital solutions for growing businesses across India.',
    h1: 'Custom software development company',
    eyebrow: 'Custom software development',
    intro: [
      'Off-the-shelf software rarely fits the way your business actually works. We build custom software and web applications for startups and growing businesses, designed around your process instead of forcing you to change it.',
      'From internal tools and dashboards to customer-facing platforms and desktop applications, we take your idea from requirements to a reliable, scalable product, and keep supporting it after launch.'
    ],
    problems: [
      { title: 'Work runs on spreadsheets and paper', text: 'Manual records are slow and error-prone. We turn them into software with proper data, roles and reports.' },
      { title: 'Off-the-shelf tools don’t fit', text: 'Generic software forces you to change how you work. Custom software follows your process instead.' },
      { title: 'Disconnected systems and double entry', text: 'We connect billing, inventory, CRM and messaging through APIs so data is entered once.' }
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Go (Golang)', 'Node.js', 'NestJS', 'Python', 'PHP & Laravel', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Drizzle ORM'],
    offerings: [
      { title: 'Web applications', text: 'Secure, scalable browser-based apps with user accounts, roles and real-time features.' },
      { title: 'CRM & ERP systems', text: 'Customer relationship and enterprise resource planning tools built for how your team works.' },
      { title: 'POS, billing & inventory', text: 'Point of sale, billing, stock, purchase and warehouse management, including offline-capable Windows apps.' },
      { title: 'Industry software', text: 'Hospital, school, HR, appointment and booking management systems.' },
      { title: 'SaaS platforms', text: 'Multi-user, role-based SaaS products with subscriptions and admin panels.' },
      { title: 'Desktop software', text: 'Windows applications with installers, local data, background sync and automatic updates.' },
      { title: 'Dashboards & reporting', text: 'Turn scattered spreadsheets into live dashboards, analytics and reports.' },
      { title: 'APIs & integrations', text: 'REST APIs and integrations with payments, messaging and the tools you already use.' },
      { title: 'MVP development for startups', text: 'Launch a focused first version quickly, learn from real users, then grow it.' }
    ],
    forWho: ['Startups building an MVP', 'Small and medium businesses outgrowing spreadsheets', 'Teams replacing manual, paper-based processes', 'Companies needing a partner for ongoing development'],
    approach: commonApproach,
    faqs: [
      {
        q: 'What kind of software do you build?',
        a: 'Custom web applications and SaaS platforms, CRM and ERP systems, POS, billing and inventory software, hospital, school, HR and booking management systems, dashboards, desktop software and integrations between the tools you already use.'
      },
      {
        q: 'Which technologies do you use for custom software?',
        a: 'Frontends in React.js, Next.js and TypeScript; backends in Go (Golang), Node.js, NestJS, Python, PHP and Laravel; and PostgreSQL, MySQL, Redis or SQLite databases, chosen to fit the project.'
      },
      {
        q: 'Do you work with startups and small businesses?',
        a: 'Yes. We work with startups and growing businesses and help you scope a first version that solves the core problem, then build on it as you grow.'
      },
      {
        q: 'How much does custom software development cost?',
        a: 'Cost depends on features, integrations and complexity. After understanding your requirements in a free consultation, we give you a fixed, itemised quote with milestones.'
      },
      {
        q: 'Can you work with us remotely?',
        a: 'Yes. We work with clients remotely using video calls, WhatsApp and regular progress demos, so you stay involved wherever you are.'
      },
      {
        q: 'Do you maintain the software after launch?',
        a: 'Yes. We provide ongoing support, bug fixes, performance tuning, security updates and new features.'
      }
    ],
    related: ['ai-development-company', 'cloud-devops-services']
  },
  {
    slug: 'mobile-app-development-company',
    name: 'Mobile app development',
    serviceType: 'Mobile application development',
    title: 'Mobile App Development Company in India | Namaste Soft',
    description:
      'Build Android and iOS applications with Namaste Soft. We develop scalable, user-friendly mobile apps for startups and businesses, from idea to store launch.',
    h1: 'Mobile app development company',
    eyebrow: 'Android & iOS app development',
    intro: [
      'Your customers live on their phones. We design and develop Android and iOS apps for startups and businesses, with smooth, simple experiences people actually keep using.',
      'We help you decide between native and cross-platform development, design the user experience, build the app and its backend, and take it through to Play Store and App Store launch.'
    ],
    problems: [
      { title: 'Your service isn’t on customers’ phones', text: 'An app puts bookings, orders and updates one tap away, with push notifications to bring people back.' },
      { title: 'Field teams working on paper', text: 'Business apps let staff record work on the move, with data synced to your systems.' },
      { title: 'Apps that fail on a weak connection', text: 'We build offline storage and sync, so the app keeps working when the network drops.' }
    ],
    technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'Flutter', 'Dart', 'Room & SQLite', 'Firebase Cloud Messaging', 'Google Maps'],
    offerings: [
      { title: 'Android apps', text: 'Apps built for the wide range of Android devices your customers use.' },
      { title: 'iOS apps', text: 'iPhone and iPad apps that follow Apple’s design and review guidelines.' },
      { title: 'Cross-platform apps', text: 'One codebase for Android and iOS to reach both audiences faster.' },
      { title: 'App backend & APIs', text: 'Secure servers, databases, logins, payments and admin panels behind your app.' },
      { title: 'Push, real-time & offline', text: 'Push notifications, real-time updates and offline data that syncs when the connection returns.' },
      { title: 'Store launch & updates', text: 'Store listings, submission, and updates after launch.' }
    ],
    forWho: ['Startups launching a mobile-first product', 'Businesses adding an app for bookings or orders', 'Companies building apps for their field teams', 'Founders validating an MVP'],
    approach: commonApproach,
    faqs: [
      {
        q: 'Should I build a native or cross-platform app?',
        a: 'Cross-platform is usually faster and more cost-effective when you need both Android and iOS. Native makes sense for apps that need maximum performance or deep device features. We recommend one after understanding your needs.'
      },
      {
        q: 'Do you publish the app to the Play Store and App Store?',
        a: 'Yes. We prepare the store listing and handle submission, so your app is ready for the Google Play Store and Apple App Store.'
      },
      {
        q: 'How much does mobile app development cost?',
        a: 'It depends on the number of screens, features, backend needs and platforms. We share a fixed, itemised quote after a free consultation.'
      },
      {
        q: 'Can you build the backend and admin panel too?',
        a: 'Yes. We build the complete system: the app, its backend and APIs, and an admin panel to manage users and content.'
      },
      {
        q: 'Which technologies do you use for mobile apps?',
        a: 'Kotlin, Java and Jetpack Compose with the Android SDK for native Android, and Flutter (Dart) for cross-platform apps, plus Room and SQLite for offline data, Firebase Cloud Messaging for push notifications, Google Maps, Bluetooth and device sensors.'
      },
      {
        q: 'Have you published apps on Google Play?',
        a: 'Yes. Apps we have built are live on Google Play, including PlayAble, a para-athlete community app with more than 5,000 downloads, and mH+STRIDE, a health research app for St. John’s Research Institute, Bengaluru.'
      }
    ],
    related: ['software-development-company', 'website-development-company']
  },
  {
    slug: 'whatsapp-automation',
    name: 'WhatsApp automation',
    serviceType: 'WhatsApp Business automation',
    title: 'WhatsApp Business Automation Services in India | Namaste Soft',
    description:
      'Automate customer support, lead generation and business communication using WhatsApp Business API solutions from Namaste Soft, Bengaluru.',
    h1: 'WhatsApp automation & chatbot development',
    eyebrow: 'WhatsApp Business automation',
    intro: [
      'Your customers already message you on WhatsApp. We help businesses answer them instantly, any time of day, with automated replies, chatbots and workflows that capture leads and bookings without someone glued to the phone.',
      'We set up and build on the official WhatsApp Business Platform, connect it to your existing tools, and design conversations that feel helpful, not robotic.'
    ],
    problems: [
      { title: 'Messages go unanswered after hours', text: 'Automated replies answer common questions instantly, any time of day.' },
      { title: 'Leads get lost in busy chats', text: 'Lead capture collects details and passes qualified enquiries to your team or CRM.' },
      { title: 'Staff repeat the same answers all day', text: 'Chatbots and workflows handle routine questions so your team handles the rest.' }
    ],
    technologies: ['WhatsApp Business API', 'Instagram API', 'Facebook Messenger API', 'n8n', 'REST APIs', 'OpenAI API'],
    offerings: [
      { title: 'WhatsApp Business API setup', text: 'Get set up on the official WhatsApp Business Platform, with your number, profile and message templates in place.' },
      { title: 'WhatsApp chatbots', text: 'Instant answers to common questions, with buttons and menus that resolve queries end to end.' },
      { title: 'Lead capture & qualification', text: 'Collect details from new enquiries and pass qualified leads to your team.' },
      { title: 'Bookings & reminders', text: 'Let customers book slots in the chat, with automatic reminders.' },
      { title: 'Instagram & Messenger', text: 'Automate replies and lead capture on Instagram and Facebook Messenger too.' },
      { title: 'n8n & CRM integration', text: 'n8n workflows and automated emails that connect WhatsApp to your CRM, website, billing or order system.' }
    ],
    forWho: ['Clinics, salons and service businesses taking bookings', 'Shops and e-commerce brands answering order queries', 'Real estate, education and other lead-driven businesses', 'Any business getting more WhatsApp messages than it can answer'],
    approach: commonApproach,
    faqs: [
      {
        q: 'What is WhatsApp automation?',
        a: 'It means using software to answer and act on WhatsApp messages automatically, for example replying to FAQs, collecting customer details, booking appointments or sending order updates, while your team handles the conversations that need a human.'
      },
      {
        q: 'Do I need the WhatsApp Business API?',
        a: 'For chatbots, automation at scale and integration with your systems, yes. These run on the official WhatsApp Business Platform (API) from Meta. We guide you through setup and build the automation on top of it.'
      },
      {
        q: 'Can I send bulk or broadcast messages?',
        a: 'Yes, to customers who have opted in to receive messages from you, using message templates approved under WhatsApp’s policies. We help you set this up the right way so your number stays in good standing.'
      },
      {
        q: 'Can WhatsApp automation connect to my CRM or website?',
        a: 'Yes. We can connect WhatsApp to your CRM, website forms, booking system or billing software, so leads and orders flow automatically.'
      },
      {
        q: 'Do you automate Instagram and Facebook Messenger as well?',
        a: 'Yes. We integrate the Instagram API and Facebook Messenger, and use n8n and API-based workflows to automate lead capture, notifications and emails across channels.'
      }
    ],
    related: ['ai-development-company', 'software-development-company']
  },
  {
    slug: 'ai-development-company',
    name: 'AI & ML solutions',
    serviceType: 'Artificial intelligence and machine learning development',
    title: 'AI Development and Automation Company in India | Namaste Soft',
    description:
      'Build AI chatbots, intelligent automation, document processing and AI-powered business applications with Namaste Soft, using the OpenAI API.',
    h1: 'AI development & automation company',
    eyebrow: 'AI & ML solutions',
    intro: [
      'AI is most useful when it solves a specific problem: answering customers faster, spotting patterns in your data, or taking repetitive work off your team. We build AI and machine learning solutions around the problem, not the hype.',
      'We start by checking whether AI is the right tool at all. Where it is, we design, build and integrate it into the software and processes you already use.'
    ],
    problems: [
      { title: 'Support answers the same questions', text: 'AI chatbots and assistants resolve routine questions on your website or WhatsApp.' },
      { title: 'Hours lost to documents and data entry', text: 'AI document and data processing extracts and organises information automatically.' },
      { title: 'Information that’s hard to find', text: 'Intelligent search helps staff and customers find answers in your own content.' }
    ],
    technologies: ['OpenAI API', 'Python', 'Natural language processing', 'n8n', 'REST APIs', 'PostgreSQL'],
    offerings: [
      { title: 'OpenAI API integration', text: 'Add GPT-powered features to your website, app or business software.' },
      { title: 'AI chatbots & assistants', text: 'Virtual assistants and AI customer support that answer questions on your website or WhatsApp.' },
      { title: 'Document & data processing', text: 'Extract, classify and summarise information from documents and data automatically.' },
      { title: 'Natural language processing', text: 'Understand customer messages, enquiries and text at scale.' },
      { title: 'Intelligent search', text: 'Search and information retrieval that finds answers, not just keywords.' },
      { title: 'AI-assisted workflows', text: 'Automate repetitive, rule-heavy work so your team can focus on what matters.' }
    ],
    forWho: ['Businesses with repetitive manual work to automate', 'Teams sitting on data they are not using', 'Companies wanting faster customer support', 'Startups building an AI-powered product'],
    approach: commonApproach,
    faqs: [
      {
        q: 'How can AI help my business?',
        a: 'Common uses include answering customer questions automatically with chatbots, processing documents and data, intelligent search over your information, and automating repetitive tasks. We help you find where AI will genuinely save time or money.'
      },
      {
        q: 'Do I need a lot of data to use AI?',
        a: 'Not always. Solutions built on the OpenAI API, such as chatbots and document processing, work well with little data of your own. We assess what you have before recommending an approach.'
      },
      {
        q: 'How much does AI development cost?',
        a: 'It depends on the problem, the data available and how the solution integrates with your systems. After a free consultation we share a fixed, itemised quote.'
      },
      {
        q: 'Can you add AI to our existing software?',
        a: 'Yes. We can integrate AI features into your existing website, app or internal tools rather than rebuilding them.'
      }
    ],
    related: ['software-development-company', 'whatsapp-automation']
  },
  {
    slug: 'ecommerce-development-company',
    name: 'E-commerce development',
    serviceType: 'E-commerce website development',
    title: 'E-commerce Website Development Company in India | Namaste Soft',
    description:
      'Develop custom e-commerce websites with product catalogues, shopping carts, secure payments and order management with Namaste Soft, Bengaluru.',
    h1: 'E-commerce website development company',
    eyebrow: 'E-commerce development',
    intro: [
      'Sell your products online on a store you own. We build custom e-commerce websites with everything you need to take orders and run the store: catalogue, cart, checkout, online payments, order management and an admin dashboard.',
      'Your store is fast and mobile-friendly, built to be found on Google, and shaped around how you actually sell, not squeezed into a template.'
    ],
    problems: [
      { title: 'Selling only through social media', text: 'Your own store gives customers a proper catalogue, cart and checkout, on a site you control.' },
      { title: 'Orders and stock tracked by hand', text: 'Order and inventory management keeps stock accurate as orders come in.' },
      { title: 'Customers drop off at checkout', text: 'A simple checkout with UPI, cards, net banking and wallets makes paying easy.' }
    ],
    technologies: ['React.js', 'Next.js', 'PHP & Laravel', 'MySQL', 'Razorpay', 'Cashfree', 'Stripe'],
    offerings: [
      { title: 'Custom online stores', text: 'Shopping websites designed around your products, brand and customers.' },
      { title: 'Catalogue & categories', text: 'Product and category management with images, details, search and discovery.' },
      { title: 'Cart & checkout', text: 'Smooth cart and checkout with billing and shipping details.' },
      { title: 'Online payments', text: 'UPI, cards, net banking and wallets through Razorpay, Cashfree or Stripe.' },
      { title: 'Orders, stock & shipping', text: 'Order and inventory management, plus shipping and delivery integrations.' },
      { title: 'Coupons, reports & admin', text: 'Discounts and coupons, sales reports and analytics, and an admin dashboard to run it all.' }
    ],
    forWho: ['Shops and brands moving from offline to online', 'Businesses selling through social media who want their own store', 'Retailers outgrowing a basic store template', 'Wholesalers and distributors taking orders online'],
    approach: commonApproach,
    faqs: [
      {
        q: 'What does an e-commerce website include?',
        a: 'A product catalogue with categories and search, shopping cart, checkout, online payments, customer accounts, order and inventory management, discounts and coupons, sales reports, and an admin dashboard to manage everything.'
      },
      {
        q: 'Which payment methods can my store accept?',
        a: 'Through gateways such as Razorpay, Cashfree Payments and Stripe, stores can accept UPI, debit and credit cards, net banking and supported wallets. Available methods depend on the provider and your account eligibility.'
      },
      {
        q: 'Have you built e-commerce websites before?',
        a: 'Yes. For example, we built the RM Bright Tech e-commerce website (rmbrighttech.com) with React.js, PHP and MySQL, including the product catalogue, cart, checkout, customer accounts and store administration.'
      },
      {
        q: 'How much does an e-commerce website cost?',
        a: 'It depends on the number of products, custom design, payment and shipping integrations and admin features. After a free consultation we share a fixed, itemised quote.'
      }
    ],
    related: ['payment-gateway-integration', 'website-development-company']
  },
  {
    slug: 'payment-gateway-integration',
    name: 'Payment gateway integration',
    serviceType: 'Payment gateway integration',
    title: 'Payment Gateway Integration Services in India | Namaste Soft',
    description:
      'Integrate Razorpay, Cashfree, Stripe and UPI payment solutions into your websites, mobile apps and business software, with subscriptions and refunds.',
    h1: 'Payment gateway integration services',
    eyebrow: 'Online payments',
    intro: [
      'Get paid online without the headaches. We integrate secure payment gateways into your website, mobile app or business software, so customers can pay by UPI, card, net banking or wallet.',
      'We handle the parts that are easy to get wrong: verifying payment status on the server, processing webhooks reliably, and managing refunds and recurring subscriptions.'
    ],
    problems: [
      { title: 'Customers want to pay online', text: 'Accept UPI, cards, net banking and wallets on your website, app or software.' },
      { title: 'Orders confirmed without a real payment', text: 'Server-side verification and webhooks confirm an order only when payment succeeds.' },
      { title: 'Chasing renewals by hand', text: 'Subscriptions and recurring payments collect automatically.' }
    ],
    technologies: ['Razorpay', 'Cashfree Payments', 'Stripe', 'UPI', 'Webhooks', 'REST APIs'],
    offerings: [
      { title: 'Razorpay integration', text: 'Checkout, payment links, subscriptions and webhooks with Razorpay.' },
      { title: 'Cashfree Payments', text: 'Cashfree checkout integrated into your website, app or platform.' },
      { title: 'Stripe integration', text: 'Stripe payments for businesses and accounts that are eligible for it.' },
      { title: 'UPI, cards & net banking', text: 'UPI, debit and credit cards, net banking and supported wallets.' },
      { title: 'Subscriptions & recurring', text: 'Recurring billing for SaaS, memberships and subscription products.' },
      { title: 'Webhooks, verification & refunds', text: 'Server-side payment verification, webhook-based updates, refunds and transaction management.' }
    ],
    forWho: ['E-commerce stores taking online orders', 'SaaS and subscription businesses', 'Mobile apps selling services or bookings', 'Businesses moving collections from cash to online'],
    approach: commonApproach,
    faqs: [
      {
        q: 'Which payment gateways do you integrate?',
        a: 'Razorpay, Cashfree Payments and Stripe, covering UPI, debit and credit cards, net banking and supported wallets. Payment methods and features depend on the provider, your account eligibility and supported regions.'
      },
      {
        q: 'Can you set up subscriptions and recurring payments?',
        a: 'Yes. We integrate subscription and recurring payments, for example monthly plans for a SaaS product. Our Energy Data Management System project uses subscription-based activation with online payment.'
      },
      {
        q: 'How do you make sure payments are recorded correctly?',
        a: 'We verify every payment on the server and use the gateway’s webhooks to update transaction status, so an order is only confirmed when the payment has actually succeeded, even if the customer closes the page.'
      },
      {
        q: 'Can you add payments to my existing website or app?',
        a: 'Yes. We can integrate a payment gateway into your existing website, mobile app or business software without rebuilding it.'
      }
    ],
    related: ['ecommerce-development-company', 'software-development-company']
  },
  {
    slug: 'cloud-devops-services',
    name: 'Cloud, hosting & DevOps',
    serviceType: 'Cloud hosting and DevOps services',
    title: 'Cloud Hosting and DevOps Services | Namaste Soft',
    description:
      'Get cloud deployment, VPS hosting, Docker, CI/CD, server management, domain and SSL configuration services from Namaste Soft, Bengaluru.',
    h1: 'Cloud hosting & DevOps services',
    eyebrow: 'Cloud, hosting & DevOps',
    intro: [
      'Great software still needs a reliable home. We set up and manage the servers, deployments and infrastructure your applications run on, so they stay fast, secure and online.',
      'From a single VPS to Docker-based deployments with automatic CI/CD, we configure what your project actually needs and keep it maintained.'
    ],
    problems: [
      { title: 'Deployments are manual and risky', text: 'Git-based CI/CD makes releases repeatable, so a deploy is no longer a gamble.' },
      { title: 'Domains, DNS and SSL misconfigured', text: 'We set up domains, DNS, Cloudflare and SSL certificates correctly.' },
      { title: 'Servers set up once and never maintained', text: 'Ongoing server management, optimisation and updates keep applications reliable.' }
    ],
    technologies: ['Docker', 'Coolify', 'Portainer', 'Linux', 'Ubuntu', 'Hostinger VPS', 'Vercel', 'Cloudflare', 'Git-based CI/CD'],
    offerings: [
      { title: 'VPS & cloud servers', text: 'VPS and cloud server configuration, including Linux and Ubuntu server management.' },
      { title: 'Docker deployment', text: 'Containerised deployments managed with Docker, Coolify and Portainer.' },
      { title: 'CI/CD pipelines', text: 'Git-based automatic deployments so releases are repeatable and quick.' },
      { title: 'Domain, DNS & SSL', text: 'Domain and DNS setup, Cloudflare, and SSL certificates configured correctly.' },
      { title: 'Databases', text: 'Database installation, configuration and optimisation for PostgreSQL, MySQL and Redis.' },
      { title: 'Migration & maintenance', text: 'Application migration, server optimisation and ongoing maintenance.' }
    ],
    forWho: ['Businesses whose app needs a dependable server', 'Teams deploying by hand who want CI/CD', 'Companies moving to a VPS or a new host', 'Startups without an in-house DevOps engineer'],
    approach: commonApproach,
    faqs: [
      {
        q: 'Which hosting platforms do you work with?',
        a: 'VPS providers such as Hostinger VPS, Linux and Ubuntu servers, Vercel and Cloudflare, with Docker, Coolify and Portainer for deployments. We recommend a setup based on your application, traffic and budget.'
      },
      {
        q: 'Can you set up automatic deployments?',
        a: 'Yes. We set up Git-based CI/CD pipelines, so pushing code deploys it to your server in a repeatable way.'
      },
      {
        q: 'Can you migrate my existing application to a new server?',
        a: 'Yes. We handle application and database migration, domain and DNS changes and SSL, and plan the move to keep downtime to a minimum.'
      },
      {
        q: 'Do you offer ongoing server maintenance?',
        a: 'Yes. We offer server management, optimisation and updates under an agreed maintenance scope.'
      }
    ],
    related: ['software-development-company', 'website-development-company']
  }
];

export const getServicePage = (slug: string) => servicePages.find((p) => p.slug === slug);
