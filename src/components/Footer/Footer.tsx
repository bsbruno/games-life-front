import React from "react";
import * as S from "./styled";
import Logo from "../../components/Logo/Logo";
import Heading from "../Heading/Heading";

export default function Footer() {
  return (
    <S.Wrapper>
      <Logo size="small" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small">
            Contact Us
          </Heading>

          <a href="mailto:sac@lifeGames.com">sac@lifeGames.com</a>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small">
            Follow Us
          </Heading>
          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/games-lifes"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/games-lifes"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/games-lifes"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/games-lifes"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small">
            Link
          </Heading>
          <nav aria-labelledby="footer resources">
            <a href="/">
              <a>Home</a>
            </a>
            <a href="/games">
              <a>Store</a>
            </a>
            <a href="/search">
              <a>Buscar</a>
            </a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>
    </S.Wrapper>
  );
}
