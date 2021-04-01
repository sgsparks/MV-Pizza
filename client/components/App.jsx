/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar.jsx';
import Menu from './Menu.jsx';
import { Banner } from './Styles/banner.js';
import { GlobalStyle } from './Styles/globalStyle.js';
import { FoodDialog } from './foodDialog.jsx';
import Order from './Order.jsx';
import Confirmation from './Confirmation.jsx'
import OrderPlaced from './OrderPlaced.jsx';


const App = () => {
  const [openFoodName, setOpenFoodName] = useState();
  const [openFoodImg, setOpenFoodImg] = useState();
  const [ordersArray, setOrdersArray] = useState([]);
  const [openFoodPrice, setOpenFoodPrice] = useState();
  const [quantityValue, setQuantityValue] = useState(1);
  const [openFoodSection, setOpenFoodSection] = useState();
  const [toppingsArray, setToppingsArray] = useState([]);
  const [sectionNameRender, setSectionNameRender] = useState();
  const [confirmationBoolean, setConfirmationBoolean] = useState(false);
  const [orderPlacedboolean, setOrderPlacedBoolean] = useState(false);

  const getPrice = (order) => {
    return (
      order.quantity * (order.price + toppingsArray.length)
    );
  };

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
        openFoodSection={openFoodSection}
        setToppingsArray={setToppingsArray}
        toppingsArray={toppingsArray}
        setOpenFoodSection={setOpenFoodSection}
        getPrice={getPrice}
      />
      <Confirmation
        ordersArray={ordersArray}
        setOrdersArray={setOrdersArray}
        setOpenFoodPrice={setOpenFoodPrice}
        openFoodPrice={openFoodPrice}
        toppingsArray={toppingsArray}
        confirmationBoolean={confirmationBoolean}
        setConfirmationBoolean={setConfirmationBoolean}
        orderPlacedboolean={orderPlacedboolean}
        setOrderPlacedBoolean={setOrderPlacedBoolean}
      />
      <NavBar />
      <Order
        ordersArray={ordersArray}
        setOrdersArray={setOrdersArray}
        setOpenFoodPrice={setOpenFoodPrice}
        openFoodPrice={openFoodPrice}
        toppingsArray={toppingsArray}
        confirmationBoolean={confirmationBoolean}
        setConfirmationBoolean={setConfirmationBoolean}
      />
      <OrderPlaced
        orderPlacedboolean={orderPlacedboolean}
        setOrderPlacedBoolean={setOrderPlacedBoolean}
      />
      <Banner />
      <div>{openFoodName}</div>
      <Menu
        setOpenFoodName={setOpenFoodName}
        setOpenFoodImg={setOpenFoodImg}
        setOpenFoodPrice={setOpenFoodPrice}
        setOpenFoodSection={setOpenFoodSection}
        setSectionNameRender={setSectionNameRender}
        sectionNameRender={sectionNameRender}
      />
    </>
  );
};

export default App;
