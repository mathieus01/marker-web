import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .labels {
    span {
      font-size: 4.8rem;
      letter-spacing: 0.5px;
      font-weight: bold;
      color: #616161;
    }
    small {
      margin-left: 20px;
      font-size: 2.4rem;
      letter-spacing: 0.1rem;
      color: #c1c1c1;
    }
  }

  @media (min-width: 1060px) {
    margin-top: 10px;
    padding: 15px 0px 25px;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
    padding: 5px 0px 0px 5px;
  }
`;
