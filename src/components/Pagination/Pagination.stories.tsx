import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination total={10} current={page} onChange={setPage} />;
  },
};

export const MidRange: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination total={12} current={page} onChange={setPage} />;
  },
};

export const Few: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    return <Pagination total={5} current={page} onChange={setPage} />;
  },
};
