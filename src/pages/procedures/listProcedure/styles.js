import styled from 'styled-components';
import { Chip } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 470px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  div {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  max-width: 470px;
  max-height: 300px;
  overflow-y: auto;

  border: 1px solid #e6ecf5;
  border-radius: 0px 0px 5px 5px;
  padding: 1rem 0rem 0.5rem;
  box-shadow: 0px 0px 10px #e6ecf5;

  .selected {
    background: #42a5f5;
    color: #fff;

    &:hover {
      background: #05a9ff;
    }

    span {
      color: #fff;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.2rem;
  color: #333;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.5rem 1rem;

  cursor: pointer;

  &:hover {
    background: #f5f6fa;
    box-shadow: 0px 0px 10px #e6ecf5;
  }

  p {
    padding: 0.3rem 0px;
    color: #444;
    font-weight: 500;
  }

  span {
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export const ChipCustom = styled(Chip)`
  max-width: 180px;
`;

export const Tag = styled.span`
  padding: 10px 10px 8px;
  margin: 2px !important;
  font-size: 12.8px;
  font-weight: 700;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  background: #078bf5;
  color: #ffffff;

  &:hover {
    box-shadow: 0px 0px 10px #ccc;
    background: #078bfc;
  }
`;
