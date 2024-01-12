import React from "react";
import { MenuButton, Svg } from "./MobileBtn.styled";
import sprite from "../../assets/images/icons/sprite.svg";

const MobileBtn = ({ isOpen, onClick }) => {
  return (
    <MenuButton onClick={onClick}>
      {isOpen ? (
        <Svg>
          <use href={`${sprite}#icon-cross-small`} />
        </Svg>
      ) : (
        <Svg>
          <use href={`${sprite}#icon-menu-hamburger`} />
        </Svg>
      )}
    </MenuButton>
  );
};

export default MobileBtn;
