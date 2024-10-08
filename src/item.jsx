import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
function Item(props) {
  const {
    id,
    category,
    name,
    price,
    amount,
    img,
    addItemHandler,
    isInCart,
    setIsInCart,
  } = props;
  return (
    <li className="list__item">
      <div className="image__container">
        <img src={img} alt="" className="item__img" />
        {isInCart ? (
          <button className="amount__button">
            <CiCircleMinus />
            {amount}
            <CiCirclePlus />
          </button>
        ) : (
          <button
            onClick={() => {
              addItemHandler(id);
              setIsInCart(!isInCart);
            }}
            className="add__btn"
          >
            Add to cart
          </button>
        )}
      </div>
      <div className="info__container">
        <h1 className="category">{category}</h1>
        <h1 className="name">{name}</h1>
        <h1 className="price">${price.toFixed(2)}</h1>
      </div>
    </li>
  );
}

export default Item;
