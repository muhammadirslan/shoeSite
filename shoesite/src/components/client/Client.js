import React from "react";

export default function Client() {
  return (
    <div>
      <div className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>What say our clients</h2>
                <p>
                  Clients information is very importat when to run a business
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                id="myCarousel"
                className="carousel slide clients_Carousel "
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption ">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="clients_box">
                              <figure>
                                <img src="images/shoes/download.jpg" alt="#" />
                              </figure>
                              <h3>Sohail Ahmad</h3>
                              <p>
                                I know their shoes are great - I always receive
                                compliments when wearing them. Now I know the
                                company also has employees who put their
                                customers first!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="clients_box">
                              <figure>
                                <img src="images/our.png" alt="#" />
                              </figure>
                              <h3>Sandy Mark</h3>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters,It is a long established
                                fact a more-or-less normal distribution of
                                letters,
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="clients_box">
                              <figure>
                                <img src="images/our.png" alt="#" />
                              </figure>
                              <h3>Sohail Ahmad</h3>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters,It is a long established
                                fact a more-or-less normal distribution of
                                letters,
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
