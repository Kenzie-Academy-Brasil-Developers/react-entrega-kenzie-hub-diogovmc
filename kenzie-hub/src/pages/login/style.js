import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  background-color: var(--grey-4);

  h1 {
    color: var(--color-primary);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  padding: 2rem;
  background-color: var(--grey-3);

  color: var(--grey-0);

  border-radius: 0.25rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 2rem;
    gap: 1rem;

    width: 100%;
    fieldset {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      border: none;
    }
    label {
      font-size: var(--title-3);
    }
    input {
      margin-bottom: 1rem;
      width: 100%;
      padding: 1rem;

      background-color: var(--grey-2);
      color: var(--grey-0);

      border: solid 0.076rem var(--grey-0);
      border-radius: 0.25rem;

      font-size: var(--title-2);

      cursor: pointer;
    }
    input:focus {
      outline: solid 0.076rem var(--color-primary-focus);
      border: solid 0.076rem var(--color-primary-focus);
    }
    span {
      font-size: var(--headline);
      color: var(--grey-1);

      position: absolute;
      bottom: 0;
    }
    button {
      display: flex;
      justify-content: center;

      width: 100%;
      padding: 1rem;

      border-radius: 0.25rem;
      border: solid 0.063rem var(--color-primary);

      background-color: var(--color-primary);
      color: var(--grey-0);

      font-size: var(--title1);
      font-weight: 500;

      cursor: pointer;
    }
    button:hover {
      background-color: var(--color-primary-focus);
    }
  }

  footer {
    margin-top: 1rem;
    gap: 1rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: var(--grey-1);

      font-weight: 600;
      line-height: 1.125rem;

      font-size: var(--title-3);
    }
    a {
      display: flex;
      justify-content: center;

      background-color: var(--grey-1);
      color: var(--grey-0);

      padding: 1rem;
      width: 100%;

      border: solid 0.063rem var(--grey-1);
      border-radius: 0.25rem;
      font-size: var(--title1);

      cursor: pointer;
    }
    a:hover {
      background-color: var(--grey-2);
    }
  }

  @media (min-width: 800px) {
    width: 35%;
    height: 80%;

    padding: 2rem;
    margin: 0 auto;
  }
`;
