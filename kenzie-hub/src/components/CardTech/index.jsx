import React from "react";
import "./style.js";
import { TechCard } from "./style";

export const CardTech = ({ title, status }) => {
  return (
    <TechCard>
      <h3>{title}</h3>
      <p>{status}</p>
    </TechCard>
  );
};
