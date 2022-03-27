import React from "react";
import IMG from "../../images";
import {
  Midpoint,
  Icons,
  IconsWrapper,
  ItemImg,
  ItemButton,
  ItemWrapper,
  ItemParagraph,
  ScrolledWrapper,
  SectionOneParagraph,
  SectionOneParagraphWrapper,
  SectionOneTitle,
  SectionOneTitleWrapper,
  InfoButton,
  InfoButtonWrapper,
  MidpointMobile,
} from "./InfoSectionElements";

const InfoSection = () => {
  return (
    <>
      <IconsWrapper>
        <Icons src={IMG.icons} alt="icons" />
      </IconsWrapper>
      <SectionOneTitleWrapper>
        <SectionOneTitle>
          whatever your age. whatever your lifestyle. whatever your interests.
        </SectionOneTitle>
      </SectionOneTitleWrapper>
      <SectionOneParagraphWrapper>
        <SectionOneParagraph>
          Co-created with gynaecologists, our revolutionary products have been
          expertly developed to support your intimate microbiome and pH balance,
          and strengthen overall natural health.
        </SectionOneParagraph>
        <SectionOneParagraph>
          As the experts in intimate hygiene, we want to bring discussion about
          intimate wellness care out of the dark and demystify the taboos that
          surround it.
        </SectionOneParagraph>
      </SectionOneParagraphWrapper>
      <SectionOneTitleWrapper>
        <SectionOneTitle>our products</SectionOneTitle>
      </SectionOneTitleWrapper>

      <ScrolledWrapper>
        <ItemWrapper>
          <ItemImg src={IMG.wellness_mask} alt="wellness product" />
          <ItemParagraph>
            intibiome wellness daily <br /> intimate wash
          </ItemParagraph>
          <ItemButton>wellness</ItemButton>
        </ItemWrapper>
        <ItemWrapper>
          <ItemImg src={IMG.active_mask} alt="active product" />
          <ItemParagraph>
            intibiome active extra protection intimate wash
          </ItemParagraph>
          <ItemButton style={{ background: "#309D5F" }}>active</ItemButton>
        </ItemWrapper>
        <ItemWrapper>
          <ItemImg src={IMG.agecare_mask} alt="agecare product" />
          <ItemParagraph>
            intibiome agecare dryness relief intimate wash
          </ItemParagraph>
          <ItemButton style={{ background: "#EE6381" }}>agecare</ItemButton>
        </ItemWrapper>
      </ScrolledWrapper>

      <Midpoint src={IMG.midpoint} alt="products banner" />
      <MidpointMobile src={IMG.midpoint_mobile} alt="products banner" />
      <SectionOneTitleWrapper>
        <SectionOneTitle>keep up to date with our discoveries</SectionOneTitle>
      </SectionOneTitleWrapper>
      <ScrolledWrapper>
        <ItemWrapper>
          <ItemImg src={IMG.photo_1} alt="section 1" />
          <ItemParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemParagraph>
        </ItemWrapper>
        <ItemWrapper>
          <ItemImg src={IMG.photo_2} alt="section 2" />
          <ItemParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemParagraph>
        </ItemWrapper>
        <ItemWrapper>
          <ItemImg src={IMG.photo_3} alt="section 3" />
          <ItemParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemParagraph>
        </ItemWrapper>
      </ScrolledWrapper>
      <InfoButtonWrapper>
        <InfoButton>see more</InfoButton>
      </InfoButtonWrapper>
    </>
  );
};

export default InfoSection;
