/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from './Styles/foodGrid.js';
import { Title } from './Styles/title.js'
import QuantityInput from './QuantityInput.jsx'
import { foods, FormatPrice } from './data/foodData';

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
`
export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: tomato;
`

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export const FoodDialog = ({ openFoodImg, openFoodName, setOpenFoodImg, setOpenFoodName, setOrdersArray, ordersArray, openFoodPrice, setOpenFoodPrice, setQuantityValue, quantityValue }) => {


  const close = () => {
    setOpenFoodName();
    setOpenFoodImg();
    setOpenFoodPrice();
    setQuantityValue(1);
  };

  const currentOrder = {
    name: openFoodName,
    quantity: quantityValue,
    price: FormatPrice(openFoodPrice * quantityValue),
  };

  const addToOrder = () => {
    setOrdersArray([...ordersArray, currentOrder]);
    close();
  };

  return (
    openFoodImg ? (
      <>
        <DialogShadow onClick={() => close()} />
        <Dialog>
          <DialogBanner img={openFoodImg}>
            <DialogBannerName>{openFoodName}</DialogBannerName>
          </DialogBanner>
          <DialogContent>
            <QuantityInput
              setQuantityValue={setQuantityValue}
              quantityValue={quantityValue}
            />
          </DialogContent>
          <DialogFooter>
            <ConfirmButton
              onClick={() => addToOrder()}
            >
              Add To Order: {FormatPrice(openFoodPrice * quantityValue)}
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </>
    ) : null
  );
};

