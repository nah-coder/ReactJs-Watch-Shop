import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import request from "../api/Request";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Product_Detail() {
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const [product, setProduct] = useState(null);

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

  var settingSlide = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Chuyển `Image` thành mảng nếu nó là chuỗi
  const images = Array.isArray(product.Image) ? product.Image : [product.Image];

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
            <div className="row justify-content-center">
              <div className="col-lg-12">
                {/* <img
                  src={"http://localhost:3000/" + product.Image}
                  alt="#"
                  className="img-fluid"
                /> */}
                 <Slider className="slider" {...settingSlide}>
                  {images.map((image, index) => (
                    <div className="single_product_img" key={index}>
                      <img
                        src={`http://localhost:3000/${image}`}
                        alt="Product"
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="col-lg-8">
                <div className="single_product_text text-center">
                  <h3>{product.Name}</h3>
                  <p>{product.Description}</p>
                  <div className="card_area">
                    <div className="product_count_area">
                      <p>Quantity</p>
                      <div className="product_count d-inline-block">
                        <span className="product_count_item inumber-decrement">
                          {" "}
                          <i className="ti-minus" />
                        </span>
                        <input
                          className="product_count_item input-number"
                          type="text"
                          defaultValue={1}
                          min={0}
                          max={10}
                        />
                        <span className="product_count_item number-increment">
                          {" "}
                          <i className="ti-plus" />
                        </span>
                      </div>
                      <p>$ {product.Price}</p>
                    </div>
                    <div className="add_to_cart">
                      <a href="/some" className="btn_3">
                        add to cart
                      </a>
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

export default Product_Detail;
