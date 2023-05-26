import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

const App: React.FC = () => {
  const fruits = [
    "Apple 🍎",
    "Banana 🍌",
    "Orange 🍊",
    "Pineapple 🍍",
    "Peach 🍑",
    "Cherry 🍒",
    "Strawberry 🍓",
    "Kiwi 🥝",
    "Watermelon 🍉",
    "Grapes 🍇",
    "Mango 🥭",
    "Pear 🍐",
    "Lemon 🍋",
    "Avocado 🥑",
    "Tomato 🍅",
    "Coconut 🥥",
    "Papaya 🥭",
    "Pomegranate 🥭",
    "Blueberry 🫐",
  ];
  const vegetables = [
    "Potato 🥔",
    "Carrot 🥕",
    "Corn 🌽",
    "Cucumber 🥒",
    "Broccoli 🥦",
    "Onion 🧅",
    "Garlic 🧄",
    "Eggplant 🍆",
    "Mushroom 🍄",
    "Peanuts 🥜",
    "Pistachio 🌰",
    "Hazelnut 🌰",
    "Walnut 🌰",
    "Chili 🌶",
    "Bell pepper 🫑",
    "Lettuce 🥬",
    "Green salad 🥗",
    "Cabbage 🥬",
    "Brussels sprouts 🥬",
  ];
  const crops = [
    "Rice 🍚",
    "Wheat 🌾",
    "Corn 🌽",
    "Cotton 🧵",
    "Soybeans 🍱",
    "Coffee ☕️",
    "Cocoa 🍫",
    "Tea 🍵",
    "Millet 🍲",
    "Barley 🍺",
    "Oats 🍲",
    "Rye 🍲",
    "Sorghum 🍲",
    "Potato 🥔",
    "Sweet potato 🍠",
    "Yam 🍠",
    "Cassava 🍠",
    "Taro 🍠",
    "Yautia 🍠",
  ];
  const [cart, setCart] = useState<string[]>([]);
  const updateCart = (item: string) => {
    if (!cart.includes(item)) {
      setCart([...cart, item]);
    } else {
      setCart(cart.filter((cartItem) => cartItem !== item));
    }
  };
  const onSubmit = () => {
    if (cart.length === 0) {
      alert("Please select some items to buy!");
      return;
    }
    alert(`You are buying: ${cart.join(", ")}`);
  };
  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-4">Grocery List</h1>
      <h4 className="text-center">Cart: {cart.join(", ")}</h4>
      <div className="row mb-4 justify-content-center align-items-center">
        <Button onClick={onSubmit} color="success">
          Buy
        </Button>
        <Button onClick={() => setCart([])} color="danger">
          Clear
        </Button>
      </div>
      <div className="row">
        <ListGroup
          listItems={fruits}
          heading="Fruits"
          onSelected={updateCart}
          selectedItems={cart}
        />
        <ListGroup
          listItems={vegetables}
          heading="Vegetables"
          onSelected={updateCart}
          selectedItems={cart}
        />
        <ListGroup
          listItems={crops}
          heading="Others"
          onSelected={updateCart}
          selectedItems={cart}
        />
      </div>
    </div>
  );
};

export default App;
