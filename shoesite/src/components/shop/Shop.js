import React from "react";

export default function Shop() {
  return (
    <div>
      <div id="about" className="shop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="shop_img">
                <figure>
                  <img src="images/shoes/Sneakers/femaleShoes.png" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-7 padding_right0">
              <div className="max_width">
                <div className="titlepage">
                  <h2>Best Shoes At Our shop</h2>
                  <p>
                    When to judge a peson you can judge him buy his choice of
                    shoes. So for the first impression that you get we have a
                    best collection of shoes for you in our stock.
                  </p>
                  <a className="read_more" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
