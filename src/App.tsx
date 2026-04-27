import { Logo } from './components/Logo/Logo';
import { Footer } from './patterns/Footer/Footer';
import { HeroBanner } from './patterns/HeroBanner/HeroBanner';
import { Masthead } from './patterns/Masthead/Masthead';
import { Collection } from './patterns/Collection/Collection';
import { ProductCard } from './patterns/ProductCard/ProductCard';
import { SplitCallout } from './patterns/SplitCallout/SplitCallout';
import heroVideo from './assets/video/hero-banner-animated.mp4';
import img1 from './assets/images/product/product-image-1.jpg';
import img1alt from './assets/images/product/product-image-1-alt.jpg';
import img2 from './assets/images/product/product-image-2.jpg';
import img2alt from './assets/images/product/product-image-2-alt.jpg';
import fabricDetail from './assets/images/marketing/fabric-detail.jpg';

const navItems = [
  { label: 'Category 1', href: '#' },
  { label: 'Category 2', href: '#' },
  { label: 'Category 3', href: '#' },
  { label: 'Category 4', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
];

const featuredProducts = [
  <ProductCard key={1} image={img1} altImage={img1alt} title="Linen Throw Pillow" description="Linen · Natural" price="$48.00" badge="New" badgeStyle="feature" swatches={[{ color: '#d4c5a9', image: img1, altImage: img1alt }, { color: '#8b7355', image: img2, altImage: img2alt }]} />,
  <ProductCard key={2} image={img2} altImage={img2alt} title="Ceramic Vase" description="Ceramic · Matte" price="$60.00" swatches={[{ color: '#e8e0d5', image: img2, altImage: img2alt }, { color: '#3e4951', image: img1, altImage: img1alt }]} />,
  <ProductCard key={3} image={img1} altImage={img1alt} title="Woven Basket" description="Seagrass · Tan" price="$72.00" badge="Sale" badgeStyle="sale" originalPrice="$96.00" swatches={[{ color: '#b8a88a', image: img1, altImage: img1alt }, { color: '#7a6a52', image: img2, altImage: img2alt }]} />,
  <ProductCard key={4} image={img2} altImage={img2alt} title="Oak Side Table" description="Oak · Light" price="$120.00" swatches={[{ color: '#c8a96e', image: img2, altImage: img2alt }, { color: '#8b6914', image: img1, altImage: img1alt }]} />,
  <ProductCard key={5} image={img1} altImage={img1alt} title="Merino Wool Blanket" description="Wool · Oatmeal" price="$145.00" badge="New" badgeStyle="feature" swatches={[{ color: '#e8ddd0', image: img1, altImage: img1alt }, { color: '#c4a882', image: img2, altImage: img2alt }]} />,
  <ProductCard key={6} image={img2} altImage={img2alt} title="Rattan Floor Lamp" description="Rattan · Natural" price="$210.00" swatches={[{ color: '#d4b87a', image: img2, altImage: img2alt }, { color: '#5e4e36', image: img1, altImage: img1alt }]} />,
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

function App() {
  return (
    <>
      <Masthead
        logo={<Logo variant="full-logo" />}
        navItems={navItems}
      />
      <HeroBanner
        headline="Built for the Distance"
        eyebrow="New Season"
        subheadline="Performance apparel engineered for riders who go further."
        video={heroVideo}
        showEyebrow
        showSubheadline
        showCta
        showSecondaryCta
        ctaLabel="Shop Now"
        ctaSecondaryLabel="Learn More"
      />
      <Collection
        layout="scroll"
        cardSize="sm"
        title="Featured Products"
        ctaLabel="Shop All"
        ctaVariant="primary"
        ctaHref="#"
        theme="light"
      >
        {featuredProducts}
      </Collection>
      <SplitCallout
        alignment="left"
        image={fabricDetail}
        imageAlt="Close-up of performance fabric texture"
        eyebrow="Engineered for Speed"
        headline="The Jersey That Goes the Distance"
        body="Wind-tunnel tested fabrics and an aerodynamic fit designed for riders who push every limit."
        primaryButtonLabel="Shop Jerseys"
        secondaryButtonLabel="Learn More"
        showEyebrow
        theme="light"
      />
      <SplitCallout
        alignment="right"
        image={fabricDetail}
        imageAlt="Close-up of performance fabric texture"
        eyebrow="New Arrivals"
        headline="Color Meets Performance"
        body="Bold seasonal colorways built on the same race-proven construction. Stand out on every climb."
        primaryButtonLabel="Shop New Arrivals"
        secondaryButtonLabel="View Lookbook"
        showEyebrow
        theme="dark"
      />
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
    </>
  );
}

export default App;
