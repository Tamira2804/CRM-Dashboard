import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    margin-bottom: 51px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29px;
  height: 29px;
  stroke: var(--text-primary);

  @media screen and (min-width: 768px) {
    width: 37px;
    height: 37px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h1`
  color: var(--text-primary);

  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.26px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledSpan = styled.span`
  color: #838383;

  font-family: "Poppins", sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
