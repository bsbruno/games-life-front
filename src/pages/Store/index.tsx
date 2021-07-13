import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../../components/Container";
import * as S from "./styled";
import Menu from "../../components/Menu/Menu";
import Heading from "../../components/Heading/Heading";
import GameCard from "../../components/GameCard/GameCard";
import { MdFilterList, MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GameCardProps } from "../../components/GameCard/GameCard";
import api from "../../services/api";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Search from "../../components/InputSearch";

export default function Store({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(3);
  const history = useParams();

  const [games, setGames] = useState<GameCardProps[]>([]);

  const [search, setSearch] = useState("");

  async function handleGamesList() {
    const response = await api.get(`/games/store/take?num=${total}`);

    setGames(response.data);
  }
  async function handleGamesFind() {
    const searc = search.trim();
    const response = await api.get(`/games/store/search?game=${searc}`);

    setGames(response.data);
  }

  const handleGameCategories = useCallback(async (categorie?: string) => {
    const response = await api.get(`/games/categories/${categorie}`);

    setGames(response.data);
  }, []);

  useEffect(() => {
    handleGamesList();
  }, [total]);
  useEffect(() => {
    handleGamesList();
  }, []);
  useEffect(() => {
    handleGameCategories();
  }, []);
  useEffect(() => {
    handleGamesFind();
  }, [search]);

  return (
    <>
      <S.Wrapper>
        <Container>
          <Menu />

          <S.Content>
            <S.FilterMobileIcon onClick={() => setIsOpen(true)}>
              <MdFilterList size={30} style={{ color: "white" }} />
            </S.FilterMobileIcon>
            <S.FilterMobile isOpen={isOpen}>
              <MdClose onClick={() => setIsOpen(false)} />

              <Heading color="white" size="medium">
                Preço
              </Heading>

              <ul>
                <li>
                  <a href="">abaixo de R$:50,00</a>
                </li>
                <li>
                  <a href="">abaixo de R$:150,00</a>
                </li>
                <li>
                  <a href="">abaixo de R$:200,00</a>
                </li>{" "}
              </ul>
              <Heading color="white" size="medium">
                Genero
              </Heading>
              <ul>
                <li>
                  <a href="">Ação</a>
                </li>
                <li>
                  <a href="">RPG</a>
                </li>
                <li>
                  <a href="">FPS</a>
                </li>{" "}
              </ul>
            </S.FilterMobile>
            <S.FilterDesktop>
              <Heading color="white" size="medium">
                Preço
              </Heading>
              <ul>
                <li>
                  <a href="">abaixo de R$:50,00</a>
                </li>
                <li>
                  <a href="">abaixo de R$:150,00</a>
                </li>
                <li>
                  <a href="">abaixo de R$:200,00</a>
                </li>{" "}
              </ul>
              <Heading color="white" size="medium">
                Genero
              </Heading>
              <ul>
                <li>
                  <button onClick={() => handleGameCategories("acao")}>
                    Ação
                  </button>
                </li>
                <li>
                  <button onClick={() => handleGameCategories("rpg")}>
                    RPG
                  </button>
                </li>
                <li>
                  <button onClick={() => handleGameCategories("fps")}>
                    FPS
                  </button>
                </li>{" "}
              </ul>
            </S.FilterDesktop>
            <S.InputSearch>
              <Search
                onClick={() => handleGamesFind()}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </S.InputSearch>

            <S.Card>
              {games.map((item, index) => (
                <GameCard
                  develop={item.develop}
                  name={item.name}
                  photos={item.photos}
                  price={item.price}
                  key={index}
                  url_post={`/games/${item.slug}`}
                />
              ))}
              {games.length === 0 && <h1>Game Não encotrado</h1>}
            </S.Card>
          </S.Content>
        </Container>

        <S.ButttonViewMore>
          <button onClick={() => setTotal(total + 1)}>
            {" "}
            <span>Ver Mais</span>
            <IoIosArrowDown />{" "}
          </button>
        </S.ButttonViewMore>
        <Footer />
      </S.Wrapper>
    </>
  );
}
