import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer class="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p  className="text-justify">
                Movie.com is a streaming platform that offers you the pleasure
                to watch your best movies and series for free, in high
                definition (HD).
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Movies</h6>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Series</h6>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#">Movie App</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
