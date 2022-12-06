import React, { useState } from "react";
import "./DetailProduct.scss";

const DetailProduct = (props) => {
  const [stateDetailProduct, setStateDetailProduct] = useState(props.product);
  console.log("props detail", props);
  
  return (
    <>
      <div class="wrapper">
        <div className="d-flex">
          <div class="product-img col-6">
            <img class="content-img" src={stateDetailProduct.img} />
          </div>
          <div class="product-info col-6">
            <div class="product-text">
              <h1>{stateDetailProduct.name}</h1>
              <p>{stateDetailProduct.desscription} </p>
            </div>
            <div class="product-price-btn">
              <p>
                <span className="span-detail">{stateDetailProduct.price}</span>$
              </p>
              <button class="button-buy" type="button">
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailProduct;
