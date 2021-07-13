import React from "react";
import GameItem, { GameItemProps } from "../GameItem";
import Button from "../Button/Button";
import { formatValue } from "../../utils/formatValue";
import { Link } from "react-router-dom";
import * as S from "./styled";

export type CartListProps = {
  items: GameItemProps[];
  total: number;
  hasButton?: boolean;
};

export default function CartList({
  items,
  total,
  hasButton = false,
}: CartListProps) {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem key={item.name} {...item} />
      ))}
      <S.Footer>
        {!hasButton && <span>Total:</span>}
        <S.Total> {formatValue(total)} </S.Total>
        {hasButton && (
          <Link to="/game/cart">
            <Button as="a" color="secondary">
              Comprar Agora
            </Button>
          </Link>
        )}
      </S.Footer>
    </S.Wrapper>
  );
}
