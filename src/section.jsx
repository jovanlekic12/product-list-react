import Item from "./item";

function Section(props) {
  const { items, increaseQuantity, decreaseQuantity, addItemHandler } = props;
  return (
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
  );
}
export default Section;
