export const foodItems = [

  {
    name: 'Caprese Sandwich',
    img: '/img/caprese-sand.jpeg',
    section: 'Sandwich',
  },
  {
    name: 'Olive Pizza',
    img: '/img/olive-arugula-pizza.jpeg',
    section: 'Pizza',
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/peperoni.jpeg',
    section: 'Pizza',
  },
  {
    name: 'Strawberry Basil Pizza',
    img: '/img/Straw-Basil.jpeg',
    section: 'Pizza',
  },
  {
    name: 'Tomato Basil Pizza',
    img: '/img/tomato-basil-pizza.jpeg',
    section: 'Pizza',
  },
  {
    name: 'Veggie Pizza',
    img: '/img/veggie-pizza.jpeg',
    section: 'Pizza',
  },
  {
    name: 'Breakfast Sandwich',
    img: '/img/breakfast.jpeg',
    section: 'Sandwich',
  },
  {
    name: 'Panini',
    img: '/img/panini.jpeg',
    section: 'Sandwich',
  },

];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
