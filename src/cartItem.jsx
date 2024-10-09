import { RxCrossCircled } from "react-icons/rx";
function CartItem(props) {
  const { id, name, price, amount, handleDeleteItem } = props;
  const totalItemPrice = calculateTotalPrice();

  function calculateTotalPrice() {
    let totalPrice;
    totalPrice = amount * price;
    return totalPrice;
  }
  return (
    <li className="cart__list__item">
      <div className="title__container">
        <h1 className="title">{name}</h1>
        <RxCrossCircled
          className="delete__btn"
          onClick={() => handleDeleteItem(id)}
        />
      </div>
      <div className="price__container">
        <div>
          <p className="cart__item__amount">x{amount}</p>
          <p className="cart__item__price">${price.toFixed(2)}</p>
        </div>
        <p className="cart__item__total__price">${totalItemPrice.toFixed(2)}</p>
      </div>
    </li>
  );
}

export default CartItem;
