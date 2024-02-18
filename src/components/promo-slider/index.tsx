import { useState, useRef } from "react";
import Slider from "react-slick";

import ChevronLeft from "../icons/chevron-left";
import ChevronRight from "../icons/chevron-right";
import Styles from "./index.module.scss";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PromoSlider({
  padding = "350px",
}: {
  padding?: string;
}) {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: padding,
    slidesToShow: 1,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleDotClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.sliderContainer}>
        <Slider ref={sliderRef} {...settings}>
          <div className={Styles.imageContainer}>
            <img src="/assets/images/dummy-promo.jpg" alt="promo" />
          </div>

          <div className={Styles.imageContainer}>
            <img src="/assets/images/dummy-promo.jpg" alt="promo" />
          </div>

          <div className={Styles.imageContainer}>
            <img src="/assets/images/dummy-promo.jpg" alt="promo" />
          </div>
        </Slider>
      </div>

      <div className={Styles.navigationContainer}>
        <button className={Styles.btnNavigation} onClick={handlePrevClick}>
          <ChevronLeft />
        </button>

        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${Styles.dots} ${
              index === activeSlide ? Styles.active : null
            }`}
          />
        ))}

        <button className={Styles.btnNavigation} onClick={handleNextClick}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
