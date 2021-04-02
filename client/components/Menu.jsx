/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { foods, FormatPrice } from './data/foodData';
import { Food, FoodGrid, FoodLabel, FoodLabelPrice } from './Styles/foodGrid';

const MenuStyled = styled.div`
  height: 1000px;
  padding-left: 40px;
  margin: 0px 400px 50px 20px;
`;
const SectionName = styled.h1`
  font-family: 'Open Sans', sans-serif;
  background-color: rgba(255, 99, 71, .8);
  padding: 5px, 5px, 5px, 50px;
  border-radius: 3px;
  max-width: 520px;
  text-align: center;

`

const Menu = ({ setOpenFoodName, setOpenFoodImg, setOpenFoodPrice,setOpenFoodSection, sectionNameRender, setSectionNameRender }) => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, difFoods]) => (
        <>
          <SectionName onClick={() => setSectionNameRender(sectionName)}>{sectionName}</SectionName>
          <FoodGrid>
            {difFoods.map((food) => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFoodName(food.name);
                  setOpenFoodImg(food.img);
                  setOpenFoodPrice(food.price);
                  setOpenFoodSection(sectionName);
                }}
              >
                <FoodLabel>
                  <div>
                    {food.name}
                  </div>
                  <FoodLabelPrice>
                    {FormatPrice(food.price)}
                  </FoodLabelPrice>
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
