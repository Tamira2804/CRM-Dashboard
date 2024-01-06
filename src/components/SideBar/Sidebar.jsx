import React from "react";
// import { Link } from "react-router-dom";
import { List, Item, StyledLink, Icon, Category, Text } from "./Sidebar.styled";
import sprite from "../../assets/images/icons/sprite.svg";

const pages = ["Product", "Customers", "Income", "Promote", "Help"];

const SidebarList = (pges) => {
  return (
    <List className="sidebar-list">
      {pages.map((page, index) => (
        <Item key={index}>
          <StyledLink to={`/${page.toLowerCase().replace(/\s/g, "")}`}>
            <Category>
              <Icon>
                <use href={`${sprite}#icon-${page.toLowerCase()}`} />
              </Icon>
              <Text>{page}</Text>
            </Category>
            <Icon>
              <use href={`${sprite}#icon-chevron-right-2`} />
            </Icon>
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};

export default SidebarList;
