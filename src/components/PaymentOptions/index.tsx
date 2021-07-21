import React, { useCallback, useState } from "react";
import Heading from "../Heading/Heading";
import * as S from "./styled";
import Button from "../Button/Button";
import MasterCard from "../../assets/svg/Master.svg";
import visa from "../../assets/svg/visa.svg";

import { useCart } from "../../hooks/cart";
import {
  CreditCardRegex,
  cardReplace,
  dateCard as cardDateRepalce,
  cvcReplace,
  clearNumber,
} from "../../utils/regexPayment";
import api from "../../services/api";
import axios from "axios";

export default function PaymentOptions() {
  const [numberCard, setNumberCard] = useState("");
  const [dateCard, setDateCard] = useState("");
  const [cvcCard, setCvcCard] = useState("");
  const [idProduct, setIdProduct] = useState([]);
  const [error, setError] = React.useState(null);
  const { total, products } = useCart();

  async function handleSubmit(event) {
    event.preventDefault();
    const cardNumber = numberCard.replace(/\.|\-/g, "");
    const cardDateRefector = dateCard.replace(/\D+/g, "");
    /*   if (cardNumber.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (CreditCardRegex.card.test(cardNumber)) {
      setError("Cartão Invalido");
      return false;
    } */

    const response = await axios.post(`https://api.pagar.me/1/transactions`, {
      api_key: "ak_test_67Q105LpH2eKiAsAVlGdvBKgLUpUFV",
      card_number: cardNumber,
      card_holder_name: "bruno de santana pinheiro",
      card_cvv: cvcCard,
      card_expiration_date: cardDateRefector,
      amount: total * 100,
    });
    console.log(response);
  }

  return (
    <S.Wrapper>
      <S.Content>
        <Heading>Pagamento</Heading>
        <S.CardTitle>
          <img src={MasterCard} />
          <img src={visa} />
          <span>Credito/Debito</span>
        </S.CardTitle>
        <S.FormPayment>
          <form onSubmit={handleSubmit}>
            <label htmlFor="card">Card</label>
            {error && <div> {error} </div>}
            <input
              type="text"
              name="card"
              id="card"
              value={cardReplace(numberCard)}
              placeholder="Numero do cartão"
              onChange={(e) => setNumberCard(e.target.value)}
            />
            <label htmlFor="card">Nome</label>
            <input
              type="text"
              name="nameCard"
              id="nameCard"
              placeholder="Nome do cartão"
            />

            <S.Teste>
              <div>
                {" "}
                <label htmlFor="dataExpire">data Expiração</label>
                <input
                  type="text"
                  name="dataExpire"
                  id="dataExpire"
                  placeholder="MM/yy"
                  pattern="\d\d/\d\d"
                  value={cardDateRepalce(dateCard)}
                  onChange={(e) => setDateCard(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cvc">cvc</label>
                <input
                  type="numeric"
                  pattern="\d{3,4}"
                  name="cvc"
                  id="cvc"
                  placeholder="123"
                  onChange={(e) => setCvcCard(e.target.value)}
                  value={cvcReplace(cvcCard)}
                />
              </div>
            </S.Teste>
            <S.Footer>
              {" "}
              <Button color="primary" type="submit">
                Pagar Agora
              </Button>
            </S.Footer>
          </form>
        </S.FormPayment>
      </S.Content>
    </S.Wrapper>
  );
}
