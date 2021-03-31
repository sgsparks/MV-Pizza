/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from './Styles/foodGrid.js';
import { Title } from './Styles/title.js'

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

export const FoodDialog = ({ openFoodImg, openFoodName, setOpenFoodImg, setOpenFoodName }) => {
  const close = () => {
    setOpenFoodName();
    setOpenFoodImg();
  };
  return (
    openFoodImg ? (
      <>
        <DialogShadow onClick={() => close()} />
        <Dialog>
          <DialogBanner img={openFoodImg}>
            <DialogBannerName>{openFoodName}</DialogBannerName>
          </DialogBanner>
          <DialogContent />
          <DialogFooter>
            <ConfirmButton>
              Add To Order
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </>
    ) : null
  );
};
