import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  padding: 30px 44px 40px 38px;
`;

const Product = () => {
  return <Wrapper>Product</Wrapper>;
};

export default Product;
