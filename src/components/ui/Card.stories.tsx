import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Heading } from "../typography/Heading";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Heading level="h3">Card Title</Heading>
      <p>This is a themed, reusable card.</p>
    </Card>
  ),
};
