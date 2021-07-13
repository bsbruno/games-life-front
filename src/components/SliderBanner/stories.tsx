import { Meta, Story } from "@storybook/react/types-6-0";
import GammerSlidreBanner, { SlidreBannerProps } from "./index";
/* import {  } from "./index"; */

const items = [
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
];

export default {
  title: "GammerSlidreBanner",
  component: GammerSlidreBanner,
  args: { items },
} as Meta;

export const Default: Story<SlidreBannerProps> = (args) => (
  <div style={{}}>
    <GammerSlidreBanner {...args} />
  </div>
);
