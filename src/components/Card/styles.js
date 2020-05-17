import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
  border: 1px solid #e6ecf5;
  border-radius: 10px;
  padding: 1rem 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    height: 32vh;

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    height: 25vh;

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 25vh;
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    overflow-x: auto;

    .empty-data {
      display: flex;
      align-items: center;
      border-left: 4px solid #c2323d;
    }
  }
`;
