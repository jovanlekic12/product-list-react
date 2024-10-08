import { useState } from "react";
import data from "./data";
import Item from "./item";
import CartItem from "./cartItem";
import "./App.css";

function App() {
  const [items, setItems] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = calculateTotalPrice();

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
    setCartItems((prev) => [...prev, newItem]);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function addItemHandler(id) {
    const newItem = items.find((item) => item.id === id);
    newItem.isInCart = true;
    setCartItems((prev) => [...prev, newItem]);
    console.log(newItem);
  }

  return (
    <main>
      <section>
        <h1 className="app__title">DESSERTS</h1>
        <ul className="item__list">
          {items.map((item) => {
            return (
              items && (
                <Item {...item} key={item.id} addItemHandler={addItemHandler} />
              )
            );
          })}
        </ul>
      </section>
      <aside className="cart">
        <h1 className="cart__counter">Your cart ({cartItems.length})</h1>
        {cartItems.length === 0 ? (
          <p className="cart__p">Your cart is empty</p>
        ) : (
          <ul className="cart__list">
            {cartItems.map((cartItem) => {
              return (
                cartItems && (
                  <CartItem
                    {...cartItem}
                    key={cartItem.id}
                    handleDeleteItem={handleDeleteItem}
                  />
                )
              );
            })}
            <div className="total__container">
              <h1>Total:</h1>
              <h1>${totalPrice.toFixed(2)}</h1>
            </div>
            <button className="confirm__order__btn">Confirm Order</button>
          </ul>
        )}
      </aside>
    </main>
  );
}

export default App;
