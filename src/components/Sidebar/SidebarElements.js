import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #389cd6;
  top: 70px;
  right: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "100%" : "0")};
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-100%")};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SidebarItemsList = styled.ul`
  color: #fff;
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  letter-spacing: 0.32px;
`;

export const SidebarItem = styled.li`
  padding: 23px 0;
`;
