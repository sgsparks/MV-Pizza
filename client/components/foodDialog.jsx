/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from './Styles/foodGrid.js';
import QuantityInput from './QuantityInput.jsx'
import { FormatPrice } from './data/foodData.js';
import Toppings from './Toppings.jsx';

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
  border-radius: 8px;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: tomato;
  font-family: 'Open Sans', sans-serif;
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
  cursor: pointer;
  filter: contrast(100%);
  border: 3px solid rgba(0, 0, 0, .75);
`;



const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 40px;
  font-size: 30px;
  padding: 0px, 2px 40px;
  margin-left: 30px;
  width: fit-content;
`;



export const FoodDialog = ({
  openFoodImg,
  openFoodName,
  setOpenFoodImg,
  setOpenFoodName,
  setOrdersArray,
  ordersArray,
  openFoodPrice,
  setOpenFoodPrice,
  setQuantityValue,
  quantityValue,
  openFoodSection,
  toppingsArray,
  setToppingsArray,
  setOpenFoodSection,
  getPrice,
}) => {
  const close = () => {
    setOpenFoodName();
    setOpenFoodImg();
    setOpenFoodPrice();
    setQuantityValue(1);
    setToppingsArray([]);
    setOpenFoodSection();
  };

  const currentOrder = {
    name: openFoodName,
    quantity: quantityValue,
    price: openFoodPrice,
    toppings: toppingsArray,
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

            {openFoodSection === 'Pizza' ? (
              <>
                <h4>Choose Your Toppings: </h4>
                <Toppings
                  setToppingsArray={setToppingsArray}
                  toppingsArray={toppingsArray}
                />
              </>
            ) : null }
          </DialogContent>
          <DialogFooter>
            <ConfirmButton
              onClick={() => addToOrder()}
            >
              Add To Order:
              {' '}
              {FormatPrice(getPrice(currentOrder))}
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </>
    ) : null
  );
};

