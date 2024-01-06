import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const SidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 306px;
  height: 100vh;
  background-color: var(--bg-primary);
  border: 1px solid #111;
  padding: 32px 36px 78px 28px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
`;
