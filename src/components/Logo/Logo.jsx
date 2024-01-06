import React from "react";
import { Wrapper, Icon, Title, StyledSpan } from "./Logo.styled";
import sprite from "../../assets/images/icons/sprite.svg";

const Logo = () => {
  return (
    <Wrapper>
      <Icon>
        <use href={`${sprite}#icon-setting-1`} />
      </Icon>
      <Title>
        Dashboard <StyledSpan>v.01</StyledSpan>
      </Title>
    </Wrapper>
  );
};

export default Logo;
