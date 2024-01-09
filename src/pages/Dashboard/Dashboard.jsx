import React from "react";
import {
  Wrapper,
  ContentBlock,
  SidebarBlock,
  Greeting,
} from "./Dashboard.styled";
import Logo from "components/Logo";
import SidebarList from "components/SideBar/Sidebar";
import UserInfo from "components/UserInfo";
import { Outlet } from "react-router-dom";

const user = {
  name: "Evano",
  position: "Project Manager",
  avatar: "http://picsum.photos/42",
};

const pages = ["Product", "Customers", "Income", "Promote", "Help"];

const Dashboard = () => {
  return (
    <Wrapper>
      <SidebarBlock>
        <div>
          <Logo />
          <SidebarList pages={pages} />
        </div>
        <UserInfo user={user} />
      </SidebarBlock>
      <ContentBlock>
        <Greeting> Hello {user.name}👋🏼,</Greeting>
        <Outlet />
      </ContentBlock>
    </Wrapper>
  );
};

export default Dashboard;
