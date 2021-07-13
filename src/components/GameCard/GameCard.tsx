import React from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import { FiShoppingCart } from "react-icons/fi";
import teste from "../../assets/attBanner.png";
import { useParams, useHistory } from "react-router-dom";

export type GameCardProps = {
  id?: string;
  slug?: string;
  description?: string;
  photos?: [
    {
      url: string | undefined;
    }
  ];
  name: string;
  develop: {
    name: string;
  };
  price: string;
  promotionalPrice?: string;
  url_post?: string;
};

export default function GameCard({
  develop,
  photos,
  price,
  name,
  promotionalPrice,
  description,
  ...props
}: GameCardProps) {
  const hit = useHistory();
  const page = hit.location.pathname;
  function reloadPage(url) {
    console.log(url);
    hit.push(`${url}`);
    window.location.reload();
  }
  return (
    <S.Wrapper>
      <S.LinkGameCard
        onClick={() => reloadPage(props.url_post)}
        to={props.url_post}
      >
        <S.BoxImage>
          {" "}
          {photos.find((i) => i.url) ? (
            <img src={photos[0].url} />
          ) : (
            <img src={teste} />
          )}
        </S.BoxImage>
      </S.LinkGameCard>
      <S.Content>
        <S.Title>
          {name}
          <S.SubTitle> {develop.name} </S.SubTitle>
        </S.Title>

        <S.PriceBox>
          <span>{promotionalPrice} </span>
          <S.Price>
            {" "}
            <p>{price}</p>{" "}
          </S.Price>
          <Button
            size="small"
            color="secondary"
            onClick={() => console.log("botao card")}
          >
            <FiShoppingCart />{" "}
          </Button>
        </S.PriceBox>
      </S.Content>
    </S.Wrapper>
  );
}
