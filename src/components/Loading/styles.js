import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  margin-top: 8px;
  height: 48px;
  animation: ${rotate360} 1s linear infinite;
  position: absolute;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
