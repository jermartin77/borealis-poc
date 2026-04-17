import { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { OptionSelect, ColorSwatchGroup } from './EcommerceElements';

const meta: Meta = {
  title: 'Patterns/EcommerceElements',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const SizeSelector = {
  render: () => {
    const [size, setSize] = useState('m');
    return (
      <OptionSelect
        label="Size"
        value={size}
        onChange={setSize}
        options={[
          { value: 'xs', label: 'XS' },
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL', disabled: true },
        ]}
      />
    );
  },
};

export const ColorPicker = {
  render: () => {
    const [color, setColor] = useState('sand');
    return (
      <ColorSwatchGroup
        label="Color"
        value={color}
        onChange={setColor}
        swatches={[
          { value: 'sand', label: 'Sand', color: '#dfa7ab' },
          { value: 'slate', label: 'Slate', color: '#5e7582' },
          { value: 'ivory', label: 'Ivory', color: '#f6f3f3' },
          { value: 'midnight', label: 'Midnight', color: '#181b1d' },
          { value: 'sage', label: 'Sage', color: '#26637f', disabled: true },
        ]}
      />
    );
  },
};

export const Combined = {
  render: () => {
    const [size, setSize] = useState('m');
    const [color, setColor] = useState('sand');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <ColorSwatchGroup
          label="Color — Sand"
          value={color}
          onChange={setColor}
          swatches={[
            { value: 'sand', label: 'Sand', color: '#dfa7ab' },
            { value: 'slate', label: 'Slate', color: '#5e7582' },
            { value: 'ivory', label: 'Ivory', color: '#f6f3f3' },
            { value: 'midnight', label: 'Midnight', color: '#181b1d' },
          ]}
        />
        <OptionSelect
          label="Size"
          value={size}
          onChange={setSize}
          options={[
            { value: 'xs', label: 'XS' },
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
          ]}
        />
      </div>
    );
  },
};
