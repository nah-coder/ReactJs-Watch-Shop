import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    username: localStorage.getItem("username") || "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token") // Kiểm tra nếu đã đăng nhập
  );

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fake API Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Xóa lỗi cũ

    try {
      const response = await axios.post("https://66e2fd20494df9a478e3e211.mockapi.io/api/v1/Authen", {
        username: formData.username,
        password: formData.password,
      });

      if (formData.username === "UserName 1" && formData.password === "Password 1") {
        localStorage.setItem("token", response.data.Token);
        localStorage.setItem("username", formData.username);
        setIsLoggedIn(true); // Đánh dấu đã đăng nhập
        alert("Đăng nhập thành công!");
      } else {
        setError("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      setError("Lỗi kết nối API!");
    }
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setFormData({ username: "", password: "" }); // Reset form
  };

  return (
    <main>
      {/* Hero Area Start */}
      <div className="slider-area ">
        <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Login</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

      {/* Login Form */}
      <section className="login_part section_padding ">
        <div className="container">
          <div className="row align-items-center">
            {/* PHẦN MÀU TÍM */}
            <div className="col-lg-6 col-md-6">
              <div className="login_part_text text-center">
                <div className="login_part_text_iner">
                  {isLoggedIn ? (
                    <>
                      <h2>Xin chào, {localStorage.getItem("username")}!</h2>
                      <p>Bạn đã đăng nhập thành công.</p>
                      <button onClick={handleLogout} className="btn_3">
                        Đăng xuất
                      </button>
                    </>
                  ) : (
                    <>
                      <h2>New to our Shop?</h2>
                      <p>Sign up now to get started!</p>
                      <a href="#" className="btn_3">
                        Create an Account
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* FORM ĐĂNG NHẬP */}
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  {!isLoggedIn ? (
                    <>
                      <h3>Welcome Back! Please Sign in now</h3>
                      {error && <p className="error-message">{error}</p>}
                      <form className="row contact_form" onSubmit={handleLogin}>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <div className="creat_account d-flex align-items-center">
                            <input type="checkbox" id="f-option" name="selector" />
                            <label htmlFor="f-option">Remember me</label>
                          </div>
                          <button type="submit" className="btn_3">
                            Log in
                          </button>
                          <a className="lost_pass" href="#">
                            Forget password?
                          </a>
                        </div>
                      </form>
                    </>
                  ) : (
                    <p>Bạn đã đăng nhập rồi!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Login Part End */}
    </main>
  );
}

export default Login;
