import React from "react";
import styled from 'styled-components';
import Button from "../elements/button";
import Title from "../elements/title";
import introBg from "../../../assets/img/intro-bg.png";
import introBgColor from "../../../assets/img/intro-bg-color.png";
import {Color} from "../../utils/style";

const Block = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
  padding: 50px 0 60px;
  background-image: url(${introBg}), url(${introBgColor});
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain;
  background-position: right 25px center, right center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Text = styled.p`
  margin: 0 0 50px;
  font-weight: 400;
  font-size: 30px;
  color: ${Color.lightBlack};
  line-height: 45px;
`;

const IntroBlock:React.FC = () => {

  return (
    <Block>
      <TextWrapper>
        <Title marginBottom={`50px`}>Get the inspiration of interior design here</Title>

        <Text>architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.</Text>
        <Button title="Let's go" clickHandler={() => {}} type="angle" />
      </TextWrapper>
    </Block>
  );
};

export default IntroBlock;
