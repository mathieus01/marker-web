import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 0rem 20px 1rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
  @media (max-width: 425px) {
    padding: 1rem 10px;
    margin-top: 9vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 0rem;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  h5 {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
  }

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 243px;
  min-height: 243px;
  background: transparent;
  @media (max-width: 990px) {
    flex-direction: column;
    margin-bottom: 10px;
    max-height: 550px;
    min-height: 450px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 20px);
  max-height: 223px;
  margin: 0px 10px 20px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  background: #ffffff;
  border: 1px solid #eff2f7;
  border-radius: 6px;

  header {
    display: flex;
    width: 100%;
    max-height: 75px;
    padding: 20px 15px;
    border-bottom: 1px solid #eff2f7;

    div {
      display: flex;
      flex-direction: column;
      height: fit-content;

      span {
        font-size: 16px;
        font-weight: 600;
        color: #3c4858;
      }
      small {
        font-size: 12.8px;
        font-weight: 400;
        color: #8492a6;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #078bf5;
        height: 32px;
        width: 100%;
        border-radius: 16px;
        color: #fff;
        line-height: 32px;
        border: 0;
        font-size: 12px;
        letter-spacing: 0.5px;

        &:hover {
          background: #078bfc;
        }

        span {
          font-size: 12.8px;
          color: #fff;
          margin-left: 5px;
        }
      }

      &:first-child {
        width: 70%;
      }
      &:last-child {
        width: 30%;
        padding: 0px 10px;
        align-items: flex-end;
      }
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 18px 15px;
    align-items: center;
    border-bottom: 1px solid #eff2f7;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: fit-content;

      h1 {
        font-size: 16px;
        font-weight: 600;
        color: #3c4858;
      }
      span {
        font-size: 12.8px;
        font-weight: 400;
        color: #8492a6;
      }
    }
    label {
      display: flex;
      width: 100%;
      font-size: 13px;
      align-items: center;
      font-weight: 700;
      color: #3c4858;
      height: fit-content;

      svg {
        margin-right: 5px;
      }
    }
    small {
      width: 45%;
      height: fit-content;
      font-size: 13px;
      color: #8492a6;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 18px 15px;

    button {
      display: flex;
      align-items: center;
      background: transparent;
      width: fit-content;
      padding: 0px 5px;
      color: #078bf5;
      line-height: 32px;
      border: 0;
      font-size: 16px;
      font-weight: 500;

      svg {
        margin-right: 5px;
      }
    }
  }

  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 990px) {
    margin-right: 0px;
    margin-left: 0px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;

  li {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eff2f7;
    margin: 2px 0px;
    padding: 10px 20px;
    color: #717171;

    &:hover {
      background: #f5f6fa;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    div:last-child {
      flex-direction: row;
    }
  }
`;

export const LinkButton = styled(Link)`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  color: #616161;

  &:hover {
    background: rgba(63, 81, 181, 0.04);
  }
`;

export const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  padding: 5px;
  border: none !important;
  letter-spacing: 0.111rem;
  background: transparent;

  &:hover {
    background: #efefef;
    transition: background-color 0.4s;
  }

  @media (max-width: 425px) {
    height: 35px;
    width: 35px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const Surgeries = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem 0px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 990px) {
    margin-bottom: 55px;
    flex-grow: 1;
  }
`;
