import React from "react";
import SlickerSlider, { Settings } from "react-slick";
import * as S from "./styled";
export type SliderSenttings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSenttings;
};

export default function Slider({ children, settings }: SliderProps) {
  return (
    <S.Wrapper>
      <SlickerSlider {...settings}> {children} </SlickerSlider>
    </S.Wrapper>
  );
}
