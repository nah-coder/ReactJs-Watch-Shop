import React from "react";

function Index() {
  const Arrivals = [
    {
      Name: "Thermo Ball Etip Gloves",
      Price: 69.813,
      Image: "assets/img/gallery/new_product1.png",
    },
    {
      Name: "Rolex Daytona (Platinum)",
      Price: 58.139,
      Image: "assets/img/gallery/new_product2.png",
    },
    {
      Name: "Thermo Ball Etip Gloves",
      Price: 84.963,
      Image: "assets/img/gallery/new_product3.png",
    },
  ];

  const Products = [
    {
      Image: "assets/img/gallery/popular1.png",
      Name: "Rolex Daytona (Platinum)",
      Price: 86379,
      Description:
        "The Rolex Submariner Date is one of the most legendary dive watches ever created. Introduced in 1953, it set the benchmark for underwater timepieces. Made from Oystersteel, the watch is highly resistant to corrosion and features a Cerachrom ceramic bezel insert for durability. It boasts a self-winding Caliber 3235 movement, offering 70 hours of power reserve. The Cyclops lens over the date improves legibility, while its 300m water resistance ensures reliability for professional divers. Rolex’s iconic Mercedes hands and Chromalight display provide excellent visibility in low-light conditions.",
      id: "1",
    },
    {
      Image: "assets/img/gallery/popular2.png",
      Name: "Rolex Daytona (Platinum)",
      Price: 65438,
      Description:
        "Designed by the legendary Gérald Genta in 1972, the Audemars Piguet Royal Oak was the world’s first luxury sports watch made of stainless steel. Its distinctive octagonal bezel, secured by eight hexagonal screws, and Tapisserie patterned dial set it apart. The integrated bracelet construction ensures supreme comfort on the wrist. Equipped with an ultra-thin self-winding movement, this watch embodies the highest standards of fine watchmaking, offering both precision and elegance.",
      id: "2",
    },
    {
      Image: "assets/img/gallery/popular3.png",
      Name: "Rolex Daytona (Platinum)",
      Price: 66135,
      Description:
        "The Patek Philippe Nautilus 5711 is one of the most sought-after luxury sports watches, also designed by Gérald Genta in 1976. Its rounded octagonal case, inspired by a ship’s porthole, and the horizontally embossed blue dial give it a timeless appeal. The Caliber 26-330 SC movement is visible through the sapphire caseback, demonstrating Patek Philippe’s mastery of mechanical watchmaking. This timepiece is an icon of exclusivity, often selling for well over retail price due to its rarity.",
      id: "3",
    },
    {
      Image: "assets/img/gallery/popular4.png",
      Name: "Rolex Daytona (Platinum)",
      Price: 85638,
      Description:
        "Nicknamed the Moonwatch, the Omega Speedmaster Professional is the first watch worn on the moon during the Apollo 11 mission in 1969. It features a Hesalite crystal for historical accuracy and a manual-winding movement (Caliber 3861) that ensures precision and longevity. The black dial, three-register chronograph layout, and tachymeter bezel make it an essential tool for space missions. NASA-certified, this watch has undergone the most rigorous testing, proving its extreme durability in zero gravity and harsh environments.",
      id: "4",
    },
    {
      Image: "assets/img/gallery/popular5.png",
      Name: "Rolex Daytona (Platinum)",
      Price: 30782,
      Description:
        "Vacheron Constantin, one of the oldest Swiss watchmakers (since 1755), created the Overseas collection as a luxury sports watch with refined aesthetics. It features an interchangeable strap system, allowing wearers to switch between steel, rubber, and leather bands effortlessly. The movement is Hallmark of Geneva certified, ensuring the highest level of Swiss craftsmanship. With 150m water resistance, an anti-magnetic shield, and a highly decorated perlage-finished movement, this watch is both robust and elegant.",
      id: "5",
    },
    {
      Image: "assets/img/gallery/popular6.png",
      Name: "Rolex Daytona (Platinum)",
      Price: 34367,
      Description:
        "The Richard Mille RM 11-03 is a high-tech racing-inspired timepiece featuring aerospace-grade materials like titanium, TPT carbon, and sapphire crystals. Its skeletonized dial reveals the intricate self-winding flyback chronograph movement with a variable-geometry rotor, which optimizes winding efficiency based on the wearer’s activity level. With a futuristic tonneau-shaped case and innovative shock-resistant construction, it is a favorite among athletes and celebrities, embodying the phrase “a Formula 1 car for the wrist.”",
      id: "6",
    },
  ];
  return (
    <>
      <main>
        {/*? slider Area Start */}
        <div className="slider-area ">
          <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center slide-bg">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <div className="hero__caption">
                      <h1
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                        data-duration="2000ms"
                      >
                        Select Your New Perfect Style
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-delay=".7s"
                        data-duration="2000ms"
                      >
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        is aute irure.
                      </p>
                      {/* Hero-btn */}
                      <div
                        className="hero__btn"
                        data-animation="fadeInLeft"
                        data-delay=".8s"
                        data-duration="2000ms"
                      >
                        <a href="industries.html" className="btn hero-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                    <div
                      className="hero__img"
                      data-animation="bounceIn"
                      data-delay=".4s"
                    >
                      <img
                        src="assets/img/hero/watch.png"
                        alt=""
                        className=" heartbeat"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider Area End*/}
        {/* ? New Product Start */}
        <section className="new-product-area section-padding30">
          <div className="container">
            {/* Section tittle */}
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle mb-70">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {Arrivals.map((item, index) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  key={index}
                >
                  <div className="single-new-pro mb-30 text-center">
                    <div className="product-img">
                      <img src={item.Image} alt="" />
                    </div>
                    <div className="product-caption">
                      <h3>
                        <a to="/product_details">{item.Name}</a>
                      </h3>
                      <span>$ {item.Price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*  New Product End */}
        {/*? Gallery Area Start */}
        <div className="gallery-area">
          <div className="container-fluid p-0 fix">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage: "url(assets/img/gallery/gallery1.png)",
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage: "url(assets/img/gallery/gallery2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img small-img"
                        style={{
                          backgroundImage:
                            "url(assets/img/gallery/gallery3.png)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img small-img"
                        style={{
                          backgroundImage:
                            "url(assets/img/gallery/gallery4.png)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery Area End */}
        {/*? Popular Items Start */}
        <div className="popular-items section-padding30">
          <div className="container">
            {/* Section tittle */}
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle mb-70 text-center">
                  <h2>Popular Items</h2>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {Products.map((item,index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                  <div className="single-popular-items mb-50 text-center">
                    <div className="popular-img">
                      <img src={item.Image} alt="" />
                      <div className="img-cap">
                        <span>Add to cart</span>
                      </div>
                      <div className="favorit-items">
                        <span className="flaticon-heart" />
                      </div>
                    </div>
                    <div className="popular-caption">
                      <h3>
                        <a href="product_details.html">{item.Name}</a>
                      </h3>
                      <span>$ {item.Price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Button */}
            <div className="row justify-content-center">
              <div className="room-btn pt-70">
                <a href="catagori.html" className="btn view-btn1">
                  View More Products
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Popular Items End */}
        {/*? Video Area Start */}
        <div className="video-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="video-wrap">
                  <div className="play-btn ">
                    <a
                      className="popup-video"
                      href="https://www.youtube.com/watch?v=KMc6DyEJp04"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="thumb-content-box">
              <div className="thumb-content">
                <h3>Next Video</h3>
                <a href="/some-page">
                  {" "}
                  <i className="flaticon-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Video Area End */}
        {/*? Watch Choice  Start*/}
        <div className="watch-area section-padding30">
          <div className="container">
            <div className="row align-items-center justify-content-between padding-130">
              <div className="col-lg-5 col-md-6">
                <div className="watch-details mb-40">
                  <h2>Watch of Choice</h2>
                  <p>
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                  <a href="shop.html" className="btn">
                    Show Watches
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-10">
                <div className="choice-watch-img mb-40">
                  <img src="assets/img/gallery/choce_watch1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-6 col-sm-10">
                <div className="choice-watch-img mb-40">
                  <img src="assets/img/gallery/choce_watch2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="watch-details mb-40">
                  <h2>Watch of Choice</h2>
                  <p>
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                  <a href="shop.html" className="btn">
                    Show Watches
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Watch Choice  End*/}
        {/*? Shop Method Start*/}
        <div className="shop-method-area">
          <div className="container">
            <div className="method-wrapper">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-package" />
                    <h6>Free Shipping Method</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-unlock" />
                    <h6>Secure Payment System</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-reload" />
                    <h6>Secure Payment System</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Method End*/}
      </main>
    </>
  );
}

export default Index;
