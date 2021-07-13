import { Meta, Story } from "@storybook/react/types-6-0";
import GameCardSlider, { gameCardSlideProps } from "./index";

/* export const items = [
  {
    image: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Read dead Redemption 2",
    develop: " Rockstart Games",
    buttonLabel: "Buy now",
    price: "R$:250",
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    develop: " Rockstart Games",
    buttonLabel: "Buy now",
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    develop: " Rockstart Games",
    buttonLabel: "Buy now",
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    develop: " Rockstart Games",
    buttonLabel: "Buy now",
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    develop: " Rockstart Games",
    buttonLabel: "Buy now",
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    develop: " Rockstart Games",
    buttonLabel: "Buy now",
  },
];
 */
export default {
  title: "GameCardSlider",
  component: GameCardSlider,
} as Meta;

export const Default: Story<gameCardSlideProps> = (args) => (
  <div style={{}}>
    <GameCardSlider {...args} />
  </div>
);
