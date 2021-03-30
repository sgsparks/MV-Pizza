/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from './Styles/foodGrid.js';

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
`


const FoodDialog = ({ openFoodImg, openFoodName, setOpenFoodImg, setOpenFoodName }) => {
  const close = () => {
    setOpenFoodName();
    setOpenFoodImg();
  }
  return (
    openFoodImg ? (
      <>
        <DialogShadow onClick={() => close()} />
        <Dialog>
          <DialogBanner img={openFoodImg}>
            <DialogBannerName>{openFoodName}</DialogBannerName>
          </DialogBanner>
        </Dialog>
      </>
    ) : null
  );
}

export default FoodDialog;
