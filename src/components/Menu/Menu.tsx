import React, { useState } from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { FiMenu, FiUser, FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Cart from "../Cart";
import CartList from "../CartList";
import CartDropDow from "../CartDropDown";

export type MenuProps = {
  userName?: string;
};

export default function Menu({ userName }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  /*  const [search, setSearch] = useState(""); */

  /*   async function handleSearch() {
    const response = await api.get(`/games/search/title?game=${search}`);
    console.log(response.data);
  }
 */
  const gameCardIntem = [
    {
      name: "Nome do produto",

      price: "R$:240.50",
      develop: {
        name: "Rockstar Games",
      },
      promotionalPrice: "130.0",
    },
  ];
  return (
    <S.Wrapper>
      <S.WrapperLogo to="/">
        <Logo hiddenMobile={true} />
      </S.WrapperLogo>
      <S.MenuNavDesktop>
        <Link to="/games/store/take">Loja</Link>
        <Link to="/">Explorar</Link>

        <S.CartButton>
          {" "}
          <CartDropDow items={gameCardIntem} total={12} />
        </S.CartButton>
        {!!userName ? (
          <Link to="/account">
            <FiUser />
            <span>{userName} </span>
          </Link>
        ) : (
          <Link to="/signin">
            {" "}
            <Button style={{ position: "relative", top: -10 }}>Login</Button>
          </Link>
        )}
      </S.MenuNavDesktop>

      <S.MenuNavMobile>
        <S.Menulink to="/account">
          <FiUser />
        </S.Menulink>
        <S.MenulinkIcon role="button" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </S.MenulinkIcon>
        <S.CartDropDownMobile>
          <CartDropDow items={gameCardIntem} total={12} />
        </S.CartDropDownMobile>
      </S.MenuNavMobile>

      <S.MenuFullMobile isOpen={isOpen}>
        <S.CloseMenu onClick={() => setIsOpen(false)}>
          {" "}
          <AiFillCloseCircle />
        </S.CloseMenu>

        <S.Menulink to="/games/store/take">Loja</S.Menulink>
        <S.Menulink to="/">Explorar</S.Menulink>
        <S.Menulink to="/account">Minha Conta</S.Menulink>
        {!userName && (
          <S.MenuLogin>
            <S.Menulink to="/signin">Sign Up</S.Menulink>
            <span>Or</span>
            <Link to="/signup">
              {" "}
              <Button color="secondary">Log In Now</Button>
            </Link>
          </S.MenuLogin>
        )}
      </S.MenuFullMobile>
    </S.Wrapper>
  );
}
