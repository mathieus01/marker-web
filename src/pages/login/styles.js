import styled from 'styled-components';

export const Container = styled.div`
  .login {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;
    min-height: 385px;
    width: 90vw;
    max-width: 380px;
    align-items: center;
    border: 1px solid #eeeeee;
    box-shadow: 0.3rem 0.25rem 1rem rgba(0, 0, 0, 0.2);
    padding: 24px;
    background: #fff;
    border-radius: 12px;

    .content {
      padding: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 60%;
      width: 100%;

      .titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        span {
          font-size: 30px;
          color: #3c4858;
          font-weight: 600;
        }

        small {
          font-size: 14px;
          color: #8492a6;
          font-weight: 400;
          margin-top: 5px;
        }
      }

      input {
        margin: 15px 0px 0px;
        border: 1px solid #e6ecf5;
        width: 100%;
        padding: 12px 20px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 1.5;
        box-shadow: none;
        font-weight: 400;
        color: #8492a6;
        transition: border-bottom 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:focus {
          border-bottom: 2px solid #6e39ff;
        }
      }

      button {
        width: 100%;
        border-radius: 10px;
        padding: 8px 10px;
        margin-top: 15px;
        border: none;
        background: #6e39ff;
        color: #fff;
        font-size: 16px;
        letter-spacing: 0.5px;
        font-weight: 500;
        box-shadow: 0.3rem 0.25rem 1rem rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }

      a {
        margin: 15px 0 0;
        text-decoration: none;
        font-size: 16px;
        font-weight: normal;
        color: #6e39ff;

        letter-spacing: 0.3px;
      }
    }
    .bottom {
      font-size: 16px;
      color: #797979;

      a {
        text-decoration: none;
        color: #fff;
        background: #6e39ff;
        padding: 6px 14px;
        border-radius: 10px;
        letter-spacing: 0.5px;
        font-weight: 500;
      }
    }
  }
`;
