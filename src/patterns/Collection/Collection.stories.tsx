import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collection } from './Collection';
import { ProductCard } from '../ProductCard/ProductCard';
import { BlogCard } from '../BlogCard/BlogCard';
import { CollectionCard } from '../CollectionCard/CollectionCard';

import mkt1 from '../../assets/images/marketing/fabric-detail.jpg';
import mkt2 from '../../assets/images/marketing/hero-banner.png';

import img1 from '../../assets/images/product/product-image-1.jpg';
import img1alt from '../../assets/images/product/product-image-1-alt.jpg';
import img2 from '../../assets/images/product/product-image-2.jpg';
import img2alt from '../../assets/images/product/product-image-2-alt.jpg';
import blog1 from '../../assets/images/blog/lifestyle-1.jpg';  
import blog2 from '../../assets/images/blog/lifestyle-2.jpg';
import blog3 from '../../assets/images/blog/lifestyle-3.jpg';  
import blog4 from '../../assets/images/blog/lifestyle-4.jpg';  

const meta: Meta<typeof Collection> = {
  title: 'Patterns/Collection',
  component: Collection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    layout: { control: 'radio', options: ['scroll', 'grid'] },
    cardSize: { control: 'radio', options: ['sm', 'lg'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Collection>;

const productCards = [
  <ProductCard
    key={1}
    image={img1} altImage={img1alt}
    title="Linen Throw Pillow"
    description="Linen · Natural"
    price="$48.00"
    badge="New"
    badgeStyle="feature"
    swatches={[
      { color: '#d4c5a9', image: img1, altImage: img1alt },
      { color: '#8b7355', image: img2, altImage: img2alt },
      { color: '#c4b8a0', image: img1, altImage: img1alt },
    ]}
  />,
  <ProductCard
    key={2}
    image={img2} altImage={img2alt}
    title="Ceramic Vase"
    description="Ceramic · Matte"
    price="$60.00"
    swatches={[
      { color: '#e8e0d5', image: img2, altImage: img2alt },
      { color: '#3e4951', image: img1, altImage: img1alt },
    ]}
  />,
  <ProductCard
    key={3}
    image={img1} altImage={img1alt}
    title="Woven Basket"
    description="Seagrass · Tan"
    price="$72.00"
    badge="Sale"
    badgeStyle="sale"
    originalPrice="$96.00"
    swatches={[
      { color: '#b8a88a', image: img1, altImage: img1alt },
      { color: '#7a6a52', image: img2, altImage: img2alt },
    ]}
  />,
  <ProductCard
    key={4}
    image={img2} altImage={img2alt}
    title="Oak Side Table"
    description="Oak · Light"
    price="$120.00"
    swatches={[
      { color: '#c8a96e', image: img2, altImage: img2alt },
      { color: '#8b6914', image: img1, altImage: img1alt },
      { color: '#d4b896', image: img2, altImage: img2alt },
    ]}
  />,
  <ProductCard
    key={5}
    image={img1} altImage={img1alt}
    title="Merino Wool Blanket"
    description="Wool · Oatmeal"
    price="$145.00"
    badge="New"
    badgeStyle="feature"
    swatches={[
      { color: '#e8ddd0', image: img1, altImage: img1alt },
      { color: '#c4a882', image: img2, altImage: img2alt },
      { color: '#181b1d', image: img1, altImage: img1alt },
    ]}
  />,
  <ProductCard
    key={6}
    image={img2} altImage={img2alt}
    title="Rattan Floor Lamp"
    description="Rattan · Natural"
    price="$210.00"
    swatches={[
      { color: '#d4b87a', image: img2, altImage: img2alt },
      { color: '#5e4e36', image: img1, altImage: img1alt },
    ]}
  />,
  <ProductCard
    key={7}
    image={img1} altImage={img1alt}
    title="Linen Duvet Cover"
    description="Linen · Stone"
    price="$165.00"
    badge="Sale"
    badgeStyle="sale"
    originalPrice="$220.00"
    swatches={[
      { color: '#c8bfb0', image: img1, altImage: img1alt },
      { color: '#7a6e62', image: img2, altImage: img2alt },
      { color: '#3e3530', image: img1, altImage: img1alt },
    ]}
  />,
  <ProductCard
    key={8}
    image={img2} altImage={img2alt}
    title="Marble Tray"
    description="Marble · White"
    price="$85.00"
    swatches={[
      { color: '#f0ede8', image: img2, altImage: img2alt },
      { color: '#2a2a2a', image: img1, altImage: img1alt },
    ]}
  />,
];


const collectionCards = [
  <CollectionCard key={1} image={mkt1} title="Merino Base Layers" description="Temperature regulation from the inside out. Worn next to skin, all season." linkLabel="Shop the collection" href="#" />,
  <CollectionCard key={2} image={mkt2} title="Wind & Rain Shells" description="Packable protection built for unpredictable conditions on the road." linkLabel="Shop the collection" href="#" />,
  <CollectionCard key={3} image={mkt1} title="Bib Shorts" description="Long-distance comfort engineered for hours in the saddle." linkLabel="Shop the collection" href="#" />,
  <CollectionCard key={4} image={mkt2} title="Insulated Midlayers" description="Warmth without bulk. Designed to layer under a shell or wear alone." linkLabel="Shop the collection" href="#" />,
  <CollectionCard key={5} image={mkt1} title="Cargo Bibs" description="Storage where you need it. Built for bikepacking and loaded touring." linkLabel="Shop the collection" href="#" />,
  <CollectionCard key={6} image={mkt2} title="Helmets & Accessories" description="Head-to-toe finishing pieces for every condition and terrain." linkLabel="Shop the collection" href="#" />,
];


const blogCards = [
  <BlogCard
    key={1}
    image={blog1}
    title="Crossing the Divide: 2,700 Miles on the Great Divide Route"
    excerpt="What it takes to ride the longest off-pavement bikepacking route in North America — gear, mindset, and lessons learned."
    date="April 12, 2025"
    categories={['Bikepacking']}
    href="#"
  />,
  <BlogCard
    key={2}
    image={blog2}
    title="Inside the Peloton: How Amateur Racers Prepare for a Stage Race"
    excerpt="From interval training to race-day nutrition, we follow three riders through their twelve-week build to a multi-day event."
    date="March 28, 2025"
    categories={['Racing']}
    href="#"
  />,
  <BlogCard
    key={3}
    image={blog3}
    title="Ultralight Packing for Loaded Tours: What We Actually Use"
    excerpt="A field-tested breakdown of what stays in the bags and what gets left at home after thousands of kilometers of touring."
    date="March 10, 2025"
    categories={['Bikepacking']}
    href="#"
  />,
  <BlogCard
    key={4}
    image={blog4}
    title="Racing in the Rain: Wet Weather Strategy for Road and Gravel"
    excerpt="Traction, braking, visibility, and the mental game — how to ride fast when conditions turn against you."
    date="February 20, 2025"
    categories={['Racing']}
    href="#"
  />,
  <BlogCard
    key={5}
    image={blog1}
    title="The Overnight Ride: Planning Your First Bikepacking Trip"
    excerpt="You don't need months of prep or a fully loaded rig. Here's how to start with a single night out and build from there."
    date="February 5, 2025"
    categories={['Bikepacking']}
    href="#"
  />,
  <BlogCard
    key={6}
    image={blog2}
    title="Spring Classics: What the Cobbles Teach You About Bike Fit"
    excerpt="Riding harsh terrain exposes what your setup gets wrong. A pro fitter explains the adjustments that matter most."
    date="January 22, 2025"
    categories={['Racing']}
    href="#"
  />,
];

export const Default: Story = {
  name: 'Scroll — Product Cards',
  render: () => (
    <Collection layout="scroll" cardSize="sm" title="Featured Products"  ctaLabel="Shop All" ctaVariant="primary" ctaHref="#">
      {productCards}
    </Collection>
  ),
};

export const GridSmall: Story = {
  name: 'Grid — Product Cards',
  render: () => (
    <Collection layout="grid" cardSize="sm" title="Featured Products"  ctaLabel="Shop All" ctaVariant="primary" ctaHref="#">
      {productCards}
    </Collection>
  ),
};


export const ScrollCollection: Story = {
  name: 'Scroll — Collection Cards',
  render: () => (
    <Collection layout="scroll" cardSize="lg">
      {collectionCards}
    </Collection>
  ),
};

export const GridCollection: Story = {
  name: 'Grid — Collection Cards',
  render: () => (
    <Collection layout="grid" cardSize="lg">
      {collectionCards}
    </Collection>
  ),
};

export const ScrollLarge: Story = {
  name: 'Scroll — Blog Cards',
  render: () => (
    <Collection layout="scroll" title="Dispatches from the Field" description="Read stories from our ambassadors from life on the road. Updated regularly by riders like you" cardSize="lg" ctaLabel="Read More" ctaHref="#">
      {[...blogCards, ...blogCards]}
    </Collection>
  ),
};

export const GridLarge: Story = {
  name: 'Grid — Blog Cards',
  render: () => (
    <Collection layout="grid" title="Dispatches from the Field" description="Read stories from our ambassadors from life on the road. Updated regularly by riders like you" cardSize="lg" ctaLabel="Read More" ctaHref="#">
      {blogCards}
    </Collection>
  ),
};


