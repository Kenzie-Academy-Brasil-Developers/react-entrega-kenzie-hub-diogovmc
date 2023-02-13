import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    border: 1px solid var(--grey-3);
  }
  div {
    margin: 2.5rem 2rem;
  }
  h2 {
    color: var(--grey-0);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    color: var(--grey-1);
    font-size: var(--headline);
    font-weight: 600;
  }
  @media (min-width: 800px) {
    align-items: center;
    div {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      width: 55%;
    }
    p {
    }
  }
`;
