import { RxCrossCircled } from "react-icons/rx";

function CartItem(props) {
  const { id, name, price, amount } = props;

  return (
    <li className="cart__list__item">
      <div className="title__container">
        <h1 className="title">{name}</h1>
        <RxCrossCircled className="delete__btn" />
      </div>
      <div className="price__container">
        <div>
          <p className="cart__item__amount">x{amount}</p>
          <p className="cart__item__price">${price}</p>
        </div>
        <p className="cart__item__total__price">price</p>
      </div>
    </li>
  );
}

export default CartItem;
