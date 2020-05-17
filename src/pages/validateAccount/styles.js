import styled from "styled-components";
import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  .validate {
    height: 220px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eeeeee;
    box-shadow: 0.3rem 0.25rem 1rem rgba(0, 0, 0, 0.2);
    padding: 20px 30px 35px;
    background: #fff;
    border-radius: 15px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 30px;
        color: #797979;
        letter-spacing: 0.5px;
      }

      small {
        font-size: 14px;
        color: #8f8f8f;
        margin-top: 5px;
      }
    }

    ${Spinner} {
      height: 58px;
      margin-top: 20px;
    }

    img {
      margin-top: 20px;
      height: 48px;
    }
  }
`;
