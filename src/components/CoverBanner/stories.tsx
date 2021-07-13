import { Meta, Story } from "@storybook/react/types-6-0";
import CoverBanner from "./CoverBanner";

export default {
  title: "CoverBanner",
  component: CoverBanner,
  args: {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
};

export const Default: Story = (args) => (
  <div style={{ maxWidth: "120rem" }}>
    <CoverBanner {...args} />
  </div>
);
