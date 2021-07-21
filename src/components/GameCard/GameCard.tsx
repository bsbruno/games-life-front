import React from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import { FiShoppingCart, FiActivity } from "react-icons/fi";
import { MdRemoveShoppingCart } from "react-icons/md";
import teste from "../../assets/attBanner.png";
import { useParams, useHistory } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import { formatValue } from "../../utils/formatValue";
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

  url_post?: string;
};

export default function GameCard({
  develop,
  photos,
  price,
  name,

  description,
  ...props
}: GameCardProps) {
  const { addToCart, removeToCart, isInCart } = useCart();

  const hit = useHistory();

  function reloadPage(url) {
    hit.push(`${url}`);
    window.location.reload();
  }

  async function handleAddToCart(game) {
    addToCart(game);
  }

  function handleRemoveToCart(game) {
    removeToCart(game);
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
          <S.Price>
            {" "}
            <p>{formatValue(Number(price))}</p>{" "}
          </S.Price>

          <Button
            size="small"
            color="secondary"
            onClick={() =>
              !isInCart(props.slug)
                ? handleAddToCart(props.slug)
                : handleRemoveToCart(props.slug)
            }
          >
            {!isInCart(props.slug) ? (
              <FiShoppingCart />
            ) : (
              <MdRemoveShoppingCart size={18} />
            )}
          </Button>
        </S.PriceBox>
      </S.Content>
    </S.Wrapper>
  );
}
