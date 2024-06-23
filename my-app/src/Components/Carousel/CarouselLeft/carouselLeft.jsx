import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../Assets/LeftArrow.svg";
import styles from "./carouselLeft.module.css"

export default function CarouselLeft() {
  const swiper = useSwiper();
  const [atStart, setAtStart] = useState(swiper.atStart);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setAtStart(swiper.atStart);
    });
  }, []);
  return (
    <div className={styles.leftNav}>
        {!atStart && <LeftArrow onClick={() => swiper.slidePrev}/>}
    </div>
  )
}
