import React from "react";
import { Section } from "./style";
export const ProfileInfo = ({ name, module }) => {
  return (
    <Section>
      <hr />
      <div>
        <h2>Olá, {name} </h2>
        <p>{module}</p>
      </div>
      <hr />
    </Section>
  );
};
