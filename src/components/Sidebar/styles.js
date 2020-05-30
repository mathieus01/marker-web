import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  width: 210px;
  min-width: 210px;
  color: #fff;

  .logo {
    display: flex;
    padding: 0.8rem 2.5rem;
    align-items: center;

    span {
      font-size: 38px;
      font-family: 'Kaushan Script';
      letter-spacing: 3px;
      font-weight: 500;
      color: #fff;
    }
  }

  @media (max-width: 1440px) {
    min-width: 200px;
    width: 200px;
  }
  @media (max-width: 1280px) {
    min-width: 170px;
    width: 170px;
  }
  @media (max-width: 1024px) {
    min-width: 150px;
    width: 150px;
  }
  @media (max-width: 1023px) {
    margin-left: 0px;
  }
  @media (max-width: 990px) {
    /* display: none; */
    bottom: 0;
    width: 100vw;
    height: 8rem;
    min-width: 100vw;
    flex-direction: row;
    border-top: 1px solid #e6ecf5;

    .logo {
      display: none;
    }
    .top {
      width: 100%;
      height: 100%;
    }
    z-index: 5;
    position: fixed;
    box-shadow: 0 -1px 10px rgba(175, 175, 175, 0.4);
    background: #fafafa;
  }
  @media (max-width: 375px) {
    height: 6vh;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 35px;

  @media (max-width: 990px) {
    margin-top: 0px;
    flex-direction: row;
    height: 100%;
    box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  }
`;

export const NavItem = styled.li`
  padding: 2rem 2.5rem;

  a {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: #fff;

    span {
      margin-left: 10px;
    }
    svg {
      height: 28px;
      width: 28px;
    }
  }
  &:hover {
    span {
      color: #ddd;
    }

    svg {
      color: rgba(31, 45, 61, 0.65);
    }
  }

  @media (max-width: 990px) {
    flex-direction: row;
    width: 100%;
    padding: 0px;

    a {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      span {
        font-size: 10px;
        margin: 0px;
        margin-top: 5px;
        color: #3c4858;
      }
      svg {
        color: #8492a6;
        width: 24px;
        height: 24px;
      }
    }

    &:hover {
      color: #3c4858;
    }
  }
`;
