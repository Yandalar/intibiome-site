import React from "react";
import {
  SidebarContainer,
  SidebarItem,
  SidebarItemsList,
} from "./SidebarElements";

const Sidebar = ({ sidebarOpen, toggle }) => {
  return (
    <>
      <SidebarContainer sidebarOpen={sidebarOpen} onClick={toggle}>
        <SidebarItemsList>
          <SidebarItem data-testid="sidebar_content">
            brand philosophy
          </SidebarItem>
          <SidebarItem>product tecnology</SidebarItem>
          <SidebarItem>all products</SidebarItem>
          <SidebarItem>intibiome wellness</SidebarItem>
          <SidebarItem>intibiome active</SidebarItem>
          <SidebarItem>intibiome agecare</SidebarItem>
          <SidebarItem>article 1</SidebarItem>
          <SidebarItem>article 2</SidebarItem>
          <SidebarItem>article 3</SidebarItem>
          <SidebarItem>faq</SidebarItem>
          <SidebarItem>contact us</SidebarItem>
        </SidebarItemsList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
