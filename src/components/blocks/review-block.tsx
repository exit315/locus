import React from "react";
import styled from 'styled-components';
import reviewImage from "../../../assets/img/review.png";
import icon from "../../../assets/img/icon.svg";
import {Color} from "../../utils/style";

const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  display: block;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 105px 50px 135px;
  background-color: ${Color.paleTurquoise};
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 120px;
  padding: 0;
  list-style: none;
`;

const InfoItem = styled.li`
`;

const InfoNumber = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: 70px;
  line-height: 80px;
  color: ${Color.turquoise};
`;

const InfoText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  color: ${Color.turquoise};
`;

const ReviewWrapper = styled.div`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  top: -50px;
  left: -35px;
  z-index: 10;
`;

const ReviewText = styled.p`
  position: relative;
  z-index: 100;
  margin: 0 0 35px;
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
  color: ${Color.green};
`;

const ReviewAuthor = styled(ReviewText)`
  margin: 0;
  color: #58A9A5;
  font-style: italic;
`;

const Text = styled.p`
  margin: 0 0 35px;
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
  color: ${Color.green};
`;

const Span = styled.span`
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;

    width: 135px;
    height: 5px;
    background-color: ${Color.turquoise};
  }

  ::after {
    top: 20px;
  }
`;

const ReviewBlock:React.FC = () => {

  return (
    <BlockWrapper>
      <Image src={reviewImage} width="615" height="700" />

      <TextWrapper>
        <InfoList>
          <InfoItem>
            <InfoNumber>105</InfoNumber>
            <InfoText>project</InfoText>
            <InfoText>done</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoNumber>12</InfoNumber>
            <InfoText>years of</InfoText>
            <InfoText>experience</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoNumber>10+</InfoNumber>
            <InfoText>big company</InfoText>
            <InfoText>partnership</InfoText>
          </InfoItem>
        </InfoList>

        <ReviewWrapper>
          <Icon src={icon} width="97" height="81" />
          <ReviewText>"Not able to tell you how happy I am with interior design. Interior design has completely surpassed our expectations. Interior design saved my business. Interior design is worth much more than I paid."</ReviewText>

          <ReviewAuthor>- Roscoe</ReviewAuthor>
        </ReviewWrapper>
      </TextWrapper>

    </BlockWrapper>
  );
};

export default ReviewBlock;
