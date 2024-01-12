import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  @media screen and (min-width: 768px) {
    gap: 12px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const PageNumber = styled.div`
  margin: 0 4px;
  padding: 4px 6px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? "var(--violet)" : "var(--bg-pagination)"};
  color: ${(props) => (props.$active ? "var(--white)" : "var(--text-primary)")};
  border: 1px solid
    ${(props) => (props.$active ? "var(--violet)" : "var(--gray)")};
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
