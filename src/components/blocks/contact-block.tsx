import React from "react";
import styled from 'styled-components';
import ContactForm from "./contact-form";
import {Color} from "../../utils/style";
import Title from "../elements/title";

const BlockWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
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

const ContactBlock:React.FC = () => {

  return (
    <BlockWrapper>
      <TextWrapper>
        <Title>Contact Us</Title>
        <Text>Have any questions? Want help before getting started?</Text>
        <Span />
      </TextWrapper>

      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </BlockWrapper>
  );
};

export default ContactBlock;
