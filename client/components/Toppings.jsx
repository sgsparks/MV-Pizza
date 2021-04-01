/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { toppingsList } from './data/foodData.js';


const ToppingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingsCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;


const Toppings = ({ toppingsArray, setToppingsArray }) => {
  return (
    <ToppingsGrid>
      {toppingsList.map((topping) => (
        <CheckboxLabel>
          <ToppingsCheckbox
            type="checkbox"
            onClick={() => setToppingsArray([...toppingsArray, topping])}
          />
          {topping}
        </CheckboxLabel>
      ))}
    </ToppingsGrid>
  );
};

export default Toppings;
