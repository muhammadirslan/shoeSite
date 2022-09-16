import React from "react";

export default function Slider() {
  return (
    <div>
      <section className="banner_main">
        <div id="banner1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#banner1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#banner1" data-slide-to="1"></li>
            <li data-target="#banner1" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption">
                  <div className="text-bg">
                    <h1>
                      {" "}
                      <span>
                        Welcome <br />
                      </span>
                      To <span className="text-info">Sneaker</span>{" "}
                      <span className="text-danger">Plug</span>
                    </h1>
                    <figure>
                      <img src="images/shoes/Sneakers/home.png " alt="#" />
                    </figure>
                    <a className="read_more" href="#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption">
                  <div className="text-bg">
                    <h1>
                      {" "}
                      <span className="blu">
                        Welcome <br />
                      </span>
                      To Our Shoes Site
                    </h1>
                    <figure>
                      <img src="images/banner_img.png" alt="#" />
                    </figure>
                    <a className="read_more" href="#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
