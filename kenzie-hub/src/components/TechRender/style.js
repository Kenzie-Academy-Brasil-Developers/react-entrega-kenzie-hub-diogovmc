import styled from "styled-components";

export const CardContainer = styled.ul`
  margin: 2rem;
  padding: 1rem;

  border-radius: 0.25rem;

  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--grey-3);

  @media (min-width: 800px) {
    width: 55%;
  } ;
`;
