import React, { ReactNode } from "react";
import styled from 'styled-components';
import {Color} from "../../utils/style";

const Text = styled.h3`
  margin: 0;
  font-weight: 800;
  font-size: 70px;
  color: ${Color.lightBlack};
  line-height: 105px;
`;

type Props = {
  margin: string
  children: ReactNode
}

const Title:React.FC<Props> = ({margin, children}) => {

  return (
    <Text>{children}</Text>
  );
};

export default Title;
