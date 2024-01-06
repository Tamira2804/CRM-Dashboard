import React from "react";
import { Wrapper, ContentBlock, SidebarBlock } from "./Dashboard.styled";
import Logo from "components/Logo";
import SidebarList from "components/SideBar/Sidebar";
import UserInfo from "components/UserInfo";
import { Outlet } from "react-router-dom";

const user = {
  name: "Evano",
  position: "Project Manager",
  avatar: "http://picsum.photos/42",
};

const Dashboard = () => {
  return (
    <Wrapper>
      <SidebarBlock>
        <Logo />
        <SidebarList />
        <UserInfo user={user} />
      </SidebarBlock>
      <ContentBlock>
        <h2> Hello {user.name}</h2>
        <Outlet />
      </ContentBlock>
    </Wrapper>
  );
};

export default Dashboard;
