import React from "react";
import styled from 'styled-components';

const NavList = styled.nav`
  display: flex;
  column-gap: 85px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`

`;

const NavLink = styled.a`
  font-weight: 400;
  font-size: 25px;
  color: #404242;
  line-height: 38px;
  text-decoration: none;
`;

const ActiveNavLink = styled(NavLink)`
position: relative;
  color: #58A9A5;
  font-weight: bold;

  ::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: calc(50% - 24px);
    width: 48px;
    height: 6px;
    background-color: #FEC62D;
    border-radius: 21px;
  }
`;

const Navigation:React.FC = () => {
  const navList = [
    'Home',
    'Contact',
    'Location',
    'About Us'
  ];

  return (
    <nav>
      <NavList>
        {navList.map((el) => {
          return <NavItem key={el}><ActiveNavLink href="#">{el}</ActiveNavLink></NavItem>
        })}
      </NavList>
    </nav>
  );
};

export default Navigation;
