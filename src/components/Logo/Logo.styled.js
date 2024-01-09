import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 54px;
`;

export const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  stroke: var(--text-primary);
`;

export const Title = styled.h1`
  color: var(--text-primary);

  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.26px;
`;

export const StyledSpan = styled.span`
  color: #838383;

  font-family: "Poppins", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;
`;
