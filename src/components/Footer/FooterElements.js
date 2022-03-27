import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 242px;
  background: #389cd6;
  color: #fff;

  @media screen and (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export const FooterLinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  font-weight: bold;
  font-size: 16px;
  padding-top: 30px;
  padding-left: 0;
  letter-spacing: 0.32px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 158px;
    padding-top: 15px;
    align-items: center;
  }
`;

export const FooterItem = styled.li`
  padding: 30px;
`;

export const FooterItemBorder = styled.li`
  height: 19px;
  margin-top: 32px;
  border-right: 2px solid;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 24px;
    border-bottom: 2px solid;
    border-right: 0;
    margin-top: 0;
  }
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0;
`;

export const FooterIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      margin-bottom: 50px;
    }
  }
`;

export const UlabsIcon = styled.img`
  @media screen and (max-width: 768px) {
    margin-left: -25px;
    margin-top: 60px;
  }
`;
export const InstaIcon = styled.img``;
