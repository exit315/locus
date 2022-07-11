import React from "react"
import styled from 'styled-components'
import ReviewBlock from "../blocks/review-block";
import PartnerBlock from "../blocks/partner-block";
import Title from "../elements/title";

const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PartnerBlockWrapper = styled.h3`
  width: 100%;
  margin: 0 0 60px;
`;

const TestimonialBlock:React.FC = () => {

  return (
    <BlockWrapper>
      <Title>Testimonial</Title>

      <PartnerBlockWrapper>
        <PartnerBlock />
      </PartnerBlockWrapper>
      <ReviewBlock />
    </BlockWrapper>
  );
};

export default TestimonialBlock;
