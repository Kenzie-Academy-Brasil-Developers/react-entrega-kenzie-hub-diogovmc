import styled from "styled-components";

import { GlobalStyle } from "../../globalStyle";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: max-content;

  color: var(--grey-0);
  background-color: var(--grey-3);

  border-radius: 0.25rem;

  margin: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
    padding-top: 2rem;

    p {
      font-size: var(--headline);
      color: var(--grey-1);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;

    fieldset {
      display: flex;
      flex-direction: column;
      border: none;
      gap: 0.5rem;
    }
    label {
      font-size: var(--headline);
    }
    input {
      background-color: var(--grey-2);
      color: var(--grey-0);

      font-size: var(--title3);

      padding: 0.8rem;

      border: solid 0.063rem var(--grey-2);
      border-radius: 0.25rem;
    }
    span {
      font-size: var(--headline);
      color: var(--grey-1);
    }
    select {
      background-color: var(--grey-2);
      color: var(--grey-1);

      font-size: var(--title3);

      padding: 0.8rem;

      border: solid 0.063rem var(--grey-2);
      border-radius: 0.25rem;
    }
    button {
      padding: 0.8rem;
      width: 100%;

      background-color: var(--color-primary-negative);
      color: var(--grey-0);

      font-size: var(--title3);
      font-weight: 600;

      border: solid 0.063rem var(--color-primary-negative);
      border-radius: 0.25rem;

      cursor: pointer;
    }
    button:hover {
      background-color: var(--color-primary);
    }
  }
  @media (min-width: 800px) {
    width: 35%;
    margin: 0 auto;
  }
`;
