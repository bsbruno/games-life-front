import React, { useState } from "react";
import * as S from "./styled";
import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/auth";
import Heading from "../../components/Heading/Heading";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required("Email Obrigatório"),
  password: Yup.string()
    .min(4, "Senha tem no minimo 4 Digitos")
    .required("Password Obrigatório"),
});

export default function SignIn() {
  const [signInError, setSignInError] = useState(null);
  const { signIn } = useAuth();
  const history = useHistory();
  return (
    <S.Wrapper>
      <S.Background>
        <S.BackgroundText>
          <h1>Games Infinite</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's{" "}
            <strong>standard dummy text ever</strong> since the 1500s, when an
            unknown printer took a galley of type and scrambled
          </p>
        </S.BackgroundText>
      </S.Background>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          signIn(values);
          history.push("/");
        }}
      >
        {({ errors, touched }) => (
          <S.Content>
            <Logo hiddenText={true} size="large" />
            <Form action="">
              <Heading size="large" color="white">
                Faça seu login
              </Heading>
              {errors.email && touched.email ? (
                <S.ErrorInput>{errors.email}</S.ErrorInput>
              ) : null}
              <Field name="email" type="text" placeholder="E-mail" />
              {errors.password && touched.password ? (
                <S.ErrorInput>{errors.password}</S.ErrorInput>
              ) : null}
              <Field type="password" placeholder="Senha" name="password" />
              <a href="">Criar conta</a>
              <Button color="secondary" type="submit">
                Entrar
              </Button>
              <span>
                Não tem uma conta ? <a href="">Criar conta</a>
              </span>
            </Form>
          </S.Content>
        )}
      </Formik>
    </S.Wrapper>
  );
}
