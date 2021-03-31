import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar.jsx';
import Menu from './Menu.jsx';
import { Banner } from './Styles/banner.js';
import { GlobalStyle } from './Styles/globalStyle.js';
import { FoodDialog } from './foodDialog.jsx';
import Order from './Order.jsx';


const App = () => {
  const [openFoodName, setOpenFoodName] = useState();
  const [openFoodImg, setOpenFoodImg] = useState();


  return (
    <>
      <GlobalStyle />
      <FoodDialog
        openFoodImg={openFoodImg}
        openFoodName={openFoodName}
        setOpenFoodName={setOpenFoodName}
        setOpenFoodImg={setOpenFoodImg}
      />
      <NavBar />
      <Order />
      <Banner />
      <div>{openFoodName}</div>
      <Menu
        setOpenFoodName={setOpenFoodName}
        setOpenFoodImg={setOpenFoodImg}
      />
    </>
  );
};

export default App;
