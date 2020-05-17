import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 24px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
  margin-bottom: 24px;

  div:first-child {
    span {
      display: none;
    }
  }

  @media (max-width: 976px) {
    background: transparent;
  }

  @media (max-width: 425px) {
    padding: 10px;
    z-index: 5;
    position: fixed;
    box-shadow: 0 1px 1px #6e00ff;
    width: 100%;
    background: #6e00ff;

    div:first-child {
      span {
        display: flex;
        font-size: 5rem;
        font-family: 'Kaushan Script';
        letter-spacing: 3px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
  @media (max-width: 375px) {
    padding: 5px;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
  span {
    display: flex !important;
    color: #fff;
    font-size: 12.8px;
    font-weight: 600;
    margin-left: 5px;
  }

  @media (max-width: 425px) {
    span {
      display: none !important;
      margin-left: 0px;
    }
  }
`;
