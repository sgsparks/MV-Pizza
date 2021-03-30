/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { foods } from './data/foodData';
import { Food, FoodGrid, FoodLabel } from './Styles/foodGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

const Menu = () => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, difFoods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {difFoods.map((food) => (
              <Food img={food.img}>
                <FoodLabel>
                  {food.name}
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};

export default Menu;
