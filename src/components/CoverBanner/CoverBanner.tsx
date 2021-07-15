import React from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../hooks/cart";
import banner from "../../assets/attBanner.png";

import { useHistory } from "react-router-dom";
export type CoverBannerProps = {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  photos: [
    {
      url: string;
    }
  ];
  link?: React.ReactNode;
};

export default function CoverBanner({
  photos,
  description,
  name,
  ...props
}: CoverBannerProps) {
  const { addToCart, isInCart } = useCart();
  const { push } = useHistory();
  function handleCheckout() {
    return push("/game/cart");
  }
  function handleAddToCart(game) {
    addToCart(game);
  }

  return (
    <S.Wrapper photos={photos}>
      <S.Content>
        <S.Title>{name} </S.Title>
        <S.SubTitle> {description} </S.SubTitle>
        <S.ButtonContainer>
          {!isInCart(props.slug) ? (
            <Button
              fullWidth={false}
              onClick={() => handleAddToCart(props.slug)}
            >
              <span>Add</span> <FiShoppingCart size={18} />{" "}
            </Button>
          ) : (
            <Button
              fullWidth={false}
              color="terciary"
              onClick={() => handleCheckout()}
            >
              <span>Checkout</span>
            </Button>
          )}
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
}
