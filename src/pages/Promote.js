import React from "react";
import styled from "styled-components";

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

const Promote = () => {
  return <Wrapper>Promote</Wrapper>;
};

export default Promote;
