import React from "react";
import styled from 'styled-components';
import Title from "../elements/title";
import descriptionBg from "../../../assets/img/description-bg.png";
import {Color} from "../../utils/style";
import MissionBlock from "./mission-block";

const Block = styled.section`
  margin-bottom: 120px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 70px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0 0 50px;
  font-weight: 400;
  font-size: 30px;
  color: ${Color.lightBlack};
  line-height: 45px;
`;

const VideoWrapper = styled.div`
  display: flex;
  margin-bottom: 120px;
`;

const Image = styled.img`
  display: block;
  width: 70%;
`;

const TextWrapper = styled.div`
  padding: 70px 110px;
  background-color: ${Color.paleTurquoise};
`;

const DescriptionText = styled.p`
  margin: 0 0 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${Color.green};
`;

const PlayBtnWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -162px;
`;

const PlayBlock = styled.div`
  position: relative;
`;

const PlayBtn = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100px;
  background-color: ${Color.white};
  border-color: transparent;
  border-radius: 65px;

  ::before,
  ::after {
    content: "";
    position: absolute;
  }

  ::before {
    top: -16px;
    left: -16px;
    width: 128px;
    height: 128px;
    background-color: ${Color.white};
    border-radius: 65px;
    opacity: 0.4;
  }

  ::after {
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    border-left: 21px solid transparent;
    border-right: 21px solid transparent;
    border-bottom: 27px solid ${Color.yellow};
    transform: rotate(90deg);
  }
`;

const PlayLink = styled.a`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${Color.green};
`;

const DescriptionBlock:React.FC = () => {

  return (
    <Block>
      <TitleWrapper>
        <Title marginBottom={`20px`}>How it works</Title>

        <Text>Spice up your space even simpler <br /> than you think</Text>
      </TitleWrapper>

      <VideoWrapper>
        <Image src={descriptionBg} width="1063" height="350" />

        <TextWrapper>
          <DescriptionText>We provide design and build for commercial building, interior and furniture to improve the better life.</DescriptionText>

          <PlayBlock>
            <PlayLink>SEE VIDEO</PlayLink>

            <PlayBtnWrapper>
              <PlayBtn />
            </PlayBtnWrapper>
          </PlayBlock>
        </TextWrapper>
      </VideoWrapper>

      <MissionBlock />
    </Block>
  );
};

export default DescriptionBlock;
