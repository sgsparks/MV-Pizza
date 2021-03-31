export const FormatPrice = (price) => price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const foodItems = [

  {
    name: 'Caprese Sandwich',
    img: '/img/caprese-sand.jpeg',
    section: 'Sandwich',
    price: 6,
  },
  {
    name: 'Olive Pizza',
    img: '/img/olive-arugula-pizza.jpeg',
    section: 'Pizza',
    price: 2,
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/peperoni.jpeg',
    section: 'Pizza',
    price: 2,
  },
  {
    name: 'Strawberry Basil Pizza',
    img: '/img/Straw-Basil.jpeg',
    section: 'Pizza',
    price: 2.5,
  },
  {
    name: 'Tomato Basil Pizza',
    img: '/img/tomato-basil-pizza.jpeg',
    section: 'Pizza',
    price: 1.75,
  },
  {
    name: 'Veggie Pizza',
    img: '/img/veggie-pizza.jpeg',
    section: 'Pizza',
    price: 2.25,
  },
  {
    name: 'Breakfast Sandwich',
    img: '/img/breakfast.jpeg',
    section: 'Sandwich',
    price: 5.5,
  },
  {
    name: 'Panini',
    img: '/img/panini.jpeg',
    section: 'Sandwich',
    price: 6.5,
  },

];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
