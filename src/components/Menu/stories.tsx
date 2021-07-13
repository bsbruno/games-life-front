import { Meta, Story } from "@storybook/react/types-6-0";
import Menu from "./Menu";

export default {
  title: "Menu",
  component: Menu,
};

export const Default: Story = (args) => <Menu {...args} />;
