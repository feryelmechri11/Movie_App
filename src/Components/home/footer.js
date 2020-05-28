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
              <p className="text-justify">
                Movie.com is a streaming platform that offers you the pleasure
                to watch your best movies and series for free, in high
                definition (HD).
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h4>Movies</h4>
            </div>

            <div className="col-xs-6 col-md-3">
              <h4>Series</h4>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <p className="follow">Follow us on </p>
            <div className="row">
              <div className="col-md-12 py-5">
                <div className="mb-5 flex-center">
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>
                  <a className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>
                </div>
            </div>
            <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#">Movie FM</a>.
              </p>
            </div>
          </div>
          
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
