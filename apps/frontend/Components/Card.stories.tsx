import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Sample Card",
    description: "This is a sample description for the card.",
    image: "https://motionbgs.com/media/1052/lambo-under-the-rain.jpg",
    buttonText: "Click Me",
    rounded: false
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
      color: "primary",
      rounded: false, // Normal corners
    },
  };
  
  export const RoundedPrimary: Story = {
    args: {
      color: "primary",
      rounded: true, // ✅ Fully rounded
    },
  };
  
  export const Secondary: Story = {
    args: {
      color: "secondary",
      rounded: false,
    },
  };
  
  export const RoundedSecondary: Story = {
    args: {
      color: "secondary",
      rounded: true, // ✅ Fully rounded
    },
  };
  
  export const Danger: Story = {
    args: {
      color: "danger",
      rounded: false,
    },
  };
  
  export const RoundedDanger: Story = {
    args: {
      color: "danger",
      rounded: true, // ✅ Fully rounded
    },
  };


