import React from "react"
import styled from 'styled-components'

const PartnerList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PartnerItem = styled.li`
`;

const PartnerLink = styled.a`
`;

const PartnerBlock:React.FC = () => {

  return (
    <PartnerList>
      <PartnerItem><PartnerLink></PartnerLink></PartnerItem>
    </PartnerList>
  );
};

export default PartnerBlock;
