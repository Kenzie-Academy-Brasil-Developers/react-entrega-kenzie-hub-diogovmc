import React from "react";
import { GlobalStyle } from "../../globalStyle";
import { Header } from "./style";
import { useNavigate } from "react-router-dom";

export const Headers = ({ buttonValue }) => {
  const navigate = useNavigate();

  const HandleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>Kenzie Hub</h1>
        <button onClick={HandleBack}>{buttonValue}</button>
      </Header>
    </>
  );
};
