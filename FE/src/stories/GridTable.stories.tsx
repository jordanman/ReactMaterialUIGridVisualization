import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "../components/pages/GridTable";

const meta: Meta<typeof Grid> = {
  title: "Components/GridTable",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

// Empty input
export const Empty: Story = {
  args: {
    initialInput: "",
  },
};

// Different positions/directions
export const CenterEast: Story = {
  args: {
    initialInput: "2,2 East",
  },
};

export const CenterSouth: Story = {
  args: {
    initialInput: "2,2 South",
  },
};

export const CenterWest: Story = {
  args: {
    initialInput: "2,2 West",
  },
};

// Edge cases - grid boundaries
export const TopLeftCorner: Story = {
  args: {
    initialInput: "0,0 North",
  },
};

export const TopRightCorner: Story = {
  args: {
    initialInput: "4,0 East",
  },
};

export const BottomLeftCorner: Story = {
  args: {
    initialInput: "0,4 South",
  },
};

export const BottomRightCorner: Story = {
  args: {
    initialInput: "4,4 West",
  },
};

// Invalid inputs
export const InvalidXNegative: Story = {
  args: {
    initialInput: "-1,2 North",
  },
};

export const InvalidXTooLarge: Story = {
  args: {
    initialInput: "5,2 North",
  },
};

export const InvalidYNegative: Story = {
  args: {
    initialInput: "1,-1 North",
  },
};

export const InvalidYTooLarge: Story = {
  args: {
    initialInput: "1,5 North",
  },
};

export const InvalidDirection: Story = {
  args: {
    initialInput: "1,2 Northeast",
  },
};

export const InvalidFormat: Story = {
  args: {
    initialInput: "invalid input",
  },
};
