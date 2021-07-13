import React from "react";
import * as S from "./styled";
import Button from "../../components/Button/Button";
import { Container } from "../../components/Container";
import Heading from "../../components/Heading/Heading";
import Logo from "../../components/Logo/Logo";
export default function SignIn() {
  return (
    <S.Wrapper>
      <S.Background>
        <S.BackgroundText>
          <h1>Games Infinite</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's{" "}
            <strong>standard dummy text ever</strong> since the 1500s, when an
            unknown printer took a galley of type and scrambled
          </p>
        </S.BackgroundText>
      </S.Background>

      <S.Content>
        <Logo hiddenText={true} size="large" />
        <form action="">
          <Heading size="large" color="white">
            Faça seu login
          </Heading>
          <input type="text" placeholder="E-mail" />

          <input type="password" placeholder="Senha" />
          <a href="">Criar conta</a>
          <Button color="secondary" type="submit">
            Entrar
          </Button>
          <span>
            Não tem uma conta ? <a href="">Criar conta</a>
          </span>
        </form>
      </S.Content>
    </S.Wrapper>
  );
}
