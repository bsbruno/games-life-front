import React, { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu/Menu";
import * as S from "./styled";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import CoverBanner from "../../components/CoverBanner/CoverBanner";
import GameCardSlider from "../../components/GameCardSlider";
import { GameCardProps } from "../../components/GameCard/GameCard";
import banner from "../../assets/attBanner.png";
import banner2 from "../../assets/attBanner.png";
import { useParams } from "react-router-dom";
import api from "../../services/api";
/* export type DetailsGamesProp = {
  title?: string;
  backgroundImg?: string;
  price?: string;
  description?: string;
  develop?: string;
};

}; */
type SlugProps = {
  slug: string;
};
export default function Details({
  develop,
  name,
  price,
  photos,
  id,
  ...props
}: GameCardProps) {
  const params = useParams<SlugProps>();
  const [games, setGames] = useState<GameCardProps[]>([]);
  const [uniqueGame, setUniqueGame] = useState({} as GameCardProps);
  /*   uniqueGame.map((i) => console.log(i.photos)); */

  async function handleGamesSlug() {
    const response = await api.get(`/games/${params.slug}`);
    setUniqueGame(response.data);
  }
  useEffect(() => {
    handleGamesSlug();
  }, []);

  const total = 10;

  async function handleGamesList() {
    const response = await api.get(`/games/num/${total}`);

    setGames(response.data);
  }

  useEffect(() => {
    handleGamesList();
  }, []);
  console.log(uniqueGame.photos);

  return (
    <>
      {/* photos.find((i) => i.url) */}
      <S.Wrapper>
        <S.Background photos={banner}>
          <S.Teste>
            <Menu />
          </S.Teste>
        </S.Background>
        <Container>
          <S.Content>
            <S.Title>
              <Heading size="large"> {uniqueGame.name} </Heading>
            </S.Title>
            <S.Description>{uniqueGame.description}</S.Description>
            <S.Price>
              {" "}
              <p> {uniqueGame.price} </p>{" "}
            </S.Price>
            <Button size="large"> Buy Now</Button>
          </S.Content>

          <S.ContentMobile>
            <S.Title>
              <Heading size="large"> {uniqueGame.name}</Heading>
            </S.Title>
            <S.Description>{uniqueGame.description}</S.Description>
            <S.Price>
              {" "}
              <p>{uniqueGame.price}</p>{" "}
            </S.Price>
            <Button size="large"> Buy Now</Button>
          </S.ContentMobile>
        </Container>
        <S.MoreGamesSection>
          <Heading size="large" color="white">
            {" "}
            Mais Jogos
          </Heading>
          <GameCardSlider items={games} />
        </S.MoreGamesSection>
        <Footer />
      </S.Wrapper>
    </>
  );
}
