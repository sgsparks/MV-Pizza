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
  const [ordersArray, setOrdersArray] = useState([]);
  const [openFoodPrice, setOpenFoodPrice] = useState();
  const [quantityValue, setQuantityValue] = useState(1);


  return (
    <>
      <GlobalStyle />
      <FoodDialog
        openFoodImg={openFoodImg}
        openFoodName={openFoodName}
        setOpenFoodName={setOpenFoodName}
        setOpenFoodImg={setOpenFoodImg}
        setOrdersArray={setOrdersArray}
        ordersArray={ordersArray}
        openFoodPrice={openFoodPrice}
        setOpenFoodPrice={setOpenFoodPrice}
        quantityValue={quantityValue}
        setQuantityValue={setQuantityValue}
      />
      <NavBar />
      <Order
        ordersArray={ordersArray}
        setOrdersArray={setOrdersArray}
        setOpenFoodPrice={setOpenFoodPrice}
        openFoodPrice={openFoodPrice}
      />
      <Banner />
      <div>{openFoodName}</div>
      <Menu
        setOpenFoodName={setOpenFoodName}
        setOpenFoodImg={setOpenFoodImg}
        setOpenFoodPrice={setOpenFoodPrice}
      />
    </>
  );
};

export default App;
