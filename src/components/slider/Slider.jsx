import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.scss";

const HeaderSlider = () => {
  return (
    <Slide autoplay={true}>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage:
              "url(https://nongsananphat.com/wp-content/uploads/2020/10/Cach-chon-mua-rau-cu-qua-sach.jpg)",
          }}
        >
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage:
              "url(https://lasuco.vn/wp-content/uploads/rau-cu-qua-lasuco.jpg)",
          }}
        >
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage:
              "url(https://thuonghieusanpham.vn/stores/news_dataimages/thuonghieusanphamvn/072020/17/09/gia-rau-cu-qua-hom-nay-177-da-dang-khuyen-mai-23-.5359.jpg)",
          }}
        >
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage:
              "url(https://thuonghieusanpham.vn/stores/news_dataimages/thuonghieusanphamvn/072020/17/09/gia-rau-cu-qua-hom-nay-177-da-dang-khuyen-mai-23-.5359.jpg)",
          }}
        >
        </div>
      </div>
      
    </Slide>
  );
};

export default HeaderSlider;
