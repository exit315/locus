import React, { ReactNode } from "react";
import styled from 'styled-components';
import {Color} from "../../utils/style";

const Text = styled.h3<{marginBottom: string}>`
  margin: 0 0 ${((props) => (props.marginBottom))};
  font-weight: 800;
  font-size: 70px;
  color: ${Color.lightBlack};
  line-height: 105px;
`;

type Props = {
  marginBottom: string
  children: ReactNode
}

const Title:React.FC<Props> = ({marginBottom, children}) => {

  return (
    <Text marginBottom={marginBottom}>{children}</Text>
  );
};

export default Title;
