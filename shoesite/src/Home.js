import React from "react";
import Data from "./Data/Data.json";

const Home = () => {
  return Data.map((item) => {
    return (
      <div className="card-container">
        <div className="image-container">
          <img src={item.src11} alt="shoe" className="img" />
        </div>
        <h3>{item.shoe_genre}</h3>
      </div>
    );
  });
};

export default Home;
