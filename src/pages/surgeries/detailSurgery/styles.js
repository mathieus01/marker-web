import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding: 0.5rem 0rem 0.5rem 0;
  }
  @media (max-width: 425px) {
    width: 100vw;
    padding: 0px;
    ${(props) =>
      !props.selected &&
      css`
        display: none;
      `}
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdfdfe;
  border-radius: 8px;
  border: 1px solid #e6ecf5;
  padding: 0.5rem 2rem;
  margin-top: 10px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);

  &:first-child {
    margin-top: 0px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 1rem;
  width: 100%;
  min-height: fit-content;
  border-bottom: 1px solid #eff2f7;

  label {
    height: fit-content;
    padding: 0px 2rem;
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 3px 0px 0px;
    color: #3c4858;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 6rem;

    button {
      height: 3rem;
      border-radius: 50%;
      padding: 5px;
      border: none !important;
      letter-spacing: 0.111rem;
      width: fit-content;
      background: transparent;

      &:hover {
        background: #efefef;
        transition: background-color 0.4s;
      }

      svg {
        color: #cb3441;
      }

      &:first-child {
        svg {
          color: #666;
        }
      }
      &:last-child {
        display: none;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 10px 5px;
    label {
      font-size: 1.8rem;
    }
    div {
      &:last-child {
        width: 15rem;
      }
      button {
        width: 4rem;
        &:last-child {
          display: block;
        }
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 1rem;
  color: #777879;
  border-bottom: 1px solid #e6ecf5;
  min-height: fit-content;

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    padding: 1rem 0px;
    justify-content: space-between;
    label {
      display: flex;
      align-items: center;
      svg {
        color: #078bf5;
        ${(props) =>
          props.type === '0' &&
          css`
            color: #078bf5;
          `}
        ${(props) =>
          props.type === '1' &&
          css`
            color: #ffab00;
          `}
        ${(props) =>
          props.type === '2' &&
          css`
            color: #ff5630;
          `}
      }

      span {
        font-size: 14px;
        margin-left: 5px;
        font-weight: 600;
        color: #3c4858;
      }
    }
    small {
      font-size: 12.8px;
      font-weight: 400;
      color: #8492a6;
      margin-top: 10px;
    }

    &:last-child {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    div {
      label {
        span {
          font-size: 1.8rem;
          margin-left: 4px;
        }
        svg {
          height: 20px;
          width: 20px;
        }
      }
      small {
        font-size: 12.8px;
      }
    }
  }
`;

export const ProcedureItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px 1rem;
  border-bottom: 1px solid #e6ecf5;

  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    color: #3c4858;
  }

  small {
    font-size: 11px;
    font-weight: 400;
    color: #8492a6;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const PhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  li {
    background-color: #f1f1f1;
    margin: 10px;
    text-align: center;
    width: 33%;
    min-width: 120px;
    line-height: 100px;
    font-size: 30px;
    list-style: none;
  }

  @media (max-width: 1256px) {
    li {
      min-width: 100px;
      line-height: 80px;
    }
  }
`;
