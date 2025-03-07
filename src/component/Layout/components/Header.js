import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        {/* Header Start */}
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper">
                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </Link>
                </div>
                {/* Main-menu */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">shop</Link>
                      </li>
                      <li>
                        <Link to="/about">about</Link>
                      </li>
                      <li className="hot">
                        <Link to="/about">Latest</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/shop"> Product list</Link>
                          </li>
                          <li>
                            <Link to="/product_details"> Product Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                        <ul className="submenu">
                          <li className="">
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/login">Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/cart">Cart</Link>
                          </li>
                          <li>
                            <Link to="/confirmation">Confirmation</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Product Checkout</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Header Right */}
                <div className="header-right">
                  <ul>
                    <li>
                      <div className="nav-search search-switch">
                        <span className="flaticon-search" />
                      </div>
                    </li>
                    <li>
                      {" "}
                      <Link to="/login">
                        <span className="flaticon-user" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <span className="flaticon-shopping-cart" />
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>
    </>
  );
}

export default Header;
