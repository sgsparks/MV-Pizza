/* eslint-disable arrow-body-style */
import React, {useState} from 'react';
import styled from 'styled-components';
import { FormatPrice } from './data/foodData';
import { DialogFooter, DialogContent, ConfirmButton } from './foodDialog.jsx';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 400px;
  background-image: url('img/tomatoLine.jpeg');
  background-position: center;
  background-size: cover;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  border-left: 3px solid rgba(0, 0, 0, .75);
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

const DetailItem = styled.span`
  color: dark-gray;
  font-size: 10px;
`;


const Order = ({ ordersArray, setOrdersArray, setConfirmationBoolean, confirmationBoolean}) => {


  const deleteItem = (index) => {
    const newOrders = [...ordersArray];
    newOrders.splice(index, 1);
    setOrdersArray(newOrders)
  }
  const getPrice = (order) => {
    return (
      order.quantity * (order.price + order.toppings.length)
    );
  };
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
          {ordersArray.map((order, index) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{cursor: 'pointer'}}
                  onClick={() => deleteItem(index)}>
                  🗑️
                </div>
                <div>{FormatPrice(getPrice(order))}</div>
              </OrderItem>
              {order.toppings.map((topping) => (
                <DetailItem>
                  {topping}
                  {' '}
                </DetailItem>
              ))}
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
        <ConfirmButton
          onClick={() => setConfirmationBoolean(!confirmationBoolean)}
        >
          Checkout
        </ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
};

export default Order;
