import styled from "styled-components";

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icons = styled.img`
  padding-top: 20px;
  width: 100%;
`;

export const SectionOneTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
  letter-spacing: 0.78px;

  @media screen and (max-width: 768px) {
    letter-spacing: 0.62px;
  }
`;

export const SectionOneTitle = styled.h1`
  color: #389cd6;
  font-size: 39px;
  width: 800px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 31px;
  }
`;

export const SectionOneParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -25px;
  text-align: center;
  letter-spacing: 0.4px;

  @media screen and (max-width: 768px) {
    letter-spacing: 0.32px;
  }
`;

export const SectionOneParagraph = styled.p`
  margin-top: 2px;
  width: 744px;
  color: #7b7070;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 392px;
  }
`;

export const ScrolledWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  scrollbar-width: none;

  @media screen and (max-width: 768px) {
    justify-content: left;
  }
`;

export const ItemWrapper = styled.div`
  width: 356px;
  margin: 5px;
  box-shadow: 0px 3px 16px #00000014;
  border-radius: 16px;
`;

export const ItemImg = styled.img``;

export const ItemParagraph = styled.p`
  text-align: center;
  color: #7b7070;
  font-size: 20px;
  letter-spacing: 0.4px;
`;

export const ItemButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #389cd6;
  height: 73px;
  border-radius: 0 0 16px 16px;
  font-size: 29px;
  font-weight: bold;
  color: #fff;
`;

export const Midpoint = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MidpointMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    margin-top: 80px;
  }
`;

export const InfoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 90px;
`;

export const InfoButton = styled.button`
  height: 64px;
  width: 356px;
  background: #389cd6;
  color: #fff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.4px;
`;
