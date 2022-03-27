import React from "react";
import IMG from "../../images";
import {
  FooterContainer,
  FooterIconsWrapper,
  FooterItem,
  FooterItemBorder,
  FooterLinksWrapper,
  FooterIconsContainer,
  UlabsIcon,
  InstaIcon,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksWrapper>
          <FooterItem>contact us</FooterItem>
          <FooterItemBorder />
          <FooterItem>faq</FooterItem>
          <FooterItemBorder />
          <FooterItem>site map</FooterItem>
          <FooterItemBorder />
          <FooterItem>privacy policy</FooterItem>
          <FooterItemBorder />
          <FooterItem>cookies policy</FooterItem>
          <FooterItemBorder />
          <FooterItem>legal notice</FooterItem>
        </FooterLinksWrapper>
        <FooterIconsContainer>
          <FooterIconsWrapper>
            <div>
              <UlabsIcon src={IMG.ulabs_icon} alt="ulabs icon" />
            </div>
            <div>
              <InstaIcon src={IMG.insta_icon} alt="instagram icon" />
            </div>
          </FooterIconsWrapper>
        </FooterIconsContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
