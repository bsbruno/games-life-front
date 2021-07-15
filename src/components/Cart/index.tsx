import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styled";
import { useCart } from "../../hooks/cart";

export default function Cart() {
  const { products } = useCart();

  return (
    <S.Wrapper>
      <FiShoppingCart />
      {products.length > 0 && <S.CartIcon>{products.length} </S.CartIcon>}
    </S.Wrapper>
  );
}
