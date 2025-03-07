import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import request from "../api/Request";
import { act_buy_item } from "../Action";
import { connect } from "react-redux";

function Product_Detail({ buyItem }) {  // Nhận buyItem từ props
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Chuyển state quantity sang useState

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await request.get(`Product/${id}`);
        console.log("Product data:", res.data); // Kiểm tra dữ liệu trả về
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      getProductDetail();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
  }

  const handleBy = () => {
    buyItem(product, quantity);
  };

  // Hàm xử lý thay đổi số lượng
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  // Hàm tăng số lượng
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm giảm số lượng
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

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
                    <h2>Watch Shop</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End*/}
        {/*================Single Product Area =================*/}
        <div className="product_image_area">
          <div className="container">
            <div className="row justify-content-center" key={product.id}>
              <div className="col-lg-12">
                <img
                  src={"http://localhost:3000/" + product.Image}
                  alt="#"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8">
                <div className="single_product_text text-center">
                  <h3>{product.Name}</h3>
                  <p>{product.Description}</p>
                  <div className="card_area">
                    <div className="product_count_area">
                      <p>Quantity</p>
                      <div className="product_count d-inline-block">
                        <span
                          className="product_count_item number-increment"
                          onClick={decreaseQuantity}
                        >
                          <i className="ti-plus" />
                        </span>
                        <input
                          className="product_count_item input-number"
                          name="quantity"
                          value={quantity}
                          type="number"
                          onChange={handleQuantityChange}
                        />
                        <span className="product_count_item number-increment" onClick={increaseQuantity}>
                          {" "}
                          <i className="ti-plus" />
                        </span>
                      </div>
                      <p>$ {product.Price}</p>
                    </div>
                    <div className="add_to_cart">
                      <Link to="/cart" className="btn_3" onClick={handleBy}>
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*================End Single Product Area =================*/}
        {/* subscribe part here */}
        <section className="subscribe_part section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="subscribe_part_content">
                  <h2>Get promotions &amp; updates!</h2>
                  <p>
                    Seamlessly empower fully researched growth strategies and
                    interoperable internal or “organic” sources credibly
                    innovate granular internal .
                  </p>
                  <div className="subscribe_form">
                    <input type="email" placeholder="Enter your mail" />
                    <a href="/some" className="btn_1">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* subscribe part end */}
      </main>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    //bắn action mua hàng đến reducers
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    },
    //
  };
};

export default connect(null, mapDispatchToProps)(Product_Detail);
