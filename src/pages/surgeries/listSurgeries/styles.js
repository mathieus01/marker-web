import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  max-width: 415px;
  padding: 5px 0px;
  background: #fff;
  border: 1px solid #e6ecf5;
  border-radius: 8px;
  margin-right: 1.5rem;
  max-height: 475px;
  min-height: 475px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);

  @media (max-width: 1024px) {
    width: 50rem;
  }
  @media (max-width: 425px) {
    width: 100vw;
    padding: 0px;
    margin-right: 0px;
    transition: display 1.5s;

    ${(props) =>
      props.selected &&
      css`
        display: none;
        padding: 0px;
      `}
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6ecf5;
  padding: 10px 5px;
  width: 100%;
  min-height: fit-content;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #3c4858;
    text-transform: uppercase;
    padding: 3px 0px 0px;
  }

  button {
    svg {
      color: #3c4858;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-height: 65.4vh;
  overflow-y: auto;
  transition: width 1.5s;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #e6ecf5;
  background: #ffffff;
  cursor: pointer;
  height: 100%;
  min-height: 70px;

  &:last-child {
    border-bottom: 0px;
  }

  &:hover {
    background: #f1f1f1;
  }

  ${(props) =>
    props.selected &&
    css`
      background: #f1f1f1 !important;
    `}

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;

    strong {
      font-size: 14px;
      font-weight: 600;
      color: #3c4858;
      text-transform: uppercase;
    }
    small {
      font-size: 12.8px;
      font-weight: 400;
      color: #8492a6;
    }

    span {
      font-size: 12px;
      font-weight: 400;
      color: #8492a6;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: flex-end;
    justify-content: space-between;

    button {
      width: fit-content;
    }
    label {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
      font-weight: 500;
    }
  }

  @media (max-width: 1256px) {
    width: 100%;
    height: 100%;
    min-height: 8vh;

    div:first-child {
      width: 70%;
    }
    div:last-child {
      width: 30%;
      label {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  padding: 5px;
  border: none !important;
  letter-spacing: 0.111rem;
  background: transparent;

  &:hover {
    background: #efefef;
    transition: background-color 0.4s;
  }

  svg {
    color: #cb3441;
  }
`;
