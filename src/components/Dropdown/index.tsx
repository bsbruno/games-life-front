import { type } from "os";
import React, { useEffect, useState } from "react";
import * as S from "./styled";

export type DropdownProps = {
  name: React.ReactNode;
  children: React.ReactNode;
};

export default function Dropdown({ children, name }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{name}</S.Title>
      <S.Content>{children}</S.Content>
      <S.Overlay onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  );
}
