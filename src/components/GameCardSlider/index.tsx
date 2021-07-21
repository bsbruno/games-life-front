import React from "react";
import Slider from "../Slider/Slider";
import * as S from "./styled";
import { Settings } from "react-slick";

import GameCard, { GameCardProps } from "../GameCard/GameCard";
const settings: Settings = {
  slidesToShow: 4,

  arrows: false,
  dots: true,
  slidesToScroll: 3,
  infinite: true,
  speed: 500,

  lazyLoad: "progressive",

  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

export type gameCardSlideProps = {
  items: GameCardProps[];
  color?: "white" | "black";
};

export default function GameCardSlider({
  items,
  color = "white",
}: gameCardSlideProps) {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} url_post={`/games/${item.slug}`} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
