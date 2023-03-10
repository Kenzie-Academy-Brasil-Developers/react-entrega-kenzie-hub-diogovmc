import styled from "styled-components";

export const Modals = styled.form`
  width: 95%;
  position: fixed;

  z-index: 1040;
  top: 20%;
  left: 2%;

  background-color: var(--grey-3);

  border: 1px solid var(--grey-3);
  border-radius: 0.25rem;
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background-color: var(--grey-2);
    color: var(--grey-0);

    font-size: var(--headline);
    font-weight: 600;
    .close {
      background-color: transparent;
      border: none;
      color: var(--grey-1);
      font-size: 0.803rem;
    }
  }
  .modal-main {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem;

    fieldset {
      padding-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      border: none;

      position: relative;
      span {
        position: absolute;
        bottom: 0;

        color: var(--grey-1);
        font-size: var(--headline);
      }
      input {
        background-color: var(--grey-2);

        border: solid 1px var(--grey-2);
        border-radius: 0.25rem;

        padding: 1rem;

        font-size: var(--title3);
      }
      input::placeholder {
        color: var(--grey-0);
      }
    }
    label {
      margin-top: 1rem;
      color: var(--grey-0);
      font-size: var(--headline);
    }
    select {
      background-color: var(--grey-2);

      border: solid 1px var(--grey-2);
      border-radius: 0.25rem;

      padding: 1rem;

      font-size: var(--title3);
    }
    select-selected {
      color: var(--grey-0);
    }
  }
  .submit {
    margin: 1rem 2%;
    padding: 1rem;

    background-color: var(--color-primary);
    color: var(--grey-0);

    border: solid 1px var(--color-primary);
    border-radius: 0.25rem;

    width: 96%;

    font-size: var(--title3);
  }

  @media (min-width: 800px) {
    width: 50%;
    left: 25%;
  }
`;
