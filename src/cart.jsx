import CartItem from "./cartItem";

function Cart(props) {
  const { cartItems, setIsOrder, handleDeleteItem, totalPrice } = props;
  return (
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
          <button
            onClick={() => setIsOrder((prev) => !prev)}
            className="confirm__order__btn"
          >
            Confirm Order
          </button>
        </ul>
      )}
    </aside>
  );
}

export default Cart;
