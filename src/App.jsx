import { useState } from "react";
import data from "./data";
import Item from "./item";
import "./App.css";

function App() {
  const [items, setItems] = useState(data);

  return (
    <>
      <ul>
        {items.map((item) => {
          return items && <Item {...item} key={item.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
