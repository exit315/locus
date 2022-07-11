import React from "react";
import styled from 'styled-components';
import {Color} from "../../utils/style";

const BtnAngle = styled.button`
  display: block;
  width: 270px;
  padding: 20px 0;
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
  color: #fff;
  background-color: ${Color.turquoise};
  border-color: transparent;
  border-radius: 20px 20px 20px 0px;
`;

const BtnCircle = styled(BtnAngle)`
  border-radius: 20px;
`;

type Props = {
  title: string
  clickHandler: (evt: React.SyntheticEvent<HTMLButtonElement>) => void
  type: 'circle' | 'angle'
}

const Button:React.FC<Props> = ({title, clickHandler, type}) => {

  return (
    type === 'circle' ? <BtnCircle onClick={clickHandler}>{title}</BtnCircle> : <BtnAngle onClick={clickHandler}>{title}</BtnAngle>
  );
};

export default Button;
