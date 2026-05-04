import { Logo } from '../components/Logo/Logo';
import { Masthead } from '../patterns/Masthead/Masthead';
import { SplitCallout } from '../patterns/SplitCallout/SplitCallout';
import { Collection } from '../patterns/Collection/Collection';
import { ProductCard } from '../patterns/ProductCard/ProductCard';
import { Footer } from '../patterns/Footer/Footer';
import { PDPGallery } from '../components/PDPGallery/PDPGallery';
import { BuyGrid } from '../components/BuyGrid/BuyGrid';

import img1 from '../assets/images/product/pdp/product-image-1.jpg';
import img2 from '../assets/images/product/pdp/product-image-2.jpg';
import img3 from '../assets/images/product/pdp/product-image-3.jpg';
import img4 from '../assets/images/product/pdp/product-image-4.jpg';
import img5 from '../assets/images/product/pdp/product-image-5.jpg';
import img6 from '../assets/images/product/pdp/product-image-6.jpg';
import img7 from '../assets/images/product/pdp/product-image-7.jpg';
import featureImg1 from '../assets/images/product/pdp/product-feature-image-1.jpg';
import featureImg2 from '../assets/images/product/pdp/product-feature-image-2.jpg';

import relatedImg1 from '../assets/images/product/product-image-1.jpg';
import relatedImg1alt from '../assets/images/product/product-image-1-alt.jpg';
import relatedImg2 from '../assets/images/product/product-image-2.jpg';
import relatedImg2alt from '../assets/images/product/product-image-2-alt.jpg';

import styles from './PDPPage.module.css';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

const productColors = [
  { value: 'port', label: 'Port', color: '#4a1a22' },
  { value: 'blush', label: 'Blush', color: '#d4a0a8' },
  { value: 'navy', label: 'Navy', color: '#1e2d5a' },
  { value: 'forest', label: 'Forest', color: '#1a3a28' },
];

const productSizes = [
  { value: 'xs', label: 'XS' },
  { value: 'sm', label: 'SM' },
  { value: 'md', label: 'MD' },
  { value: 'lg', label: 'LG' },
  { value: 'xl', label: 'XL' },
];

const productAccordions = [
  {
    header: 'Materials',
    content:
      "Our Men’s Cargo Bibshorts are crafted from premium recycled compression fabric. Four-way stretch wicks moisture efficiently while maintaining shape over long rides.",
  },
  {
    header: 'Shipping & Returns',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    defaultOpen: true,
  },
  {
    header: 'Care Instructions',
    content:
      'Machine wash cold with similar colors. Do not bleach. Tumble dry low. Do not iron. Do not dry clean.',
  },
];

const relatedProducts = [
  <ProductCard href="/pdp" key={1} image={relatedImg1} altImage={relatedImg1alt} title="Men's Aero Jersey" description="Recycled · Port" price="$189.00" badge="New" badgeStyle="feature" swatches={[{ color: '#4a1a22', image: relatedImg1, altImage: relatedImg1alt }, { color: '#1e2d5a', image: relatedImg2, altImage: relatedImg2alt }]} />,
  <ProductCard href="/pdp" key={2} image={relatedImg2} altImage={relatedImg2alt} title="Men's Base Layer" description="Merino · Navy" price="$120.00" swatches={[{ color: '#1e2d5a', image: relatedImg2, altImage: relatedImg2alt }, { color: '#1a3a28', image: relatedImg1, altImage: relatedImg1alt }]} />,
  <ProductCard href="/pdp" key={3} image={relatedImg1} altImage={relatedImg1alt} title="Cycling Cap" description="Recycled · Black" price="$42.00" swatches={[{ color: '#181b1d', image: relatedImg1, altImage: relatedImg1alt }, { color: '#4a1a22', image: relatedImg2, altImage: relatedImg2alt }]} />,
  <ProductCard href="/pdp" key={4} image={relatedImg2} altImage={relatedImg2alt} title="Arm Warmers" description="Thermal · Blush" price="$58.00" swatches={[{ color: '#d4a0a8', image: relatedImg2, altImage: relatedImg2alt }, { color: '#181b1d', image: relatedImg1, altImage: relatedImg1alt }]} />,
  <ProductCard href="/pdp" key={5} image={relatedImg1} altImage={relatedImg1alt} title="Bib Tights" description="Thermal · Forest" price="$265.00" badge="New" badgeStyle="feature" swatches={[{ color: '#1a3a28', image: relatedImg1, altImage: relatedImg1alt }, { color: '#1e2d5a', image: relatedImg2, altImage: relatedImg2alt }]} />,
];

