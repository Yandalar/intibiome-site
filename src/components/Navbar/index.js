import React, { useState } from "react";
import IMG from "../../images";
import {
  ButtonsWrapper,
  Header,
  HeaderWrapper,
  MenuButton,
  NavbarChildContainer,
  NavbarChildItem,
  NavbarChildMenu,
  NavbarChildWrapper,
  NavbarContainer,
  NavItem,
  NavMenu,
} from "./NavbarElements";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";

const AboutUsSubMenu = () => {
  return (
    <NavbarChildMenu>
      <NavbarChildItem data-testid="child_navbar">
        brand philosophy
      </NavbarChildItem>
      <NavbarChildItem>product tecnology</NavbarChildItem>
    </NavbarChildMenu>
  );
};

const OurProductsSubMenu = () => {
  return (
    <NavbarChildMenu>
      <NavbarChildItem>all products</NavbarChildItem>
      <NavbarChildItem>intibiome wellness</NavbarChildItem>
      <NavbarChildItem>intibiome active</NavbarChildItem>
      <NavbarChildItem>intibiome agecare</NavbarChildItem>
    </NavbarChildMenu>
  );
};

const IntimateHealthSubMenu = () => {
  return (
    <NavbarChildMenu>
      <NavbarChildItem>article 1</NavbarChildItem>
      <NavbarChildItem>article 2</NavbarChildItem>
      <NavbarChildItem>article 3</NavbarChildItem>
      <NavbarChildItem>faq</NavbarChildItem>
    </NavbarChildMenu>
  );
};

const NavbarItemHoverable = ({ childMenu, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavItem
      {...props}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {childMenu && (
        <>
          <FiChevronDown
            style={{
              stroke: "#fff",
              strokeWidth: "4",
              padding: "0 10px",
              marginBottom: "-3px",
            }}
          />

          <NavbarChildContainer isOpen={isOpen}>
            <NavbarChildWrapper>{childMenu}</NavbarChildWrapper>
          </NavbarChildContainer>
        </>
      )}
    </NavItem>
  );
};

const Navbar = ({ toggle, sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <NavbarContainer>
        <HeaderWrapper>
          <Header>
            <MenuButton onClick={toggle}>
              {sidebarOpen ? (
                <FiX data-testid="close_button" />
              ) : (
                <FiMenu data-testid="menu_button" />
              )}
            </MenuButton>
            <img
              src={IMG.logo}
              alt="brand logo"
              onClick={() => setSidebarOpen(false)}
            />
            <img src={IMG.search_icon} alt="search icon" />
          </Header>
        </HeaderWrapper>
        <ButtonsWrapper>
          <NavMenu>
            <NavbarItemHoverable
              childMenu={<AboutUsSubMenu />}
              data-testid="aboutUs_navBar_button"
            >
              about us
            </NavbarItemHoverable>
            <NavbarItemHoverable childMenu={<OurProductsSubMenu />}>
              our products
            </NavbarItemHoverable>
            <NavbarItemHoverable childMenu={<IntimateHealthSubMenu />}>
              intimate health
            </NavbarItemHoverable>
            <NavbarItemHoverable>contact us</NavbarItemHoverable>
          </NavMenu>
        </ButtonsWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
