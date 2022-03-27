import React from "react";
import {
  Banner,
  BannerMobile,
  HeroParagraph,
  HeroParagraphWrapper,
  HeroTitle,
  HeroTitleWrapper,
} from "./HeroElements";
import IMG from "../../images";

const Hero = (toggle) => {
  return (
    <>
      <Banner src={IMG.banner} alt="Site Banner" />
      <BannerMobile
        src={IMG.banner_mobile}
        alt="Site Banner"
        data-testid="mobile_banner"
      />
      <HeroTitleWrapper>
        <HeroTitle>we're here to help</HeroTitle>
      </HeroTitleWrapper>
      <HeroParagraphWrapper>
        <HeroParagraph>
          When it comes to caring for our most intimate areas, we’ve lost our
          connection.
        </HeroParagraph>
        <HeroParagraph>
          Embarrassed, unwilling, or unable to communicate with others, we’re
          needlessly neglecting the parts of our bodies that need it most.
        </HeroParagraph>
        <HeroParagraph>
          We’re here to help. Providing you with the expertise, knowledge and
          products you need to feel confident in your personal care.
        </HeroParagraph>
      </HeroParagraphWrapper>
    </>
  );
};

export default Hero;
