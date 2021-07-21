import React from "react";
import GameItem, { GameItemProps } from "../GameItem";
import Button from "../Button/Button";
import { formatValue } from "../../utils/formatValue";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

import * as S from "./styled";

export type CartListProps = {
  hasButton?: boolean;
};

export default function CartList({ hasButton = false }: CartListProps) {
  const { user } = useAuth();
  const { products: items, total } = useCart();

  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem key={item.name} {...item} />
      ))}
      <S.Footer>
        {!hasButton && <span>Total:</span>}
        <S.Total> {formatValue(total)} </S.Total>
        {hasButton && user && (
          <Link to="/game/cart">
            <Button as="a" color="secondary">
              Comprar Agora
            </Button>
          </Link>
        )}
        {!user && (
          <Link to="/signin">
            <Button as="a" color="secondary">
              Login
            </Button>
          </Link>
        )}
      </S.Footer>
    </S.Wrapper>
  );
}
