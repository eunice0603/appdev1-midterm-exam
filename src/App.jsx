import './App.css'

function App() {  
  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot" />
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s">
    
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Chain App Dev" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter">Newsletter</a>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt" /> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      <div id="modal" className="popupContainer" style={{ display: "none" }}>
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <span className="modal_close">
            <i className="fa fa-times" />
          </span>
        </div>
        <section className="popupBody">
          {/* Social Login */}
          <div className="social_login">
            <div className="">
              <a href="#" className="social_box fb">
                <span className="icon">
                  <i className="fab fa-facebook" />
                </span>
                <span className="icon_title">Connect with Facebook</span>
              </a>
              <a href="#" className="social_box google">
                <span className="icon">
                  <i className="fab fa-google-plus" />
                </span>
                <span className="icon_title">Connect with Google</span>
              </a>
            </div>
            <div className="centeredText">
              <span>Or use your Email address</span>
            </div>
            <div className="action_btns">
              <div className="one_half">
                <a href="#" id="login_form" className="btn">
                  Login
                </a>
              </div>
              <div className="one_half last">
                <a href="#" id="register_form" className="btn">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          {/* Username & Password Login form */}
          <div className="user_login">
            <form>
              <label>Email / Username</label>
              <input type="text" />
              <br />
              <label>Password</label>
              <input type="password" />
              <br />
              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me on this computer</label>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left" /> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Login
                  </a>
                </div>
              </div>
            </form>
            <a href="#" className="forgot_password">
              Forgot password?
            </a>
          </div>
          {/* Register Form */}
          <div className="user_register">
            <form>
              <label>Full Name</label>
              <input type="text" />
              <br />
              <label>Email Address</label>
              <input type="email" />
              <br />
              <label>Password</label>
              <input type="password" />
              <br />
              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label htmlFor="send_updates">Send me occasional email updates</label>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left" /> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Register
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s">

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s">

                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Get The Latest App From App Stores</h2>
                        <p>
                          Chain App Dev is an app landing page HTML5 template based on
                          Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great
                          website to download free CSS templates.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple" />
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s">

                    <img src="assets/images/slider-dec.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
