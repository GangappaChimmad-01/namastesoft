/**
 * Our own software products. Drives the Products nav menu, the /products page, the footer and the sitemap.
 * To add a product, append an entry here — nothing else needs to change.
 * Keep the copy factual: only features the product actually ships.
 */
export type Product = {
  id: string; // anchor on /products, e.g. /products#namastebill
  name: string;
  tagline: string; // short line for menus and cards
  category: string; // schema.org applicationCategory
  description: string;
  url: string; // the product's own website
  audience: string[];
  features: { title: string; text: string }[];
  platforms: string[];
  operatingSystem: string;
};

export const products: Product[] = [
  {
    id: 'namastebill',
    name: 'NamasteBill',
    tagline: 'POS billing for supermarkets & kirana stores',
    category: 'BusinessApplication',
    description:
      'Shop billing that keeps working when the internet doesn’t. Barcode and voice billing, GST-ready receipts, stock, customer credit and reports — in the browser, on phones and as a Windows app.',
    url: 'https://mart.namastesoft.com/',
    audience: ['Supermarkets', 'Kirana & provision stores'],
    features: [
      { title: 'Works offline', text: 'Bills are saved on the device and synced to the cloud when the connection returns.' },
      { title: 'Barcode & voice billing', text: 'Scan, search or speak items — voice billing in English and Kannada.' },
      { title: 'GST-ready receipts', text: 'GST slab per item, thermal (80/72/58 mm) or A4/A5 printing.' },
      { title: 'Stock & purchases', text: 'Low-stock alerts, fast/slow/dead stock views, reorder suggestions and supplier purchases.' },
      { title: 'Customer credit', text: 'A khata per customer tied to their phone number, with dues collection.' },
      { title: 'Reports & profit', text: 'Daily sales, margin, expenses and profit & loss, plus staff roles and backups.' }
    ],
    platforms: ['Web browser', 'Phone & tablet', 'Windows app'],
    operatingSystem: 'Web, Android, iOS, Windows'
  },
  {
    id: 'dbhub',
    name: 'DBHub',
    tagline: 'Connect, browse & edit your databases',
    category: 'DeveloperApplication',
    description:
      'A database workspace for developers: connect your database, see the data, change it and alter table structure — all from one clean interface.',
    url: 'https://db.namastesoft.com/',
    audience: ['Developers & engineering teams', 'Freelancers managing client databases', 'Startups without a dedicated DBA'],
    features: [
      { title: 'Connect your database', text: 'Add your database connection and start working with it in seconds.' },
      { title: 'Browse your data', text: 'Explore tables and view rows in a clear, readable grid.' },
      { title: 'Edit data', text: 'Insert, update and delete records directly — no scripts needed for quick fixes.' },
      { title: 'Alter tables', text: 'Change table structure: add, rename or modify columns from the interface.' }
    ],
    platforms: ['Web browser'],
    operatingSystem: 'Web'
  }
];