const navItems = [
  { label: 'Apparel', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Sale', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
];

const footerColumns = [
  {
    heading: 'Support',
    links: [
      { label: 'My Account', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Return Policy', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Dealer Locator', href: '#' },
      { label: 'Partnerships', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Rewards', href: '#' },
      { label: 'Wholesale Login', href: '#' },
      { label: 'Pro Program', href: '#' },
      { label: 'Partnerships', href: '#' },
    ],
  },
];

export function PDPPage() {
  return (
    <div data-theme="light">
      <Masthead logo={<Logo variant="full-logo" />} navItems={navItems} />

      <section className={styles.productSection}>
        <div className={styles.productWrap}>
          <PDPGallery images={galleryImages} className={styles.gallery} />
          <BuyGrid
            breadcrumbs={[
              { label: 'Shop', href: '#' },
              { label: 'Mens', href: '#' },
              { label: 'Bibs & Shorts' },
            ]}
            title="Men's Cargo Bibshorts"
            description="Luxurious cargo bib shorts with four pockets, recycled compression fabric, and an endurance chamois for long rides."
            price="$234.00"
            rating={4.5}
            reviewCount={24}
            colors={productColors}
            sizes={productSizes}
            accordions={productAccordions}
            className={styles.buyGrid}
          />
        </div>
      </section>

      <SplitCallout
        alignment="right"
        image={featureImg1}
        imageAlt="Cyclist wearing the cargo bibshorts showing the pocket detail"
        eyebrow="Engineered for Long Rides"
        headline="Four Pockets, Zero Compromise"
        body="Deep cargo pockets hold everything you need for the big day — nutrition, tools, a rain jacket — without shifting during hard efforts."
        primaryButtonLabel="Shop Bibshorts"
        secondaryButtonLabel="Learn More"
        showEyebrow
        theme="light"
        background="secondary"
      />

      <SplitCallout
        alignment="left"
        background="secondary"
        image={featureImg2}
        imageAlt="Close-up of the recycled compression fabric and chamois"
        eyebrow="Sustainable Construction"
        headline="Performance Built to Last"
        body="Recycled compression fabric and an endurance chamois engineered for rides that go past the century mark."
        primaryButtonLabel="View Technology"
        secondaryButtonLabel="Size Guide"
        showEyebrow
        theme="light"
      />

      <Collection
        layout="scroll"
        cardSize="sm"
        title="Complete the Kit"
        ctaLabel="Shop All"
        ctaVariant="primary"
        ctaHref="#"
        theme="light"
      >
        {relatedProducts}
      </Collection>

      <Footer
        logo={<Logo variant="full-logo" />}
        columns={footerColumns}
        socialLinks={[
          { name: 'Instagram', href: '#' },
          { name: 'Facebook', href: '#' },
          { name: 'X Twitter', href: '#' },
          { name: 'Youtube', href: '#' },
        ]}
        legalText="©2025 The ZaneRay Group"
        legalLinks={[
          { label: 'Terms of Service', href: '#' },
          { label: 'Privacy Policy', href: '#' },
          { label: 'Accessibility', href: '#' },
        ]}
      />
    </div>
  );
}
