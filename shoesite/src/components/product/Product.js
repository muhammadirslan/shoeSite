import React from "react";
import {
  useCreateProductDispatchContext,
  useCreateProductStateContext,
} from "../../context/productContext";
import "./Product.css";
export default function Product() {
  const setProductData = useCreateProductDispatchContext();

  React.useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = fetch("http://localhost:3001/allproducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const data = await (await response).json();

      // console.log(data);

      setProductData.handleProductChange(data);
    } catch (error) {
      console.log(error);
    }
  };

  const products = useCreateProductStateContext();
  console.log(products.productData);
  return (
    <div>
      <div className="glasses">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 mt-5">
              <div className="titlepage">
                <h2>Our Sneakers</h2>
                <p>
                  Sneakers Plug keen looking new stores bolstered by a scope of
                  better quality items are gone for offering a better shopping
                  knowledge than its clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {products.productData.map((value) => {
            return (
              <div className="container">
                <div className="block-container">
                  <img
                    src={"http://localhost:3001/images/" + value.image}
                    className="product-images"
                  />
                  <p className="data-props ">
                    <span className="span-headings">Shoe name: </span>
                    {value.shoeName}
                  </p>
                  <p className="data-props ">
                    <span className="span-headings"> Size: </span>
                    {value.shoeSize}
                  </p>
                  <p className="data-props ">
                    <span className="span-headings">Type: </span>
                    {value.shoeType}
                  </p>
                  <p className="data-props ">
                    <span className="span-headings">Remaining: </span>
                    {value.remainingItems}
                  </p>
                  <button>Buy</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-md-12">
        <a className="read_more" href="#">
          Read More
        </a>
      </div>
    </div>
  );
}
