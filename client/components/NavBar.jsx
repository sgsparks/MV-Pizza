import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from './Styles/colors.js';
import { Title } from './Styles/title.js'

const NavBarStlyed = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;

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
