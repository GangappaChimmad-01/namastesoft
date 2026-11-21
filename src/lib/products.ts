/**
 * Our own software products. Drives the Products nav menu, /products, each /products/[id] page,
 * the footer, the sitemap and /llms.txt. To add a product, append an entry here — nothing else needs to change.
 * Keep the copy factual: only features the product actually ships (checked against the product's
 * own code and live site). Never add prices, ratings or reviews that aren't real.
 */
export type Product = {
  id: string; // URL slug: /products/<id>
  name: string;
  tagline: string; // short line for menus and cards
  category: string; // schema.org applicationCategory
  title: string; // <title> for /products/<id>
  metaDescription: string; // meta description for /products/<id>
  description: string; // short summary for cards and /products
  overview: string[]; // longer intro on the product page
  url: string; // the product's own website
  audience: string[];
  features: { title: string; text: string }[];
  platforms: string[];
  operatingSystem: string;
  faqs: { q: string; a: string }[];
  services: string[]; // related service landing-page slugs
  demoMessage: string; // prefilled WhatsApp message for the demo / enquiry CTA
  /** Optional screenshots in /static (WebP preferred). Width/height prevent layout shift. */
  screenshots?: { src: string; alt: string; width: number; height: number }[];
};

export const products: Product[] = [
  {
    id: 'namastebill',
    name: 'NamasteBill',
    tagline: 'POS billing for supermarkets & retail shops',
    category: 'BusinessApplication',
    title: 'NamasteBill: POS Billing Software for Supermarkets | Namaste Soft',
    metaDescription:
      'NamasteBill POS billing software for supermarkets and retail shops: barcode and voice billing, GST receipts, stock, customer credit and reports. Works offline.',
    description:
      'Shop billing that keeps working when the internet doesn’t. Barcode and voice billing, GST-ready receipts, stock, customer credit and reports — in the browser, on phones and as a Windows app.',
    overview: [
      'NamasteBill is our POS billing and retail management software for supermarkets and retail shops. It covers billing, stock, purchases, customer credit and daily reports in one system.',
      'It runs in a web browser, on phones and tablets, and as a Windows desktop app that keeps billing when the internet is down. Bills are stored on the device and synced to the cloud when the connection returns.',
      'It is built for supermarkets, kirana stores, bakeries, pharmacies, textile shops, hardware stores, restaurants and other retailers.'
    ],
    url: 'https://mart.namastesoft.com/',
    audience: ['Supermarkets', 'Kirana & provision stores', 'Bakeries & pharmacies', 'Textile & hardware stores', 'Restaurants & other retailers'],
    features: [
      { title: 'Works offline', text: 'The Windows app keeps billing without internet, with offline sign-in, silent printing and background sync.' },
      { title: 'Barcode & voice billing', text: 'Scan, search or speak items — voice billing in English and Kannada. Cash, UPI and credit payments.' },
      { title: 'GST-ready receipts', text: 'GST slab per item, thermal (80/72/58 mm) or A4/A5 printing, and barcode label printing.' },
      { title: 'Stock & purchases', text: 'Low-stock alerts, fast/slow/dead stock views, reorder suggestions and supplier purchases.' },
      { title: 'Customer credit', text: 'A khata per customer tied to their phone number, with dues collection, orders and returns.' },
      { title: 'Reports & profit', text: 'Daily sales and collections, profit & loss, discounts and coupons, staff roles and backups.' }
    ],
    platforms: ['Web browser', 'Phone & tablet', 'Windows app'],
    operatingSystem: 'Web, Android, iOS, Windows',
    faqs: [
      {
        q: 'Does NamasteBill work without internet?',
        a: 'Yes. The Windows app stores bills on the device and keeps billing while the internet is down, with offline sign-in and silent printing. Data syncs to the cloud in the background when the connection returns.'
      },
      {
        q: 'Is NamasteBill GST-ready?',
        a: 'Yes. Each product carries its GST slab, and receipts are GST-ready. You can print on thermal (80, 72 or 58 mm) or A4/A5 printers.'
      },
      {
        q: 'Can I bill by voice?',
        a: 'Yes. Along with barcode scanning and product search, NamasteBill supports voice billing in English and Kannada.'
      },
      {
        q: 'Can my staff use it with different permissions?',
        a: 'Yes. NamasteBill has Admin, Manager and Cashier roles, so each person sees only what they need.'
      },
      {
        q: 'Which shops is NamasteBill for?',
        a: 'Supermarkets, kirana and provision stores, bakeries, pharmacies, textile shops, hardware stores, restaurants and other retailers.'
      },
      {
        q: 'How do I see a demo or get a price?',
        a: 'Message us on WhatsApp or use the contact form and we will arrange a demo and share pricing for your shop. You can also visit mart.namastesoft.com.'
      }
    ],
    services: ['software-development-company', 'mobile-app-development-company'],
    demoMessage: 'Hi! I would like a demo of NamasteBill POS billing software for my shop.'
  },
  {
    id: 'dbhub',
    name: 'DBHub',
    tagline: 'One browser IDE for every database',
    category: 'DeveloperApplication',
    title: 'DBHub: Browser-Based Database IDE & Manager | Namaste Soft',
    metaDescription:
      'DBHub is a browser-based database IDE: connect to PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, Oracle and Redis to browse, query, edit and manage your data.',
    description:
      'A database workspace for developers: connect your database, browse schemas, run queries, edit data and change table structure — all from one clean interface in the browser.',
    overview: [
      'DBHub is a browser-based database IDE. Connect to PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, Oracle and Redis, then browse schemas, run and explain queries, edit data and design tables, all from one interface.',
      'There is nothing to install on your machine: DBHub runs in the browser, so you can work with your databases from any computer.'
    ],
    url: 'https://db.namastesoft.com/',
    audience: ['Developers & engineering teams', 'Freelancers managing client databases', 'Startups without a dedicated DBA'],
    features: [
      { title: 'Many databases, one place', text: 'PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, Oracle and Redis.' },
      { title: 'Browse your data', text: 'Explore schemas and tables and view rows in a clear, fast data grid.' },
      { title: 'Query & explain', text: 'Write and run SQL, and explain queries to see how the database executes them.' },
      { title: 'Edit data', text: 'Insert, update and delete records directly — no scripts needed for quick fixes.' },
      { title: 'Design tables', text: 'Change table structure: add, rename or modify columns from the interface.' },
      { title: 'Import, export & compare', text: 'Import and export data, compare schemas, and ask an optional AI assistant.' }
    ],
    platforms: ['Web browser'],
    operatingSystem: 'Web',
    faqs: [
      {
        q: 'Which databases does DBHub support?',
        a: 'PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, Oracle and Redis.'
      },
      {
        q: 'Do I need to install DBHub?',
        a: 'No. DBHub runs in your web browser at db.namastesoft.com, so there is no desktop software to install.'
      },
      {
        q: 'Can I edit data and change table structure?',
        a: 'Yes. You can insert, update and delete rows, and add, rename or modify columns from the interface.'
      },
      {
        q: 'Can I import and export data?',
        a: 'Yes. DBHub can import and export data, and also compare schemas between databases.'
      }
    ],
    services: ['software-development-company', 'cloud-devops-services'],
    demoMessage: 'Hi! I would like to know more about DBHub.'
  }
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
