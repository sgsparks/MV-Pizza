/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

 const OrderPlacedButton = styled.div`
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
  position: fixed;
  top: 305px;
  z-index: 5;
  left: calc(50% - 240px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 3px solid rgba(250, 250, 250);
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
  cursor: pointer;
  filter: contrast(100%);
  border: 3px solid rgba(0, 0, 0, .75);
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.5;
  z-index: 4;
`;

const OrderPlaced = ({setOrderPlacedBoolean, orderPlacedboolean}) => {
  return (
    orderPlacedboolean ? (
      <>
        <DialogShadow onClick={() => setOrderPlacedBoolean(false)} />
        <OrderPlacedButton onClick={() => setOrderPlacedBoolean(false)}>
          Thank you for your order!
        </OrderPlacedButton>
      </>
    ) : null
  );
};

export default OrderPlaced;
