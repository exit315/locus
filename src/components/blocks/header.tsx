import React from "react"
import styled from 'styled-components'
import Button from "../elements/button"
import Logo from "../elements/logo"
import Navigation from "./navigation"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header:React.FC = () => {

  return (
    <HeaderWrapper>
      <Logo />

      <Navigation />

      <Button title="Sign Up" clickHandler={() => {}} type="circle" />
    </HeaderWrapper>
  )
}

export default Header
