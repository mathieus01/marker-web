import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  align-items: center;
  padding: 0rem 20px;

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
`;

export const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;

  div {
    display: flex;
    width: 100%;
    align-items: center;

    h5 {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
    }

    label {
      margin-left: 2.4rem;
      span {
        font-size: 2rem;

        &:first-child {
          font-weight: 600;
          font-size: 2.4rem;
          margin-right: 5px;
        }
      }
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: none !important;
  background: #fff;

  &:hover {
    background: #efefef;
    transition: background-color 0.4s;
  }

  svg {
    color: #333333;
  }
`;

export const LinkButton = styled(Link)`
  height: 4rem;
  border-radius: 50%;
  padding: 1rem;
  border: none !important;
  letter-spacing: 0.111rem;
  background: #fff;

  &:hover {
    background: #efefef;
    transition: background-color 0.4s;
  }

  svg {
    color: #333333;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 83.7vh;
  width: 100%;
  border: 1px solid #e6ecf5;
  border-radius: 12px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  margin: 24px 0px 0px;
  background: #ffffff;

  @media (max-width: 425px) {
    max-height: 78.5vh;
    margin: 16px 0px 0px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e6ecf5;

  span {
    font-size: 16px;
    width: 100%;
    font-weight: 500;
    color: #3c4858;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;

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

export const Item = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 65px;
  justify-content: space-around;
  font-size: 1.2rem;
  padding: 10px 24px;
  border-bottom: 1px solid #e6ecf5;
  color: #3c4858;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    img {
      height: 40px;
      width: 40px;
    }

    strong {
      font-size: 14px;
      font-weight: 500;
      color: #3c4858;
      text-transform: uppercase;
    }
    small {
      font-size: 12.8px;
      font-weight: 400;
      color: #8492a6;
    }

    span {
      font-size: 12.8px;
      font-weight: 400;
      color: #8492a6;
    }

    &:first-child {
      width: 20%;
      margin-right: 5px;
    }

    &:last-child {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }

  @media (max-width: 990px) {
    padding: 10px 8px;
  }
  @media (max-width: 425px) {
    width: 100%;
    div:nth-child(3) {
      display: none;
    }
    div:last-child {
      width: 40%;
      justify-content: space-around;
    }
  }
`;
