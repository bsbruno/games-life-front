import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu/Menu";
import Heading from "../../components/Heading/Heading";
import GameItem from "../../components/GameItem";
import CartList from "../../components/CartList/index";
import PaymentOptions from "../../components/PaymentOptions";
import CoverBanner from "../../components/CoverBanner/CoverBanner";
import banner from "../../assets/attBanner.png";
import GameCardSlider from "../../components/GameCardSlider";
import { GameCardProps } from "../../components/GameCard/GameCard";
import api from "../../services/api";
import Footer from "../../components/Footer/Footer";
const game = [
  {
    name: "Read Dead  Redeption 2 ",
    price: "R$:250",
  },
  {
    name: "Read Dead  Redeption 2 ",
    price: "R$:250",
  },
];

export default function GameCart() {
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
      <S.Container>
        <Heading color="white" lineColor="primary" size="large">
          Meu Carinho
        </Heading>
        <S.Content>
          <CartList items={game} total={250} />
          <S.Payment>
            <PaymentOptions />
          </S.Payment>
        </S.Content>
        <S.Info>
          <span>
            Your purchase is protected by a secure connection from the WON
            platform. By purchasing from our store you agree and agree to our
            terms of use. After making the purchase you are entitled to a refund
            within a maximum of 30 days, without any additional cost, as long as
            the download of the purchased game has not occurred after your
            purchase.
          </span>
        </S.Info>
        <S.MoreGames>
          <S.Line></S.Line>
          <Heading color="white" lineColor="primary" size="large">
            Mais Games
          </Heading>
          <CoverBanner
            backgroundImg={banner}
            title="Overwath 2 "
            subTitle="asdjasoidjasoidjaoisdjasoidjasasdasdjasd
            aosidjoiasçdjoiçasjdoiasçdjaspdijas
            asidjoçoiaçsdjoiçasdj"
          />
          <S.GameSlider>
            <GameCardSlider items={games} />
          </S.GameSlider>
        </S.MoreGames>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
