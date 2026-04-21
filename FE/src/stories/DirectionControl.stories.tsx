import type { Meta, StoryObj } from '@storybook/react';
import { DirectionControl } from '../components/DirectionControl';
import { ValidationControl } from '../components/ValidationControl';
import { useState } from 'react';

const meta: Meta<typeof DirectionControl> = {
  title: 'Components/DirectionControl',
  component: DirectionControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DirectionControl>;

// Empty input
export const Empty: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
};

// Error message on invalid coordinates
export const ErrorMessage: Story = {
  render: () => {
    const [value, setValue] = useState('5,2 North');
    return (
      <>
        <DirectionControl value={value} onChange={setValue} />
        <ValidationControl errors={['X must be an integer between 0 and 4.']} />
      </>
    );
  },
};

// Different positions 
export const CenterEast: Story = {
  args: {
    value: '2,2 East',
    onChange: () => {},
  },
};

export const CenterSouth: Story = {
  args: {
    value: '2,2 South',
    onChange: () => {},
  },
};

export const CenterWest: Story = {
  args: {
    value: '2,2 West',
    onChange: () => {},
  },
};

// Edge cases - grid boundaries
export const TopLeftCorner: Story = {
  args: {
    value: '0,0 North',
    onChange: () => {},
  },
};

export const TopRightCorner: Story = {
  args: {
    value: '4,0 East',
    onChange: () => {},
  },
};

export const BottomLeftCorner: Story = {
  args: {
    value: '0,4 South',
    onChange: () => {},
  },
};

export const BottomRightCorner: Story = {
  args: {
    value: '4,4 West',
    onChange: () => {},
  },
};
