import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </a>
                    <br /> Lahore
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                    <br /> +92 3035340096
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <br /> m.irslan786@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    © 2022 All Rights Reserved. Design by
                    <a href> Muhammad Irslan</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
