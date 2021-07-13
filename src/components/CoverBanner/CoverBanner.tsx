import React from "react";
import * as S from "./styled";
import Button from "../Button/Button";
export type CoverBannerProps = {
  title?: string;
  subTitle?: string;
  backgroundImg?: string;
  link?: React.ReactNode;
};

export default function CoverBanner({
  backgroundImg,
  subTitle,
  title,
}: CoverBannerProps) {
  return (
    <S.Wrapper backgroundImg={backgroundImg}>
      <S.Content>
        <S.Title>{title} </S.Title>
        <S.SubTitle> {subTitle} </S.SubTitle>
        <S.ButtonContainer>
          <Button fullWidth={false}>Buy Now</Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
}
