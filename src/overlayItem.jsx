function OverlayItem(props) {
  const { id, name, price, img, amount } = props;
  const totalItemPrice = calculateTotalPrice();

  function calculateTotalPrice() {
    let totalPrice;
    totalPrice = amount * price;
    return totalPrice;
  }
  return (
    <li className="overlay__list__item">
      <div className="overlay__list__item__img__container">
        <img src={img} alt="505" />
        <div className="overlay__list__item__name__container">
          <h1>{name}</h1>
          <div className="overlay__list__item__amount__container">
            <p>{amount}x</p>
            <p>${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <p className="overlay__list__item__price">${totalItemPrice.toFixed(2)}</p>
    </li>
  );
}

export default OverlayItem;
