import React from "react";
import styled from "styled-components";

const Promote = () => {
  return (
    <Wrapper>
      <Title>Promote</Title>
    </Wrapper>
  );
};

export default Promote;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 30px 44px 40px 38px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
