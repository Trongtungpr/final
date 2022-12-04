import "./scss/ProductItem.css";

import { FaShoppingCart, FaHeart, FaAlignJustify } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../const";
function ProductItem(props) {
  const navigate = useNavigate();
  const handleDetail = (e) => {
    navigate(ROUTERS.detail + "/" + props.product.id);
  };
  return (
    <div class="item">
      <div class="product">
        <img class="img-fluid" src={props.product.img} />
      </div>
      <div class="text py-3 pb-4 px-3 text-center">
        <a href="#">{props.product.name}</a>
      </div>
      <div class="pricing">
        <span class="mr-2 price-dc">{props.product.price}</span>
      </div>
      <div className="item-cart">
        <h3 className="cart">
          <FaShoppingCart />
        </h3>
        <h3 className="cart">
          <FaHeart />
        </h3>
        <h3 className="cart">
          <FaAlignJustify onClick={handleDetail} />
        </h3>
      </div>
    </div>
  );
}

export default ProductItem;
