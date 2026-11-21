/**
 * Company profile — the single source of truth taken from NAMASTESOFT_PROFILE.docx.
 * Drives the /about page, structured data (JSON-LD) and the AI-readable /llms.txt and /llms-full.txt.
 * Keep it factual: only services, technologies and claims the company actually stands behind.
 */
export const profile = {
  slogan: 'Turning Ideas Into Powerful Digital Solutions.',
  category: 'Software Development & Digital Solutions',

  overview: [
    'Namaste Soft (Namastesoft) is a software development and digital solutions company based in Bengaluru, India, focused on helping businesses transform their ideas into powerful, reliable and scalable digital products.',
    'We specialise in modern websites, custom web applications, mobile applications, enterprise software, AI-powered solutions and business automation systems.',
    'Our goal is to provide technology-driven solutions that simplify business operations, improve productivity, enhance customer experiences and support long-term business growth.',
    'From initial planning and UI/UX design to development, deployment and ongoing maintenance, we provide end-to-end software development services tailored to each client’s requirements, for startups, small and medium-sized businesses and enterprises.'
  ],

  vision:
    'To become a trusted technology partner for businesses by delivering innovative, reliable and scalable digital solutions that create meaningful business value.',

  mission: [
    'Deliver high-quality software solutions that solve real business challenges.',
    'Help businesses improve efficiency through technology and automation.',
    'Build scalable and secure applications using modern technologies.',
    'Provide customised solutions based on individual business requirements.',
    'Establish long-term client relationships through transparency, reliability and continuous support.'
  ],

  /** Every capability from the profile, grouped by service. `page` links to the matching landing page. */
  capabilities: [
    {
      name: 'Website Development',
      page: '/website-development-company',
      items: [
        'Corporate and business websites',
        'Company profile and portfolio websites',
        'Landing pages and promotional websites',
        'E-commerce and online shopping websites',
        'Real estate and property websites',
        'Educational and institutional websites',
        'SEO-friendly and mobile-responsive websites',
        'Website redesign and performance optimisation'
      ]
    },
    {
      name: 'Custom Web Application Development',
      page: '/software-development-company',
      items: [
        'SaaS application development',
        'Customer and employee management portals',
        'CRM (Customer Relationship Management) systems',
        'ERP (Enterprise Resource Planning) solutions',
        'Admin dashboards and reporting systems',
        'Inventory and stock management applications',
        'Billing and sales management systems',
        'Workflow and business process management',
        'Multi-user and role-based management platforms'
      ]
    },
    {
      name: 'Mobile Application Development',
      page: '/mobile-app-development-company',
      items: [
        'Android application development',
        'iOS application development',
        'Cross-platform mobile application development',
        'Business and enterprise mobile applications',
        'Customer-facing mobile applications',
        'API and backend integrations',
        'User authentication and account management',
        'Push notifications and real-time updates',
        'Payment gateway integration',
        'Offline and online data sync',
        'Mobile application deployment and maintenance'
      ]
    },
    {
      name: 'Custom Software Development',
      page: '/software-development-company',
      items: [
        'Point of Sale (POS) and billing systems',
        'Retail and supermarket management systems',
        'Inventory and warehouse management',
        'Purchase and sales management',
        'Hospital and healthcare management systems',
        'School and education management systems',
        'Employee and HR management systems',
        'Appointment and booking management systems',
        'Customer relationship management',
        'Business analytics and reporting systems'
      ]
    },
    {
      name: 'AI & Intelligent Solutions',
      page: '/ai-development-company',
      items: [
        'AI-powered application development',
        'OpenAI API integration',
        'Intelligent chatbots and virtual assistants',
        'AI-based customer support systems',
        'AI-powered document and data processing',
        'Natural language processing integrations',
        'AI-assisted business workflows',
        'Intelligent search and information retrieval'
      ]
    },
    {
      name: 'Business Process Automation',
      page: '/whatsapp-automation',
      items: [
        'WhatsApp Business API integration',
        'WhatsApp messaging and notification automation',
        'Instagram API integration',
        'Facebook Messenger integration',
        'Automated email workflows',
        'Lead capture and lead management automation',
        'CRM and third-party application integrations',
        'n8n workflow automation',
        'API-based business process automation'
      ]
    },
    {
      name: 'Payment Gateway Integration',
      page: '/payment-gateway-integration',
      items: [
        'Razorpay integration',
        'Cashfree Payments integration',
        'Stripe integration',
        'UPI payment integration',
        'Debit and credit card payments',
        'Net banking and supported wallet payments',
        'Subscription and recurring payment integration',
        'Payment status verification',
        'Webhook-based transaction updates',
        'Refund and transaction management'
      ]
    },
    {
      name: 'E-commerce Development',
      page: '/ecommerce-development-company',
      items: [
        'Custom online shopping websites',
        'Product and category management',
        'Shopping cart and checkout systems',
        'Order and inventory management',
        'Customer account management',
        'Online payment integration',
        'Shipping and delivery integrations',
        'Discount and coupon management',
        'Sales reports and analytics',
        'Admin management dashboards'
      ]
    },
    {
      name: 'Cloud, Hosting & DevOps Solutions',
      page: '/cloud-devops-services',
      items: [
        'VPS and cloud server configuration',
        'Linux and Ubuntu server management',
        'Docker-based application deployment',
        'Application hosting and management',
        'Database installation and configuration',
        'CI/CD pipeline setup',
        'Domain and DNS configuration',
        'SSL certificate configuration',
        'Server optimisation and maintenance',
        'Application deployment and migration'
      ]
    }
  ],

  technologies: [
    { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
    { group: 'Backend & languages', items: ['Go (Golang)', 'Python', 'Node.js', 'NestJS', 'Express.js', 'PHP', 'Laravel', 'CodeIgniter'] },
    { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Room'] },
    { group: 'ORM & database tools', items: ['Prisma', 'Drizzle ORM'] },
    {
      group: 'Mobile',
      items: ['Kotlin', 'Java', 'Flutter', 'Dart', 'Jetpack Compose', 'Android SDK', 'XML layouts', 'Google Maps', 'Firebase Cloud Messaging', 'Push notifications', 'Bluetooth', 'Device sensors']
    },
    { group: 'AI & automation', items: ['OpenAI API', 'Python-based AI integrations', 'n8n', 'WhatsApp Business API', 'Instagram API', 'Facebook Messenger API'] },
    { group: 'Cloud & DevOps', items: ['Docker', 'Coolify', 'Portainer', 'Linux', 'Ubuntu', 'Hostinger VPS', 'Vercel', 'Cloudflare', 'Git-based deployment'] },
    {
      group: 'Other capabilities',
      items: ['REST API development', 'Third-party API integrations', 'Payment gateway integrations', 'Excel VBA automation', 'Database design & optimisation', 'Authentication & authorisation', 'Role-based access control', 'Security & performance optimisation']
    }
  ],

  industries: [
    { name: 'Retail & supermarket', items: ['POS and billing solutions', 'Inventory and stock management', 'Purchase and sales tracking', 'Business reporting and analytics'] },
    { name: 'Healthcare', items: ['Hospital management systems', 'Patient management', 'Appointment scheduling', 'Billing and administrative systems'] },
    { name: 'Education', items: ['Student management systems', 'Online assessment platforms', 'Dynamic forms and surveys', 'Reporting and analytics dashboards'] },
    { name: 'Real estate', items: ['Property listing websites', 'Lead management systems', 'Customer enquiry management', 'Property booking and management applications'] },
    { name: 'E-commerce & retail', items: ['Online shopping platforms', 'Product and order management', 'Payment integration', 'Customer management'] },
    { name: 'Enterprise & business services', items: ['CRM and ERP applications', 'Employee management', 'Workflow automation', 'Custom reporting and dashboards'] }
  ],

  process: [
    { title: 'Requirement analysis', text: 'We understand your business objectives, requirements, challenges and expected outcomes.' },
    { title: 'Planning & architecture', text: 'We prepare the project scope, technical architecture, database structure, roadmap and timelines.' },
    { title: 'UI/UX design', text: 'We create intuitive, user-friendly interfaces that work consistently across devices.' },
    { title: 'Development', text: 'Frontend, backend, database, APIs, integrations and all the business functionality you need.' },
    { title: 'Testing & QA', text: 'Functional, integration, performance and compatibility testing before anything goes live.' },
    { title: 'Deployment & launch', text: 'We deploy to production and configure the infrastructure your application needs.' },
    { title: 'Maintenance & support', text: 'Ongoing support, bug fixes, updates, monitoring and improvements within the agreed scope.' }
  ],

  whyChoose: [
    { title: 'End-to-end development', text: 'Complete development services, from initial planning to deployment and maintenance.' },
    { title: 'Customised solutions', text: 'Every business is different; we build around your specific operational needs.' },
    { title: 'Modern technologies', text: 'Modern frameworks, programming languages and infrastructure.' },
    { title: 'Scalable architecture', text: 'Applications designed to evolve as your business requirements grow.' },
    { title: 'Business-focused approach', text: 'We understand business workflows and build for practical value.' },
    { title: 'Transparent communication', text: 'Clear communication throughout the project lifecycle.' },
    { title: 'Long-term technical support', text: 'Reliable support and continuous improvements after launch.' }
  ],

  engagementModels: [
    { title: 'Fixed-cost development', text: 'For projects with clearly defined requirements, scope, deliverables and timelines.' },
    { title: 'Dedicated development', text: 'Development resources dedicated to ongoing projects and long-term requirements.' },
    { title: 'Hourly / task-based', text: 'For enhancements, bug fixes, integrations and smaller development requirements.' },
    { title: 'Maintenance & support', text: 'Ongoing maintenance, technical support, server management and updates under an agreed scope.' }
  ],

  commitments: [
    'Understanding client requirements before development.',
    'Following structured development practices.',
    'Building maintainable and scalable applications.',
    'Prioritising application security and reliability.',
    'Maintaining transparent project communication.',
    'Delivering according to agreed project milestones.',
    'Providing support based on the agreed service terms.'
  ]
};

/** Flat list of every technology, used for schema.org `knowsAbout`. */
export const allTechnologies = profile.technologies.flatMap((t) => t.items);
