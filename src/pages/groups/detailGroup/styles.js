import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
  @media (max-width: 425px) {
    padding: 1rem 5px;
    padding-bottom: 0px;
    margin-top: 9vh;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #eff2f7;
  padding: 24px 20px;
  border-radius: 12px;

  @media (max-width: 1024px) {
    padding: 10px 8px;
  }

  @media (max-width: 425px) {
    overflow-x: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  div {
    span {
      font-size: 1.5rem;
      letter-spacing: 0.111rem;
      font-weight: 300;
    }

    h1 {
      font-size: 5rem;
    }

    p {
      margin-top: 0;
      color: #939393;
      font-size: 1.3rem;
      letter-spacing: 0.111rem;
      text-transform: uppercase;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #078bf5;
      height: 32px;
      width: fit-content;
      border-radius: 16px;
      padding: 0px 10px;
      color: #fff;
      line-height: 32px;
      border: 0;
      font-size: 12px;
      letter-spacing: 1.5px;

      &:hover {
        background: #078bfc;
      }

      span {
        font-size: 12.8px;
        color: #fff;
        margin-left: 5px;
      }
    }
  }
`;

export const UserList = styled.table`
  text-align: left;
  max-height: 55vh;

  thead th {
    font-size: 1.1rem;
    color: #636363;
    letter-spacing: 0.111rem;
    font-weight: normal;
    text-transform: uppercase;
    padding: 0.5rem 1rem;

    &:last-child {
      text-align: right;
    }
  }
`;

export const UserItem = styled.tr`
  td {
    border-top: 1px solid #d8d8d8;
    font-size: 12px;
    padding: 0px 1rem;
    background: transparent;
    color: #333;

    &:first-child {
      width: 80px;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

export const Button = styled.button`
  height: 4rem;
  width: 4rem;
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
