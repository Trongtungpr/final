import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../stores/slices/product.slice";
// import { getProductsAction } from "../../../../../../stores/slices/product.slice";
import ProductItem from "../productitem/ProductItem";
import "./ProductList.scss";




function ProductList(props) {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const [Data,setData] = useState(productState)
  const { activeCategory } = props;

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <>
    <div className="title-product"><h1>Sản Phẩm</h1></div>
    <div class="row h-100 align-items-center g-2 d-flex">
       
      {productState.data.map((item) => (
        <div className="col-3">
          <ProductItem product={item}/>
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductList;