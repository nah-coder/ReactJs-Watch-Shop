import React, { useState } from "react";

function CartItem({ renderCart }) {
  const [quantity, setQuantity] = useState(renderCart.quantity);
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm giảm số lượng
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img src={renderCart.product.Image} alt="" />
          </div>
          <div className="media-body">
            <p>{renderCart.product.Name}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>$ {renderCart.product.Price}</h5>
      </td>
      <td>
        <div className="product_count">
        <span className="input-number-decrement" onClick={decreaseQuantity} style={{ lineHeight: "11px" }}>
            <i className="ti-minus" />
          </span>
          <input
            className="input-number"
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
            // readOnly
          />
          <span className="input-number-increment" onClick={increaseQuantity}>
            <i className="ti-plus" />
          </span>
        </div>
      </td>
      <td>
        <h5>$ {renderCart.product.Price * quantity}</h5>
      </td>
    </tr>
  );
}

export default CartItem;
