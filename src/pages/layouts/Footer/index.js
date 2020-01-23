import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link to="/">Web design</Link>
                </li>
                <li>
                  <Link to="/">Development</Link>
                </li>
                <li>
                  <Link to="/">Hosting</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/">Company</Link>
                </li>
                <li>
                  <Link to="/">Team</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-snapchat-ghost"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
          <p className="copyright">Company Name © 2017</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
