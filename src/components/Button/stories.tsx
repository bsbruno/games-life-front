import { Meta, Story } from "@storybook/react/types-6-0";
import Button from "./Button";
import { FiAirplay } from "react-icons/fi";
/* import { LogoProps } from "./Logo"; */
export default {
  title: "Button",
  component: Button,
} as Meta;

export const Basic: Story = (args) => (
  <Button {...args}> {<FiAirplay />} </Button>
);
