import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const PageNumber = styled.div`
  margin: 0 5px;
  padding: 6px 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? "var(--violet)" : "var(--bg-pagination)"};
  color: ${(props) => (props.$active ? "var(--white)" : "var(--text-primary)")};
  border: 1px solid
    ${(props) => (props.$active ? "var(--violet)" : "var(--gray)")};
  border-radius: 4px;
`;
