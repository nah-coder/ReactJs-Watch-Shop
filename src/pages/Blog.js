import React from "react";

function Blog() {
  const Blog = [
    {
      Day: "23",
      Month: "Mat",
      Images: "assets/img/blog/single_blog_1.png",
      Google: "Google inks pact for new 35-storey office",
      Description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      Travel: "Travel, Lifestyle",
      Comments: "03 Comments",
    },
    {
      Day: "15",
      Month: "Jan",
      Images: "assets/img/blog/single_blog_2.png",
      Google: "Google inks pact for new 35-storey office",
      Description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      Travel: "Travel, Lifestyle",
      Comments: "15 Comments",
    },
    {
      Day: "12",
      Month: "Feb",
      Images: "assets/img/blog/single_blog_3.png",
      Google: "Google inks pact for new 35-storey office",
      Description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      Travel: "Travel, Lifestyle",
      Comments: "12 Comments",
    },
    {
      Day: "28",
      Month: "Dec",
      Images: "assets/img/blog/single_blog_4.png",
      Google: "Google inks pact for new 35-storey office",
      Description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      Travel: "Travel, Lifestyle",
      Comments: "07 Comments",
    },
    {
      Day: "17",
      Month: "Jun",
      Images: "assets/img/blog/single_blog_5.png",
      Google: "Google inks pact for new 35-storey office",
      Description:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      Travel: "Travel, Lifestyle",
      Comments: "05 Comments",
    },
  ];

  const Post = [
    {
      Image: "assets/img/post/post_1.png",
      Content: "From life was you fish...",
      Time: "January 12, 2019",
    },
    {
      Image: "assets/img/post/post_2.png",
      Content: "The Amazing Hubble",
      Time: "02 Hours ago",
    },
    {
      Image: "assets/img/post/post_3.png",
      Content: "Astronomy Or Astrology",
      Time: "03 Hours ago",
    },
    {
      Image: "assets/img/post/post_4.png",
      Content: "Asteroids telescope",
      Time: "01 Hours ago",
    },
  ];

  return (
    <>
      <main>
        {/*? Hero Area Start*/}
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Blog</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*? Hero Area End*/}
        {/*================Blog Area =================*/}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  {Blog.map((item) => (
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src={item.Images}
                          alt=""
                        />
                        <a href="/some-page" className="blog_item_date">
                          <h3>{item.Day}</h3>
                          <p>{item.Month}</p>
                        </a>
                      </div>
                      <div className="blog_details">
                        <a className="d-inline-block" href="single-blog.html">
                          <h2>{item.Google}</h2>
                        </a>
                        <p>{item.Description}</p>
                        <ul className="blog-info-link">
                          <li>
                            <a href="/some-page">
                              <i className="fa fa-user" /> {item.Travel}
                            </a>
                          </li>
                          <li>
                            <a href="/some-page">
                              <i className="fa fa-comments" /> {item.Comments}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  ))}
                  <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          href="/some-page"
                          className="page-link"
                          aria-label="Previous"
                        >
                          <i className="ti-angle-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="/some-page" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="/some-page" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/some-page"
                          className="page-link"
                          aria-label="Next"
                        >
                          <i className="ti-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Search Keyword'"
                          />
                          <div className="input-group-append">
                            <button className="btns" type="button">
                              <i className="ti-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="/some-page" className="d-flex">
                          <p>Resaurant food</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="/some-page" className="d-flex">
                          <p>Travel news</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="/some-page" className="d-flex">
                          <p>Modern technology</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="/some-page" className="d-flex">
                          <p>Product</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="/some-page" className="d-flex">
                          <p>Inspiration</p>
                          <p>21</p>
                        </a>
                      </li>
                      <li>
                        <a href="/some-page" className="d-flex">
                          <p>Health Care (21)</p>
                          <p>09</p>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    {Post.map((item) => (
                      <div className="media post_item">
                        <img src={item.Image} alt="post" />
                        <div className="media-body">
                          <a href="single-blog.html">
                            <h3>{item.Content}</h3>
                          </a>
                          <p>{item.Time}</p>
                        </div>
                      </div>
                    ))}
                  </aside>
                  <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                      <li>
                        <a href="/some-page">project</a>
                      </li>
                      <li>
                        <a href="/some-page">love</a>
                      </li>
                      <li>
                        <a href="/some-page">technology</a>
                      </li>
                      <li>
                        <a href="/some-page">travel</a>
                      </li>
                      <li>
                        <a href="/some-page">restaurant</a>
                      </li>
                      <li>
                        <a href="/some-page">life style</a>
                      </li>
                      <li>
                        <a href="/some-page">design</a>
                      </li>
                      <li>
                        <a href="/some-page">illustration</a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Instagram Feeds</h4>
                    <ul className="instagram_row flex-wrap">
                      <li>
                        <a href="/some-page">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_5.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/some-page">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_6.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/some-page">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_7.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/some-page">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_8.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/some-page">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_9.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/some-page">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_10.png"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email'"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================Blog Area =================*/}
      </main>
    </>
  );
}

export default Blog;
