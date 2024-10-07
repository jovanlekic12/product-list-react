function Item(props) {
  const { id, category, name, price, amount, img } = props;

  return (
    <li className="list__item">
      <div className="image__container">
        <img src={img} alt="" />
        <button className="add__btn">Add to cart</button>
      </div>
      <div className="info__container">
        <h1 className="category">{category}</h1>
        <h1 className="name">{name}</h1>
        <h1 className="price">{price}</h1>
      </div>
    </li>
  );
}

export default Item;
