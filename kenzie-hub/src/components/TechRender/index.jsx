import React from "react";
import { useContext } from "react";
import { userContext } from "../../contexts/userContexs";
import { CardTech } from "../CardTech";
import "./style.js";
import { CardContainer } from "./style";

export const TechRender = () => {
  const { user } = useContext(userContext);

  return (
    <CardContainer>
      {user.techs.map((tech) => (
        <CardTech key={tech.id} title={tech.title} status={tech.status} />
      ))}
    </CardContainer>
  );
};
