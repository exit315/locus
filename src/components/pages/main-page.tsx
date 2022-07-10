import React from "react";
import styled from 'styled-components';
import ContactBlock from "../blocks/contact-block";
import Header from "../blocks/header";

const Main = styled.main`
  padding: 100px 0;
`;

const MainPage:React.FC = () => {

  return (
    <>
      <Header />

      <Main>
        <ContactBlock />
      </Main>
    </>
  );
};

export default MainPage;
