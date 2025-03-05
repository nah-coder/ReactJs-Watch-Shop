import React from "react";

function CartItem({ renderCart }) {
  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img src={renderCart.Image} alt="" />
          </div>
          <div className="media-body">
            <p>{renderCart.Name}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>$ {renderCart.Price}</h5>
      </td>
      <td>
        <div className="product_count">
          <span className="input-number-decrement">
            <i className="ti-minus" />
          </span>
          <input
            className="input-number"
            type="number"
            value={renderCart.quantity}
            min={1}
            readOnly // Nếu muốn thay đổi, cần truyền sự kiện từ component cha
          />
          <span className="input-number-increment">
            <i className="ti-plus" />
          </span>
        </div>
      </td>
      <td>
        <h5>$ {renderCart.Price * renderCart.quantity}</h5>
      </td>
    </tr>
  );
}

export default CartItem;
