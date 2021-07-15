import React from "react";
import * as S from "./styled";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
type EmptyProps = {
  message?: string;
  buttomText?: string;
  hiddenButton?: boolean;
};

export default function Empty({
  hiddenButton = false,
  buttomText,
  message,
}: EmptyProps) {
  const { push } = useHistory();
  return (
    <S.Wrapper>
      <S.Content>
        <h1>😱</h1>
        <h4> {message} </h4>
      </S.Content>
      {!hiddenButton && (
        <Button as="a" onClick={() => push("/games/store/take")}>
          Vá Para Loja
        </Button>
      )}
    </S.Wrapper>
  );
}
