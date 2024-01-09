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

  padding: 36px 28px 78px 28px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--bg-secondary);
  padding: 36px 95px 41px 78px;

  border: 2px solid green;
`;

export const Greeting = styled.p`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 51px;
`;
