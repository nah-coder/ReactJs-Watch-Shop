import React from "react";

function Confirmation() {
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
                    <h2>Confirmation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*================ confirmation part start =================*/}
        <section className="confirmation_part section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="confirmation_tittle">
                  <span>Thank you. Your order has been received.</span>
                </div>
              </div>
              <div className="col-lg-6 col-lx-4">
                <div className="single_confirmation_details">
                  <h4>order info</h4>
                  <ul>
                    <li>
                      <p>order number</p>
                      <span>: 60235</span>
                    </li>
                    <li>
                      <p>data</p>
                      <span>: Oct 03, 2017</span>
                    </li>
                    <li>
                      <p>total</p>
                      <span>: USD 2210</span>
                    </li>
                    <li>
                      <p>mayment methord</p>
                      <span>: Check payments</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-lx-4">
                <div className="single_confirmation_details">
                  <h4>Billing Address</h4>
                  <ul>
                    <li>
                      <p>Street</p>
                      <span>: 56/8</span>
                    </li>
                    <li>
                      <p>city</p>
                      <span>: Los Angeles</span>
                    </li>
                    <li>
                      <p>country</p>
                      <span>: United States</span>
                    </li>
                    <li>
                      <p>postcode</p>
                      <span>: 36952</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-lx-4">
                <div className="single_confirmation_details">
                  <h4>shipping Address</h4>
                  <ul>
                    <li>
                      <p>Street</p>
                      <span>: 56/8</span>
                    </li>
                    <li>
                      <p>city</p>
                      <span>: Los Angeles</span>
                    </li>
                    <li>
                      <p>country</p>
                      <span>: United States</span>
                    </li>
                    <li>
                      <p>postcode</p>
                      <span>: 36952</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="order_details_iner">
                  <h3>Order Details</h3>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" colSpan={2}>
                          Product
                        </th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colSpan={2}>
                          <span>Pixelstore fresh Blackberry</span>
                        </th>
                        <th>x02</th>
                        <th>
                          {" "}
                          <span>$720.00</span>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <span>Pixelstore fresh Blackberry</span>
                        </th>
                        <th>x02</th>
                        <th>
                          {" "}
                          <span>$720.00</span>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <span>Pixelstore fresh Blackberry</span>
                        </th>
                        <th>x02</th>
                        <th>
                          {" "}
                          <span>$720.00</span>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={3}>Subtotal</th>
                        <th>
                          {" "}
                          <span>$2160.00</span>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={3}>shipping</th>
                        <th>
                          <span>flat rate: $50.00</span>
                        </th>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th scope="col" colSpan={3}>
                          Quantity
                        </th>
                        <th scope="col">Total</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ confirmation part end =================*/}
      </main>
    </>
  );
}

export default Confirmation;
