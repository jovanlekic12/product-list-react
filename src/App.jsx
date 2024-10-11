import { useState } from "react";
import data from "./data";
import Item from "./item";
import Cart from "./cart";
import OverlayItem from "./overlayItem";
import { CiCircleCheck } from "react-icons/ci";
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
      <section>
        <h1 className="app__title">DESSERTS</h1>
        <ul className="item__list">
          {items.map((item) => {
            return (
              items && (
                <Item
                  {...item}
                  key={item.id}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  addItemHandler={addItemHandler}
                />
              )
            );
          })}
        </ul>
      </section>
      <Cart {...cartItems} />
      <div className={isOrder ? "overlay" : "overlay hide"}>
        <div className="modal">
          <CiCircleCheck />
          <h1 className="modal__notification__title">Order Confirmed</h1>
          <p className="modal__second__title">We hope you enjoy your food!</p>
          <ul className="modal__list">
            {cartItems.map((cartItem) => {
              return (
                cartItems && (
                  <OverlayItem
                    {...cartItem}
                    key={cartItem.id}
                    handleDeleteItem={handleDeleteItem}
                  />
                )
              );
            })}
          </ul>
          <div className="modal__total__container">
            <p className="modal__total__p">Order Total:</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
          <button onClick={handleStartNewOrder} className="new__order__btn">
            Start New Order
          </button>
        </div>
      </div>
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
