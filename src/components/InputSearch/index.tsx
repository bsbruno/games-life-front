import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";
import { FiSearch } from "react-icons/fi";

type InputyTypes = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  onClick(): void;
} & InputyTypes;

export default function Search({ onClick, ...props }: InputProps) {
  return (
    <S.Wrapper>
      <S.IconSearch onClick={onClick}>
        <FiSearch />
      </S.IconSearch>
      <input type="text" placeholder="Procurar Game..." {...props} />
    </S.Wrapper>
  );
}
