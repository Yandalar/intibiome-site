import styled from "styled-components";

export const Banner = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BannerMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: -50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    z-index: 2;
  }
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
  letter-spacing: 0.78px;

  @media screen and (max-width: 768px) {
    letter-spacing: 0.62px;
  }
`;

export const HeroTitle = styled.h1`
  color: #389cd6;
  font-size: 39px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 31px;
  }
`;

export const HeroParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -25px;
  text-align: center;
  align-items: center;
  letter-spacing: 0.4px;

  @media screen and (max-width: 768px) {
    letter-spacing: 0.32px;
  }
`;

export const HeroParagraph = styled.p`
  margin-top: 2px;
  width: 550px;
  color: #7b7070;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 390px;
  }
`;
