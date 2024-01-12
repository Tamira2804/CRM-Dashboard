import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Mobile,
  Desktop,
  Wrapper,
  ContentBlock,
  SidebarBlock,
  Greeting,
} from "./Dashboard.styled";
import Logo from "components/Logo";
import UserInfo from "components/UserInfo";
import MobileBtn from "components/MobileBtn";
import SidebarList from "components/SideBar/Sidebar";

import { Outlet } from "react-router-dom";
import MobileMenu from "components/MobileMenu";

const user = {
  name: "Evano",
  position: "Project Manager",
  avatar: "http://picsum.photos/42",
};

const pages = ["Product", "Customers", "Income", "Promote", "Help"];

const Dashboard = () => {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  return (
    <Wrapper>
      <Mobile>
        <MobileBtn
          isOpen={isOpenMenu}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
        <Logo />
        <UserInfo user={user} />
      </Mobile>
      <Desktop>
        <Logo />
        <SidebarBlock>
          <SidebarList pages={pages} />
          <UserInfo user={user} />
        </SidebarBlock>
      </Desktop>
      <ContentBlock>
        <Greeting> Hello {user.name}👋🏼,</Greeting>
        <Outlet />
      </ContentBlock>
      {isOpenMenu && <MobileMenu pages={pages} />}
    </Wrapper>
  );
};

export default Dashboard;
