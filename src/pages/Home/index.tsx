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

const itemsBanner = [
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
  {
    title: "Read dead is Back",
    subTitle: "Faroeste volta ao seu mundo",
    backgroundImg: "https://wallpapercave.com/wp/wp3363181.jpg",
  },
];
const gameCardIntem = [
  {
    name: "Nome do produto",
    photos: [
      {
        url: "https://picsum.photos/500/500",
      },
    ],
    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",
    photos: [
      {
        url: "https://picsum.photos/500/500",
      },
    ],
    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
  {
    name: "Nome do produto",
    photos: [
      {
        url: "https://picsum.photos/500/500",
      },
    ],
    price: "R$:240.50",
    develop: {
      name: "Rockstar Games",
    },
    promotionalPrice: "130.0",
  },
];

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
          <SlideBanner items={itemsBanner} />
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
          <CoverBanner
            title="Read Dead 2"
            subTitle="O novo velho oeste para nova geração"
            backgroundImg="https://wallpapercave.com/wp/wp3363181.jpg"
          />

          <GameCardSlider items={games} />
        </S.GamesSectorTwo>
      </Container>
      <Footer />
    </S.Wrapper>
  );
}
