import React, { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu/Menu";
import * as S from "./styled";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import { FiShoppingCart } from "react-icons/fi";
import GameCardSlider from "../../components/GameCardSlider";
import { GameCardProps } from "../../components/GameCard/GameCard";
import { MdRemoveShoppingCart } from "react-icons/md";

import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import api from "../../services/api";
import { formatValue } from "../../utils/formatValue";

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

  const [uniqueGame, setUniqueGame] = useState({} as GameCardProps);
  const { addToCart, isInCart, removeToCart } = useCart();

  async function handleGamesSlug() {
    const response = await api.get(`/games/${params.slug}`);
    setUniqueGame(response.data);
  }
  useEffect(() => {
    handleGamesSlug();
  }, []);

  function handleAddToCart(game) {
    addToCart(game);
    isInCart(game);
  }

  function handleRemoveToCart(game) {
    removeToCart(game);
  }

  return (
    <>
      <S.Wrapper>
        <S.Background photos={uniqueGame.photos}>
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
              <p> {formatValue(Number(uniqueGame.price))} </p>{" "}
            </S.Price>
            {!isInCart(uniqueGame.slug) ? (
              <Button
                size="large"
                onClick={() => handleAddToCart(uniqueGame.slug)}
              >
                {" "}
                <span>Adicionar Ao Carrinho</span>
                <FiShoppingCart size={20} />
              </Button>
            ) : (
              <Button
                size="large"
                color="terciary"
                onClick={() => handleRemoveToCart(uniqueGame.slug)}
              >
                {" "}
                <span> Remover do Carrinho</span>
                <MdRemoveShoppingCart size={20} />
              </Button>
            )}
          </S.Content>

          <S.ContentMobile>
            <S.Title>
              <Heading size="large"> {uniqueGame.name}</Heading>
            </S.Title>
            <S.Description>{uniqueGame.description}</S.Description>
            <S.Price>
              {" "}
              <p>{formatValue(Number(uniqueGame.price))}</p>{" "}
            </S.Price>
            {!isInCart(uniqueGame.slug) ? (
              <Button
                size="large"
                onClick={() => handleAddToCart(uniqueGame.slug)}
              >
                {" "}
                <span>Adicionar Ao Carrinho</span>
                <FiShoppingCart size={20} />
              </Button>
            ) : (
              <Button
                size="large"
                color="terciary"
                onClick={() => handleRemoveToCart(uniqueGame.slug)}
              >
                {" "}
                <span> Remover do Carrinho</span>
                <MdRemoveShoppingCart size={20} />
              </Button>
            )}
          </S.ContentMobile>
        </Container>
        <S.MoreGamesSection></S.MoreGamesSection>
        <Footer />
      </S.Wrapper>
    </>
  );
}
