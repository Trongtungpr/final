import { Header } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../../components/cart/Cart";
import { getProducOfCartAction } from "../../../stores/actions/cartActions";
import Footer from "../../layout/footer/Footer";

const CartPage = (props) => {
  const user = useSelector((state) => state.user.userInfoState);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducOfCartAction(user.data));
  }, []);

  return (
    <div>
      <Header></Header>
      {/* <div className="home-content-wrapper">{props.content}</div> */}
      <div className="container">{cart != false && <Cart data={cart} />}</div>
      <Footer></Footer>
    </div>
  );
};
export default CartPage;
