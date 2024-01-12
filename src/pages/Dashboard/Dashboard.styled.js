import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Mobile = styled.div`
  display: flex;
  min-width: 325px;
  justify-content: space-between;
  padding: 12px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Desktop = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 306px;
    padding: 36px 28px 36px 28px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const SidebarBlock = styled.div`
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
  padding: 12px;

  @media screen and (min-width: 768px) {
    padding: 36px 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 36px 95px 41px 71px;
  }
`;

export const Greeting = styled.p`
  color: var(--text-primary);
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 51px;
`;
