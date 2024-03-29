import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  color: var(--text-primary);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Position = styled.p`
  color: var(--text-position);
  font-family: "Poppins", sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.12px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
