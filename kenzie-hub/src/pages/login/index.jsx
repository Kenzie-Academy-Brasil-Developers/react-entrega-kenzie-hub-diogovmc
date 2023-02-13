import React from "react";
import "./style";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../globalStyle";
import { Header, Main } from "./style";
import { FormLogin } from "../../components/FormLogin";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const HandleRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>Kenzie Hub</h1>
      </Header>
      <Main>
        <h2>Login</h2>
        <FormLogin />
        <footer>
          <p>Ainda não possui uma conta? </p>
          <Link to={"/register"}>Cadastre-se</Link>
        </footer>
      </Main>
    </>
  );
};
