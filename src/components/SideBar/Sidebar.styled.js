import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.li``;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 11px 8px 11px 11px;
  border-radius: 8px;

  &:hover,
  &:active {
    background-color: var(--violet);
    svg {
      stroke: var(--white);
    }
  }
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  stroke: var(--text-secondary);
`;

export const Text = styled.p`
  color: var(--text-secondary);
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;
