import { useState } from "react";
import data from "./data";
import Item from "./item";
import "./App.css";

function App() {
  const [items, setItems] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(id) {
    const newItem = items.find((item) => item.id === id);
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
          <ul className="cart__list"></ul>
        )}
      </aside>
    </main>
  );
}

export default App;
