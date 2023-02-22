import styled from "styled-components";

export const TechCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-4);
  color: var(--grey-0);

  border-radius: 0.25rem;

  padding: 1rem;
  h3 {
    font-size: var(--tittle3);
  }
  p {
    font-size: var(--headline);
    color: var(--grey-1);
    font-weight: 600;
  }
  :hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }
`;
