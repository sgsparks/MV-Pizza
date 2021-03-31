import React from 'react';
import styled from 'styled-components';
import { Title } from './Styles/title.js'

const NavBarStlyed = styled.div`
  background-color: tomato;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;
const Logo = styled(Title)`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 4px darkRed;
`

const NavBar = () => {
  return (
    <NavBarStlyed>
      <Logo>
      🍍 🍕 MV-PIZZA 🍕 🍍
      </Logo>
    </NavBarStlyed>
  )
}

export default NavBar;
