import React from "react";
import Slider from "../Slider/Slider";
import * as S from "./styled";
import { Settings } from "react-slick";
import arrowLeft from "../../assets/svg/arrowLeft.svg";

import CoverBanner, { CoverBannerProps } from "../CoverBanner/CoverBanner";

const settings: Settings = {
  slidesToShow: 1,
  infinite: true,
  arrows: false,
  dots: true,
  pauseOnHover: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,

  lazyLoad: "ondemand",

  responsive: [
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export type SlidreBannerProps = {
  items: CoverBannerProps[];
};

export default function SlideBanner({ items }: SlidreBannerProps) {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <CoverBanner key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
