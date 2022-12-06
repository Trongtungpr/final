import { Header } from "antd/es/layout/layout";
import React from "react";
import Cart from "../../../components/cart/Cart";
import Footer from "../../layout/footer/Footer";

const CartPage = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
            <Cart/>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default CartPage;