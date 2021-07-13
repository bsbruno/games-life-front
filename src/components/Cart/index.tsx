import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styled";
export type CartIconProps = {
  quantity?: number;
};

export default function Cart({ quantity }: CartIconProps) {
  return (
    <S.Wrapper>
      <FiShoppingCart />
      {quantity > 0 && <S.CartIcon>{quantity} </S.CartIcon>}
    </S.Wrapper>
  );
}
