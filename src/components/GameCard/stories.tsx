import { Meta, Story } from "@storybook/react/types-6-0";
import GameCard from "./GameCard";
import { GameCardProps } from "./GameCard";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    id: "1",
    title: "Nome do produto",
    image: "https://picsum.photos/500/500",
    price: "R$:240.50",
    develop: "Rockstar Games",
    promotionalPrice: 130.0,
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: "30rem" }}>
    <GameCard {...args} />
  </div>
);
