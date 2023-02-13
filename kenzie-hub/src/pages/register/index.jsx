import React from "react";
import { Headers } from "../../components/Header";
import { GlobalStyle } from "../../globalStyle";
import { Main } from "./style";
import { RegisterForm } from "../../components/FormRegister";

export const RegisterPage = () => {
  return (
    <>
      <GlobalStyle />
      <Headers buttonValue="voltar"></Headers>
      <Main>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <RegisterForm />
      </Main>
    </>
  );
};
