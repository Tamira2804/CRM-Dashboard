import React from "react";
import { createPortal } from "react-dom";
import { MobileMenuContainer } from "./MobileMenu.styled";
import SidebarList from "components/SideBar";

const mobileMenuRoot = document.getElementById("mobile-menu");

const MobileMenu = ({ pages }) => {
  return createPortal(
    <MobileMenuContainer>
      <SidebarList pages={pages} />
    </MobileMenuContainer>,
    mobileMenuRoot
  );
};

export default MobileMenu;
