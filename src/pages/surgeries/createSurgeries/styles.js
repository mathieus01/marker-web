import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 100%;
  max-height: 100vh;
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-height: 90vh;
  }
  @media (max-width: 425px) {
    width: 94vw;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0px;

  input {
    margin-top: 8px;
  }

  input:focus {
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid #42a5f5;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    color: #3c4858;
  }

  &:first-child {
    padding-top: 0px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 0px;
  margin-top: 15px;
  border-top: 1px solid #e6ecf5;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #6e00ff;
    width: fit-content;
    border-radius: 16px;
    padding: 0px 18px;
    color: #fff;
    line-height: 36px;
    border: 0;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 500;

    &:hover {
      background: #6e39ff;
    }

    &:last-child {
      color: #ff5630 !important;
      border: 0px !important;
      background: transparent;
    }
`;
