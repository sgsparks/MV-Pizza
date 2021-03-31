/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import {DialogFooter, DialogContent, ConfirmButton } from './foodDialog.jsx';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`
const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const Order = ({ ordersArray, openFoodPrice }) => {
  return (
    <OrderStyled>
      {ordersArray.length === 0 ? (
        <OrderContent>
          Your Order Is Empty
        </OrderContent>
      ) : (
        <OrderContent>
          {' '}
          <OrderContainer>
            Your order:
          </OrderContainer>
          {' '}
          {ordersArray.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div />
                <div>{order.price}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>
          Checkout
        </ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
};

export default Order;
