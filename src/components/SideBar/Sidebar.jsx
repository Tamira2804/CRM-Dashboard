import React from "react";
import { List, StyledLink, Icon, Category, Text } from "./Sidebar.styled";
import sprite from "../../assets/images/icons/sprite.svg";

const SidebarList = ({ pages }) => {
  return (
    <List className="sidebar-list">
      {pages.map((page, index) => (
        <li key={index}>
          <StyledLink
            to={`/${page.toLowerCase().replace(/\s/g, "")}`}
            $activeClassName="active"
          >
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
        </li>
      ))}
    </List>
  );
};

export default SidebarList;
