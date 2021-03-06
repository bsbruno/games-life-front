import React from "react";
import * as S from "./style";
import banner from "../../assets/attBanner.png";
import { formatValue } from "../../utils/formatValue";
export type GameItemProps = {
  id?: string;
  name: string;
  photos?: [
    {
      url: string;
    }
  ];
  price: string;
};

export default function GameItem({ name, price, photos }: GameItemProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.GameImage>
          {photos != undefined && <img src={photos[0].url} />}
          {photos == undefined && <img src={banner} />}
        </S.GameImage>
        <S.GameText>
          <h2> {name} </h2>
          <span> {formatValue(Number(price))} </span>
        </S.GameText>
      </S.Content>
    </S.Wrapper>
  );
}
