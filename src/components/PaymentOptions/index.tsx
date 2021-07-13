import React, { useCallback, useState } from "react";
import Heading from "../Heading/Heading";
import * as S from "./styled";
import Button from "../Button/Button";
import MasterCard from "../../assets/svg/Master.svg";
import visa from "../../assets/svg/visa.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const CreditCardSchema = (value) => {
  console.log(value);
};

export default function PaymentOptions() {
  const [card, setCard] = useState("");
  console.log(card);
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
          <Formik
            initialValues={{ card: "", cvc: "", dataExpire: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <label htmlFor="card">Card</label>
              <Field
                type="text"
                name="card"
                onChange={(e) => setCard(e.target.value)}
                id="card"
              />
              <S.Teste>
                <div>
                  {" "}
                  <label htmlFor="dataExpire">data Expiração</label>
                  <Field
                    type="numeric"
                    name="dataExpire"
                    id="dataExpire"
                    placeholder="MM/yyyy"
                  />
                </div>

                <div>
                  <label htmlFor="cvc">cvc</label>
                  <Field type="numeric" name="cvc" id="cvc" placeholder="123" />
                </div>
              </S.Teste>
              <S.Footer>
                {" "}
                <Button color="primary" type="submit">
                  Pagar Agora
                </Button>
              </S.Footer>
            </Form>
          </Formik>
        </S.FormPayment>
      </S.Content>
    </S.Wrapper>
  );
}
