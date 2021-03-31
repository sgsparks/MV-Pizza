import React from 'react';
import styled from 'styled-components';

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 20px;
  text-align: center;
  border: none;
  outline: none;
`

const IncrementContainer = styled.div`
  display: flex;
  height: 24px;
  font-family: 'Open Sans', sans-serif;
`

const IncrementButton = styled.div`
  width: 23px;
  color: tomato;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid tomato;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
     pointer-events: none;
     `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

// eslint-disable-next-line arrow-body-style
const QuantityInput = ({setQuantityValue, quantityValue}) => {

  const quantityChange = (e) => {
    if (!(+e.target.value >= 1)) {
      setQuantityValue(1);
      return;
    }
    setQuantityValue(+e.target.value);
  }

  return (
    <IncrementContainer>
      <div>Quantity</div>
      <IncrementButton
        disabled={quantityValue === 1}
        onClick={() => setQuantityValue(quantityValue - 1)}
      >
        -
      </IncrementButton>
      <QuantityInputStyled
        onChange={(e) => quantityChange(e)}
        value={quantityValue}
      />

      <IncrementButton
        onClick={() => setQuantityValue(quantityValue + 1)}
      >
        +
      </IncrementButton>
    </IncrementContainer>
  );
};

export default QuantityInput;

