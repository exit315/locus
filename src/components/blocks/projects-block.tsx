import React from "react";
import styled from 'styled-components';
import Title from "../elements/title";
import {Color} from "../../utils/style";

const Block = styled.section`
  margin-bottom: 150px;
  padding: 0 0 100px;
  text-align: center;
`;

const TextWrapper = styled.div`

`;

const IntroText = styled.p`
  display: block;
  margin: 0 0 50px;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: ${Color.darkGrey};
`;

const Span = styled.span`
  position: relative;
  width: fit-content;

  ::before,
  ::after {
    content: "";
    position: absolute;
    left: calc(50% - 67px);

    width: 135px;
    height: 5px;
    background-color: ${Color.turquoise};
  }

  ::after {
    top: 20px;
  }
`;

const ProjectsBlock:React.FC = () => {

  return (
    <Block>
      <TextWrapper>
        <Title marginBottom={`20px`}>Our projects</Title>
        <IntroText>Introducing our first official project</IntroText>
        <Span />
      </TextWrapper>
    </Block>
  );
};

export default ProjectsBlock;
