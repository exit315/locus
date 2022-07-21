import React from "react";
import styled from 'styled-components';
import missionBg from "../../../assets/img/mission-bg.png";
import {Color} from "../../utils/style";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
`;

const TextWrapper = styled.div`
  padding-left: 145px;
`;

const SubTitle = styled.h3`
  margin: 0 0 50px;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Color.lightBlack};
`;

const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: ${Color.green};
`;

const MissionBlock:React.FC = () => {

  return (
    <Wrapper>
      <Image src={missionBg} width="642" height="650" />

      <TextWrapper>
        <SubTitle>Our mission is to deliver aesthetic visual for your home</SubTitle>

        <Text>By applying bacis psychology principles, we are going to explain how perception works and how we can use this understanding to maximise the space that we occupy in our homes.</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default MissionBlock;
