import Slider from "react-slick";

import Styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PromoSlider() {
  const settings = {
    dots: true,
    centerPadding: "60px",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={Styles.container}>
      <Slider {...settings}>
        <div className={Styles.imageContainer}></div>
        <div className={Styles.imageContainer}></div>
      </Slider>
    </div>
  );
}
