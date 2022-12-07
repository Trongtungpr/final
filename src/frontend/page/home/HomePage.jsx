// import ProductList from "../../../components/productlist/ProductList";
import HeaderSlider from "../../layout/banner/Banner";
import Footer from "../../layout/footer/Footer";
import HomeLayoutHeader from "../../layout/header/Header";

const HomePage = (props) => {
  return (
    <>
      <header>
        <HomeLayoutHeader />
        {props.type != "product" && (<HeaderSlider />)}
      </header>
      <div className="home-content-wrapper">{props.content}</div>
      {/* <main classname="py-5">
        <ProductList />
      </main> */}
      <Footer />
    </>
  );
};
export default HomePage;
