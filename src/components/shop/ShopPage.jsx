import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../const";
import "./ShopPage.scss";

function ShopPage() {
    const navigate = useNavigate();
    const handleShop = (e)=>{
        navigate(ROUTERS.product)
    };
  return (
    <div class="dropdown">
      <button class="dropbtn">SHOP</button>
      <div class="dropdown-content">
        <a href="" onClick={handleShop}>Shop</a>
        <a href="#">List Fruit</a>
        <a href="#">List Juice</a>
        <a href="#">List Spice</a>
        <a href="#">Handbook</a>
      </div>
    </div>
  );
}

export default ShopPage;
