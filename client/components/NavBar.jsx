import React from 'react';
import styled from 'styled-components';


const NavBarStlyed = styled.div`
  background-color: tomato;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  text-align: center;
  border-bottom: 10px solid rgba(0, 0, 0, .8);
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 4px darkRed;
  font-family: 'Montserrat Alternates', sans-serif;
`;

const NavBar = () => (
  <NavBarStlyed>
    <Logo>
      🍕 MV-PIZZA 🍕
    </Logo>
  </NavBarStlyed>
);

export default NavBar;
