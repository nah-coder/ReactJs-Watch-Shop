import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

function Cart({ cart }) {
  let elementCartItem = cart.map((item, index) => {
    return <CartItem key={index} renderCart={item} stt={index + 1}/>;
  });
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].product.Price*cart[i].quantity;
    
  }
  return (
    <>
      <main>
        {/* Hero Area Start*/}
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Cart List</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*================Cart Area =================*/}
        <section className="cart_area section_padding">
          <div className="container">
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elementCartItem}
                    <tr className="bottom_button">
                      <td>
                        <a className="btn_1" href="/some-page">
                          Update Cart
                        </a>
                      </td>
                      <td />
                      <td />
                      <td>
                        <div className="cupon_text float-right">
                          <a className="btn_1" href="/some-page">
                            Close Coupon
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>$ {total}</h5>
                      </td>
                    </tr>
                    <tr className="shipping_area">
                      <td />
                      <td />
                      <td>
                        <h5>Shipping</h5>
                      </td>
                      <td>
                        <div className="shipping_box">
                          <ul className="list">
                            <li>
                              Flat Rate: $5.00
                              <input
                                type="radio"
                                aria-label="Radio button for following text input"
                              />
                            </li>
                            <li>
                              Free Shipping
                              <input
                                type="radio"
                                aria-label="Radio button for following text input"
                              />
                            </li>
                            <li>
                              Flat Rate: $10.00
                              <input
                                type="radio"
                                aria-label="Radio button for following text input"
                              />
                            </li>
                            <li className="active">
                              Local Delivery: $2.00
                              <input
                                type="radio"
                                aria-label="Radio button for following text input"
                              />
                            </li>
                          </ul>
                          <h6>
                            Calculate Shipping
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </h6>
                          <select className="shipping_select">
                            <option value={1}>Bangladesh</option>
                            <option value={2}>India</option>
                            <option value={4}>Pakistan</option>
                          </select>
                          <select className="shipping_select section_bg">
                            <option value={1}>Select a State</option>
                            <option value={2}>Select a State</option>
                            <option value={4}>Select a State</option>
                          </select>
                          <input
                            className="post_code"
                            type="text"
                            placeholder="Postcode/Zipcode"
                          />
                          <a className="btn_1" href="/some-page">
                            Update Details
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="checkout_btn_inner float-right">
                  <a className="btn_1" href="/some-page">
                    Continue Shopping
                  </a>
                  <a className="btn_1 checkout_btn_1" href="/some-page">
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Cart Area =================*/}
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart, // Giả sử Redux có reducer `cart`
});

export default connect(mapStateToProps, null)(Cart);
