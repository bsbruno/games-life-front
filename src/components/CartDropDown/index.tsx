import React from "react";
import Cart from "../Cart";

import CartList from "../CartList";
import Dropdown from "../Dropdown";
import { GameItemProps } from "../GameItem";
import * as S from "./styled";

const gameCardIntem = [
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",

    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
];

export type CardDropDow = {
  items?: GameItemProps[];
  total?: number;
};

export default function CartDropDow({ items, total }: CardDropDow) {
  return (
    <S.Wrapper>
      <Dropdown name={<Cart quantity={items?.length} />}>
        <CartList items={gameCardIntem} total={total} hasButton />
      </Dropdown>
    </S.Wrapper>
  );
}
