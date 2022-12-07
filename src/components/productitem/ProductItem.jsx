import "./scss/ProductItem.css";

import { FaShoppingCart, FaHeart, FaAlignJustify } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../../api/auth.api";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { loginAction } from "../../stores/slices/user.slice";
function ProductItem(props,{handleSetSate}) {
  const user = useSelector(state => state.user.userInfoState)
  const [stateData,setData] = useState({user:user,isAdd:false})
  const [stateCheck,setCheck] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleDetail = (e) => {
    navigate(ROUTERS.detail + "/" + props.product.id);
  };
  const Fetdata= useCallback(() => {
      const data = getUserById(stateData.user.data.id).then((res) =>{setData({user:res,isAdd:true}); setCheck(true) })
  },[])
  const handleAddToCart = () =>{
    console.log("Dfgdfgdfg",{...stateData.user.data,"cart":[...stateData.user.data.cart,...[{id:props.product.id,quantity:1}]]});
    console.log("satetae",stateData.isAdd);
    if(stateData.isAdd == true){
      updateUser(stateData.user.data.id,{...stateData.user.data,"cart":[...stateData.user.data.cart,...[{id:props.product.id,quantity:1}]]})
      setData({user:stateData.user,isAdd:false})
    }
    Fetdata()
    return;
  }
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
          <FaShoppingCart onClick={()=>handleAddToCart()}/>
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
