import React from "react";
import styled from 'styled-components';
import ContactBlock from "../blocks/contact-block";
import TestimonialBlock from "../blocks/testimonial-block";
import Header from "../blocks/header";
import IntroBlock from "../blocks/intro-block";
import DescriptionBlock from "../blocks/description-block";
import ProjectsBlock from "../blocks/projects-block";

const Main = styled.main`
  padding: 100px 0;
`;

const MainPage:React.FC = () => {

  return (
    <>
      <Header />

      <Main>
        <IntroBlock />
        <DescriptionBlock />
        <ProjectsBlock />
        <TestimonialBlock />
        <ContactBlock />
      </Main>
    </>
  );
};

export default MainPage;
