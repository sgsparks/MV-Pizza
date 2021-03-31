/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { foods, FormatPrice } from './data/foodData';
import { Food, FoodGrid, FoodLabel } from './Styles/foodGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

const Menu = ({ setOpenFoodName, setOpenFoodImg, setOpenFoodPrice }) => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, difFoods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {difFoods.map((food) => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFoodName(food.name);
                  setOpenFoodImg(food.img);
                  setOpenFoodPrice(FormatPrice(food.price));
                }}
              >
                <FoodLabel>
                  <div>
                    {food.name}
                  </div>
                  <div>
                    {FormatPrice(food.price)}
                  </div>
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
