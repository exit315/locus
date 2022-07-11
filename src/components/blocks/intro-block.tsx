import React from "react";
import styled from 'styled-components';
import Button from "../elements/button";
import Title from "../elements/title";

const Block = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const IntroBlock:React.FC = () => {

  return (
    <Block>
      <TextWrapper>
        <Title margin={`50px`}>Get the inspiration of interior design here</Title>
        <Button title="Let's go" clickHandler={() => {}} type="angle" />
      </TextWrapper>

    </Block>
  );
};

export default IntroBlock;
