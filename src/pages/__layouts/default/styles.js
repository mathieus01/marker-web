import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0px auto;
  max-width: 1420px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    pointer-events: none;
    height: 430px;
    background-color: #078bf5;
    /* background-color: #6e39ff; */
    border-bottom-left-radius: 5rem;
  }

  @media (max-width: 1440px) {
    max-width: 1248px;
  }
  @media (max-width: 1024px) {
    max-width: 1024px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    height: 94vh;
  }
`;
