import React from "react";

export default function AboutSection() {
  return (
    <div>
      <div className="about">
        <div className="container mt-10">
          <div className="row d_flex ">
            <div className="col-md-5 ">
              <div className="about_img mx-auto">
                <figure>
                  <img
                    src="images/shoes/Sneakers/aboutadd.png"
                    width="300"
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-7">
              <div className="titlepage mt-5 border-0 ">
                <h2>About Our Shop</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
              {/* <a className="read_more" href="#">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
