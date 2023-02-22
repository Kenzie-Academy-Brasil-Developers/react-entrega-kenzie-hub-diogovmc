import styled from "styled-components";

export const HeaderHome = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  h1 {
    color: var(--color-primary);
  }
  a {
    display: flex;
    align-items: center;

    background-color: var(--grey-3);
    color: var(--grey-0);

    padding: 0.5rem 2rem;

    border: 0 0.076rem var(--grey-3);
    border-radius: 0.25rem;

    font-size: var(--headline);
    font-weight: 600;

    cursor: pointer;
  }

  a:hover {
    background-color: var(--grey-2);
  }
  @media (min-width: 800px) {
    width: 55%;
    margin: 2rem auto;
  }
`;

export const Main = styled.main`
  position: relative;

  .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2rem;

    color: var(--grey-0);
  }
  .addTech {
    background-color: var(--grey-3);

    border: solid 1px var(--grey-3);
    border-radius: 0.25rem;

    padding: 1rem;

    cursor: pointer;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .titleContainer {
      width: 55%;
    }
  }
`;
