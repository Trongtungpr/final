import React, { useState, useEffect } from "react";
import "./DetailProduct.scss";

const DetailProduct = (props) => {
  const [stateDetailProduct, setStateDetailProduct] = useState(props.product);
  console.log("props", props);
  
  return (
    <>
      <div class="wrapper">
        <div class="product-img">
          <img class="content-img" src={stateDetailProduct.img} />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{stateDetailProduct.name}</h1>
            <p>
            {stateDetailProduct.desscription}
              Harvest Vases are a reinterpretation of peeled fruits and
              vegetables as functional objects.<br></br> The surfaces appear to
              be sliced and pulled aside,allowing room for growth.
            </p>
          </div>
          <div class="product-price-btn">
            <div className="price-detail">{stateDetailProduct.price}</div>
            <div className="bt">
              <button class="button-buy" type="button">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailProduct;
