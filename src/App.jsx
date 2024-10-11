import { useState } from "react";
import data from "./data";
import Section from "./section";
import Cart from "./cart";
import Overlay from "./overlay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [items, setItems] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [isOrder, setIsOrder] = useState(false);
  const totalPrice = calculateTotalPrice();
  const notify = () => toast("Your order is getting ready!");

  function handleStartNewOrder() {
    const newItems = items.map((item) => {
      return { ...item, amount: 1, isInCart: false };
    });
    setItems(newItems);
    setCartItems([]);
    setIsOrder(false);
    notify();
  }

  function decreaseQuantity(id) {
    const newItems = items.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    const newCartItems = cartItems.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
    setItems(newItems);
  }

  function increaseQuantity(id) {
    const newItems = items.map((item) => {
      if (item.id === id && item.amount < 20) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    const newCartItems = cartItems.map((item) => {
      if (item.id === id && item.amount < 20) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
    setItems(newItems);
  }

  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].amount;
    }
    return Math.trunc(totalPrice);
  }

  function handleDeleteItem(id) {
    const newItem = items.find((item) => item.id === id);
    newItem.isInCart = false;
    newItem.amount = 1;
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function addItemHandler(id) {
    const newItem = items.find((item) => item.id === id);
    newItem.isInCart = true;
    setCartItems((prev) => [...prev, newItem]);
    console.log(cartItems);
  }
  //vidi kako da za modal iskoristis react.portal
  return (
    <main>
      <Section
        items={items}
        addItemHandler={addItemHandler}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Cart
        cartItems={cartItems}
        setIsOrder={setIsOrder}
        handleDeleteItem={handleDeleteItem}
        totalPrice={totalPrice}
      />
      <Overlay
        cartItems={cartItems}
        isOrder={isOrder}
        totalPrice={totalPrice}
        handleStartNewOrder={handleStartNewOrder}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="toast"
      />
    </main>
  );
}

export default App;
