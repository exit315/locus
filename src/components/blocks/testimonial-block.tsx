import React from "react"
import styled from 'styled-components'
import ReviewBlock from "../blocks/review-block";
import PartnerBlock from "../blocks/partner-block";
import Title from "../elements/title";

const Block = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 240px;
`;

const PartnerBlockWrapper = styled.h3`
  width: 100%;
  margin: 0 0 60px;
`;

const TestimonialBlock:React.FC = () => {

  return (
    <Block>
      <Title marginBottom={`20px`}>Testimonial</Title>

      <PartnerBlockWrapper>
        <PartnerBlock />
      </PartnerBlockWrapper>
      <ReviewBlock />
    </Block>
  );
};

export default TestimonialBlock;
