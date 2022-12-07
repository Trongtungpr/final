import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import "./Viewdetail.scss";
import { getProduct } from "../../../src/api/product.api.js";
import DetailProduct from "../../components/detialproduct/DetailProduct";
import HomeLayoutHeader from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
// import { getDetailProductsAction } from "../../stores/slices/detailproduct.slice";

const ViewDetail = () => {
  const [itemData, setItemData] = useState(false);
  // const dispatch = useDispatch();

  const param = useParams();
  console.log("itemData", itemData);
  const FetProduct = useCallback(() => {
    getProduct(param.productid).then((res) => setItemData(res));
  }, [param]);

  useEffect(() => {
    FetProduct();
  }, []);
  return (
    <>
      <header>
        <HomeLayoutHeader />
      </header>
      <main>
        <div className="container">
          <h1 className="title-h1">Product</h1>
          {itemData != false && (
            <div>
              <DetailProduct product={itemData.data} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ViewDetail;
