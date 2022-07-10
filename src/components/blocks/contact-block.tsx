import React from "react";
import styled from 'styled-components';
import ContactForm from "./contact-form";

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
  width: 30%;
`;

const Title = styled.h3`
  width: fit-content;
  margin: 0;
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
`;

const ContactBlock:React.FC = () => {

  return (
    <BlockWrapper>
      <TextWrapper>
        <Title>Contact Us</Title>
      </TextWrapper>

      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </BlockWrapper>
  );
};

export default ContactBlock;
