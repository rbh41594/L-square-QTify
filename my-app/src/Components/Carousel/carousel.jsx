import React, { useEffect } from "react";
import styles from "./carousel.module.css";
import CarouselLeft from "./CarouselLeft/carouselLeft";
import CarouselRight from "./CarouselRight/carouselRight";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return null;
};

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((ele) => {
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}
