import React from "react";
import styled from 'styled-components';
import image1 from "../../../assets/img/partner-logo-1.png";
import image2 from "../../../assets/img/partner-logo-2.png";
import image3 from "../../../assets/img/partner-logo-3.png";
import image4 from "../../../assets/img/partner-logo-4.png";

const PartnerList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const PartnerItem = styled.li`
`;

const PartnerLink = styled.a`
`;

const PartnerLogo = styled.img`
`;

const PartnerBlock:React.FC = () => {

  return (
    <PartnerList>
      <PartnerItem>
        <PartnerLink><PartnerLogo src={image1} /></PartnerLink>
      </PartnerItem>
      <PartnerItem>
        <PartnerLink><PartnerLogo src={image2} /></PartnerLink>
      </PartnerItem>
      <PartnerItem>
        <PartnerLink><PartnerLogo src={image3} /></PartnerLink>
      </PartnerItem>
      <PartnerItem>
        <PartnerLink><PartnerLogo src={image4} /></PartnerLink>
      </PartnerItem>
    </PartnerList>
  );
};

export default PartnerBlock;
