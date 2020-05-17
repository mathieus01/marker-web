import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(31, 45, 61, 0.15);
  border-radius: 50px;
  padding: 2px 12px 2px 2px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    border-radius: 8px;
    min-width: 160px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    padding: 5px 14px;
    z-index: 1;

    p {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px 5px;
      color: #3c4858;

      svg {
        color: #3c4858;
        height: 16px !important;
        width: 16px !important;
      }

      span {
        display: block !important;
        color: #3c4858 !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        font-family: 'Montserrat', sans-serif !important;
      }
    }

    p:first-child {
      border: 0px;
    }

    @media (max-width: 768px) {
      padding: 5px 10px;
      svg {
        margin-right: 5px;
      }
    }
  }

  &:hover .dropdown-content {
    display: block;
    transition: 0.5s;
    right: 0px;
    top: 40px;
    left: 5px;
  }

  @media (max-width: 425px) {
    padding: 5px;

    .dropdown-content {
      p {
        font-size: 16px;
        padding: 10px 5px;
      }
    }

    &:hover .dropdown-content {
      left: -150px;
    }
  }
`;
