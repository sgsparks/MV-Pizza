/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FormatPrice } from './data/foodData';
import { DialogFooter, DialogContent, ConfirmButton, getPrice } from './foodDialog.jsx';

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

const Order = ({ ordersArray }) => {
  const subtotal = ordersArray.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.093;
  const total = subtotal + tax;
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
                <div>{FormatPrice(getPrice(order))}</div>
              </OrderItem>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div>{FormatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax</div>
              <div>{FormatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{FormatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
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
