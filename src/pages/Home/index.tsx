import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { Container } from "../../components/Container";
import * as S from "./styled";
import SlideBanner from "../../components/SliderBanner";
import GameCardSlider from "../../components/GameCardSlider";
import Heading from "../../components/Heading/Heading";
import CoverBanner from "../../components/CoverBanner/CoverBanner";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { useAuth } from "../../hooks/auth";

export type GameCardProps = {
  id?: string;
  slug?: string;
  photos: [
    {
      url: string;
    }
  ];
  name: string;
  develop: {
    name: string;
  };
  price: string;
  promotionalPrice?: string;
};
export default function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const { user } = useAuth();

  const total = 8;

  async function handleGamesList() {
    const response = await api.get(`/games/store/take?num=${total}`);

    setGames(response.data);
  }

  useEffect(() => {
    handleGamesList();
  }, []);

  return (
    <S.Wrapper>
      <Menu />
      <Container>
        <S.Content>
          <SlideBanner items={games} />
        </S.Content>
      </Container>
      <S.GamesSectorOne>
        <Heading size="large" color="black">
          Lançamentos
        </Heading>

        <GameCardSlider items={games} />
      </S.GamesSectorOne>
      <Container>
        <S.GamesSectorTwo>
          <Heading size="large" color="white">
            Populares
          </Heading>

          <GameCardSlider items={games} />
        </S.GamesSectorTwo>
      </Container>
      <Footer />
    </S.Wrapper>
  );
}
