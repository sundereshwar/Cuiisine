export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 95
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 85
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 120
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 100
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 30
  },
  { img: "/img/gyro.jpeg", name: "Frankie", section: "Sandwich", price: 40 },
  {
    img: "/img/sandwich.jpeg",
    name: "Subway",
    section: "Sandwich",
    price: 60
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 40
  },
  {
    price: 15,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Chaaas"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

//  © created by react.school
