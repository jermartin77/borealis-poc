import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSwatch } from './ColorSwatch';

// Colors sampled from product imagery
const COLORS = {
  jetBlack:   '#111111', // black jersey (product-image-1)
  blushPink:  '#f2a8c2', // pink jersey (product-image-2)
  offWhite:   '#e8e6e2', // white mesh panel (product-image-1-alt)
  slateGrey:  '#4a5260', // dark grey accent
  dustyRose:  '#c9909e', // muted rose mid-tone
};

const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size:     { control: 'radio', options: ['lg', 'sm'] },
    selected: { control: 'boolean' },
    soldOut:  { control: 'boolean' },
    color:    { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

export const Default: Story = {
  args: { color: COLORS.jetBlack, size: 'lg' },
};

export const Selected: Story = {
  args: { color: COLORS.jetBlack, size: 'lg', selected: true },
};

export const SoldOut: Story = {
  args: { color: COLORS.blushPink, size: 'lg', soldOut: true },
};

export const Small: Story = {
  args: { color: COLORS.blushPink, size: 'sm' },
};

export const AllStates: Story = {
  name: 'All States — Large',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <ColorSwatch color={COLORS.jetBlack}  size="lg" aria-label="Jet black" />
      <ColorSwatch color={COLORS.jetBlack}  size="lg" selected aria-label="Jet black selected" />
      <ColorSwatch color={COLORS.blushPink} size="lg" aria-label="Blush pink" />
      <ColorSwatch color={COLORS.blushPink} size="lg" soldOut aria-label="Blush pink sold out" />
      <ColorSwatch color={COLORS.offWhite}  size="lg" aria-label="Off white" />
      <ColorSwatch color={COLORS.slateGrey} size="lg" aria-label="Slate grey" />
      <ColorSwatch color={COLORS.dustyRose} size="lg" aria-label="Dusty rose" />
    </div>
  ),
};

export const AllStatesSmall: Story = {
  name: 'All States — Small',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <ColorSwatch color={COLORS.jetBlack}  size="sm" aria-label="Jet black" />
      <ColorSwatch color={COLORS.jetBlack}  size="sm" selected aria-label="Jet black selected" />
      <ColorSwatch color={COLORS.blushPink} size="sm" aria-label="Blush pink" />
      <ColorSwatch color={COLORS.blushPink} size="sm" soldOut aria-label="Blush pink sold out" />
      <ColorSwatch color={COLORS.offWhite}  size="sm" aria-label="Off white" />
      <ColorSwatch color={COLORS.slateGrey} size="sm" aria-label="Slate grey" />
      <ColorSwatch color={COLORS.dustyRose} size="sm" aria-label="Dusty rose" />
    </div>
  ),
};

export const BothSizes: Story = {
  name: 'Both Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {Object.entries(COLORS).map(([name, hex]) => (
          <ColorSwatch key={name} color={hex} size="lg" aria-label={name} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {Object.entries(COLORS).map(([name, hex]) => (
          <ColorSwatch key={name} color={hex} size="sm" aria-label={name} />
        ))}
      </div>
    </div>
  ),
};
