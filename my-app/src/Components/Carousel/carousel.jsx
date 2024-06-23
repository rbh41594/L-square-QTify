import React, { useEffect } from "react";
import styles from "./carousel.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeft from "./CarouselLeft/carouselLeft";
import CarouselRight from "./CarouselRight/carouselRight";


const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
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
        {data.map((ele) => (
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
