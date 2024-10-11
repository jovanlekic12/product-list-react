import OverlayItem from "./overlayItem";
import { CiCircleCheck } from "react-icons/ci";

function Overlay(props) {
  const {
    cartItems,
    isOrder,
    totalPrice,
    handleStartNewOrder,
    handleDeleteItem,
  } = props;
  return (
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
  );
}

export default Overlay;
