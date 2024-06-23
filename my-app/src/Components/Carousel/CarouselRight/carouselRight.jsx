import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../Assets/RightArrow.svg"
import styles from "./carouselRight.module.css"

export default function CarouselRight() {
  const swiper = useSwiper();
  const [atEnd, setAtEnd] = useState(swiper.atEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
        setAtEnd(swiper.atStart);
    });
  }, []);
  return (
    <div className={styles.rightNav}>
        {!atEnd && <RightArrow onClick={() => swiper.slideNext}/>}
    </div>
  )
}
