import React from "react"
import styled from 'styled-components'
import ReviewBlock from "../blocks/review-block";
import PartnerBlock from "../blocks/partner-block";

const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
`;

const TestimonialBlock:React.FC = () => {

  return (
    <BlockWrapper>
      <Title>Testimonial</Title>

      <PartnerBlock />
      <ReviewBlock />
    </BlockWrapper>
  );
};

export default TestimonialBlock;
