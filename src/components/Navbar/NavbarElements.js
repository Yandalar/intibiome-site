import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background: #fff;
  height: 129px;
  top: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  height: 80px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const MenuButton = styled.div`
  opacity: 0;
  color: #7b7070;
  stroke: #7b7070;
  stroke-width: 3;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    opacity: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  background: #389cd6;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-weight: bold;
`;

export const NavItem = styled.li`
  color: #fff;
  padding: 0 25px;
  cursor: pointer;
`;

export const NavbarChildContainer = styled.nav`
  background: #9d8e8e;
  height: ${({ isOpen }) => (isOpen ? "49px" : "0")};
  position: absolute;
  left: 0;
  margin-top: 13px;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: 0.3s all;
  letter-spacing: 0.32px;
`;

export const NavbarChildWrapper = styled.div`
  width: 1140px;
  margin: auto;
`;

export const NavbarChildMenu = styled.ul`
  display: flex;
  margin-top: 14px;
  color: #fff;
  list-style: none;
`;

export const NavbarChildItem = styled.li`
  padding: 0 25px;
  font-size: 16px;
  font-weight: bold;
`;
