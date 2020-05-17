import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 91vh;
  width: 100%;
  padding: 1rem 6rem;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 0px 1.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LinkRow = styled(Link)`
  color: #616161;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  color: #616161;

  span {
    font-size: 2.4rem;
    letter-spacing: 0.122rem;
  }

  button {
    padding: 1rem 1.5rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e6ecf5;
    border-left: 4px solid #2ec22e;
    border-radius: 5px 0px 0px 5px;
    margin-bottom: 1rem;
    font-size: 1.4rem;

    div {
      display: flex;
      flex-direction: column;
    }

    div:first-child {
      margin-right: 1rem;
    }

    &:hover {
      background: #f5f6fa;
    }
  }
`;

export const ChipCustom = styled(Chip)`
  font-size: 1.25rem !important;
`;
