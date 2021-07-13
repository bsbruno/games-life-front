import React from "react";
import * as S from "./style";
import banner from "../../assets/attBanner.png";
export type GameItemProps = {
  name: string;
  photos?: [
    {
      url?: string;
    }
  ];
  price: string;
};

export default function GameItem({ name, price, photos }: GameItemProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.GameImage>
          <img src={banner} />
        </S.GameImage>
        <S.GameText>
          <h2> {name} </h2>
          <span> {price} </span>
        </S.GameText>
      </S.Content>
    </S.Wrapper>
  );
}
