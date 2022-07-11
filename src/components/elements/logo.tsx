import React from "react";
import styled from 'styled-components';
import logo from "../../../assets/img/logo.svg";
import {Color} from "../../utils/style";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  display: block;
  margin-right: 14px;
`;

const LogoText = styled.span`
  display: block;
  font-weight: 800;
  font-size: 35px;
  line-height: 52px;
  color: ${Color.turquoise};
`;

const Logo:React.FC = () => {

  return (
    <LogoWrapper>
      <LogoImage src={logo} width="37" height="45" />
      <LogoText>Locus</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
