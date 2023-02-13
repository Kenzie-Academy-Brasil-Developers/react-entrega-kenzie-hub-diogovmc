import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  h1 {
    color: var(--color-primary);
  }
  button {
    background-color: var(--grey-3);
    color: var(--grey-0);

    padding: 0.5rem 2rem;

    border: 0 0.076rem var(--grey-3);
    border-radius: 0.25rem;

    font-size: var(--headline);
    font-weight: 600;

    cursor: pointer;
  }
  button:hover {
    background-color: var(--grey-2);
  }
  @media (min-width: 800px) {
    width: 35%;
    margin: 2rem auto;
  }
`;
