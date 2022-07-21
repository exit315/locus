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

const Text = styled.p`
  margin: 0 0 50px;
  font-weight: 400;
  font-size: 30px;
  color: ${Color.lightBlack};
  line-height: 45px;
`;

const ProjectsBlock:React.FC = () => {

  return (
    <Block>
      <TextWrapper>
        <Title marginBottom={`20px`}>Project Livingroom</Title>
        <Text>A simple guide to create the perfect livingrooom for Night Watc works beautifully in a wide gamut of arrangements.</Text>
      </TextWrapper>
    </Block>
  );
};

export default ProjectsBlock;
