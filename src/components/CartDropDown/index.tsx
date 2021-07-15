import React, { useState } from "react";
import Cart from "../Cart";
import api from "../../services/api";
import CartList from "../CartList";
import Dropdown from "../Dropdown";
import { GameItemProps } from "../GameItem";
import * as S from "./styled";
import { useCart } from "../../hooks/cart";
import Empty from "../Empty";

export type CardDropDow = {
  items?: GameItemProps[];
  total?: number;
};

export default function CartDropDow() {
  const { products } = useCart();
  return (
    <S.Wrapper>
      <Dropdown name={<Cart />}>
        {products.length > 0 ? (
          <CartList hasButton />
        ) : (
          <Empty message=" Parece que seu carrinho está vazio" />
        )}
      </Dropdown>
    </S.Wrapper>
  );
}
