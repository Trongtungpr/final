import ProductList from "../../../components/productlist/ProductList";
import HeaderSlider from "../../layout/banner/Banner";
import Footer from "../../layout/footer/Footer";
import HomeLayoutHeader from "../../layout/header/Header";

const HomePage = () => {
  return (
    <>
      <header>
        <HomeLayoutHeader />
        <HeaderSlider />
      </header>
      <main classname="py-5">
        <ProductList />
      </main>
      <Footer />
    </>
  );
};
export default HomePage;
