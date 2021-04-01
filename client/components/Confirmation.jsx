/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { DialogFooter, DialogContent, ConfirmButton } from './foodDialog.jsx';
import { FormatPrice } from './data/foodData';

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  min-height: 400px;
  left: calc(50% - 350px);
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

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;
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

const Confirmation = ({
  ordersArray, setOrdersArray, setConfirmationBoolean, confirmationBoolean, orderPlacedboolean, setOrderPlacedBoolean,
}) => {
  const deleteItem = (index) => {
    const newOrders = [...ordersArray];
    newOrders.splice(index, 1);
    setOrdersArray(newOrders);
  };
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
    confirmationBoolean ? (
      <>
        <DialogShadow />
        <Dialog>
              <OrderContent>
                {' '}
                <OrderContainer>
                  Confirm Your Order:
                </OrderContainer>
                {' '}
                {ordersArray.map((order, index) => (
                  <OrderContainer>
                    <OrderItem>
                      <div>{order.quantity}</div>
                      <div>{order.name}</div>
                      <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteItem(index)}
                      >
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

          <DialogFooter>
            <ConfirmButton
              onClick={() => {
                setConfirmationBoolean(!confirmationBoolean);
                setOrderPlacedBoolean(!orderPlacedboolean);
                setOrdersArray([]);
              }}
            >
              Confirm
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </>
    ) : null

  );
};

export default Confirmation;
